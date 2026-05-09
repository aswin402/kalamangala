import { type JSX, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { DOMParser as PmDOMParser } from '@tiptap/pm/model';
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Undo,
  Redo,
} from 'lucide-react';


function cleanStyles(body: HTMLElement): void {
  body.querySelectorAll('*').forEach((el) => {
    el.removeAttribute('style');
    if (el instanceof HTMLElement) el.className = '';
  });
}

function transformPastedHTML(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const body = doc.body;

  cleanStyles(body);

  // If paste already has heading tags, return cleaned HTML as-is
  if (body.querySelector('h1, h2, h3, h4, h5, h6')) {
    return body.innerHTML;
  }

  // Auto-detect structure from plain text paste (everything is <p>/<div>)
  const blocks = Array.from(body.children);
  if (blocks.length < 3) return body.innerHTML;

  let firstHeadingDone = false;
  let i = 0;

  while (i < blocks.length) {
    const el = blocks[i];
    const text = (el.textContent || '').trim();
    const rawText = el.textContent || '';

    if (!text) { i++; continue; }

    // Detect indented lines → collect as <ul>
    const isIndented = /^[\s\u00A0]{3,}\S/.test(rawText);
    if (isIndented) {
      const ul = doc.createElement('ul');
      const anchor = blocks[i];

      while (i < blocks.length) {
        const item = blocks[i];
        const itemText = (item.textContent || '').trim();
        const itemRaw = item.textContent || '';
        if (!itemText) { item.remove(); i++; continue; }
        if (!/^[\s\u00A0]{3,}\S/.test(itemRaw)) break;

        const li = doc.createElement('li');
        li.textContent = itemText.replace(/^[•●○►▸–—*\-]\s*/, '');
        ul.appendChild(li);
        if (item !== anchor) item.remove();
        i++;
      }
      anchor.replaceWith(ul);
      continue;
    }

    // Detect headings: short line, no trailing period/colon, no multi-sentence
    const isShort = text.length <= 80;
    const noPeriod = !text.endsWith('.');
    const noColon = !text.endsWith(':');
    const noMultiSentence = !/[.!?]\s+[A-Z]/.test(text);

    if (isShort && noPeriod && noColon && noMultiSentence) {
      const tag = !firstHeadingDone ? 'h1' : 'h2';
      const heading = doc.createElement(tag);
      heading.textContent = text;
      el.replaceWith(heading);
      if (!firstHeadingDone) firstHeadingDone = true;
    }

    i++;
  }

  return body.innerHTML;
}

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ content, onChange, placeholder = 'Write your content here...' }: RichTextEditorProps): JSX.Element {

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'text-primary underline' },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    onUpdate: ({ editor: ed }) => {
      onChange(ed.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'blog-content max-w-none focus:outline-none min-h-[300px] px-4 py-3 text-foreground',
      },
      transformPastedHTML(html) {
        return transformPastedHTML(html);
      },
      handlePaste(view, event) {
        const clipboardHTML = event.clipboardData?.getData('text/html') || '';
        const clipboardText = event.clipboardData?.getData('text/plain') || '';

        // CASE 1: HTML paste with existing structure (from website) → clean styles, preserve structure
        if (clipboardHTML.trim()) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(clipboardHTML, 'text/html');
          cleanStyles(doc.body);

          const hasStructure = doc.body.querySelector('h1, h2, h3, h4, h5, h6, ul, ol');
          if (hasStructure) {
            // Already has headings/lists — insert cleaned HTML
            const wrapper = document.createElement('div');
            wrapper.innerHTML = doc.body.innerHTML;
            const pmParser = PmDOMParser.fromSchema(view.state.schema);
            const slice = pmParser.parseSlice(wrapper);
            view.dispatch(view.state.tr.replaceSelection(slice));
            return true;
          }
        }

        // CASE 2: No structure found — use plain text auto-detection
        if (!clipboardText.trim()) return false;

        const lines = clipboardText.split('\n');
        const htmlParts: string[] = [];
        let firstHeadingDone = false;
        let i = 0;

        while (i < lines.length) {
          const raw = lines[i];
          const text = raw.trim();

          if (!text) { i++; continue; }

          // Detect indented or bulleted lines → <ul>
          if (/^\s{3,}\S/.test(raw) || /^\s*[•●○►▸–—]\s/.test(raw)) {
            const items: string[] = [];
            while (i < lines.length) {
              const lr = lines[i];
              const lt = lr.trim();
              if (!lt) { i++; continue; }
              if (!/^\s{3,}\S/.test(lr) && !/^\s*[•●○►▸–—]\s/.test(lr)) break;
              items.push(lt.replace(/^[•●○►▸–—*\-]\s*/, ''));
              i++;
            }
            htmlParts.push('<ul>' + items.map(it => `<li>${it}</li>`).join('') + '</ul>');
            continue;
          }

          // Detect headings: short, no trailing period/colon, single-clause
          const isShort = text.length <= 80;
          const noPeriod = !text.endsWith('.');
          const noColon = !text.endsWith(':');
          const noMultiSentence = !/[.!?]\s+[A-Z]/.test(text);

          if (isShort && noPeriod && noColon && noMultiSentence) {
            if (!firstHeadingDone) {
              htmlParts.push(`<h1>${text}</h1>`);
              firstHeadingDone = true;
            } else {
              htmlParts.push(`<h2>${text}</h2>`);
            }
          } else {
            htmlParts.push(`<p>${text}</p>`);
          }

          i++;
        }

        const structuredHTML = htmlParts.join('');
        const wrapper = document.createElement('div');
        wrapper.innerHTML = structuredHTML;

        const pmParser = PmDOMParser.fromSchema(view.state.schema);
        const slice = pmParser.parseSlice(wrapper);
        view.dispatch(view.state.tr.replaceSelection(slice));

        return true;
      },
    },
  });


  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL:', previousUrl ?? '');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
    } else if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  }, [editor]);

  if (!editor) return <div className="h-[300px] bg-background border border-border rounded-lg animate-pulse" />;

  const ToolbarButton = ({
    onClick,
    active,
    title,
    children,
  }: {
    onClick: () => void;
    active?: boolean;
    title: string;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-2 rounded transition-colors ${
        active
          ? 'bg-primary text-primary-foreground'
          : 'hover:bg-muted text-foreground'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-background">
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border bg-card">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-px h-6 bg-border mx-1" />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          active={editor.isActive('heading', { level: 1 })}
          title="Heading 1"
        >
          <Heading1 className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          active={editor.isActive('heading', { level: 2 })}
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          active={editor.isActive('heading', { level: 3 })}
          title="Heading 3"
        >
          <Heading3 className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-px h-6 bg-border mx-1" />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
          title="Ordered List"
        >
          <ListOrdered className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-px h-6 bg-border mx-1" />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive('blockquote')}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={setLink}
          active={editor.isActive('link')}
          title="Add Link"
        >
          <LinkIcon className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-px h-6 bg-border mx-1" />

        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </ToolbarButton>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
