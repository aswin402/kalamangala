import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full py-4 flex justify-between items-center text-left text-white hover:text-primary transition-colors focus:outline-none"
        onClick={onClick}
      >
        <span className="font-heading font-medium text-lg">{title}</span>
        <ChevronDown 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-white/50'}`} 
          size={20} 
        />
      </button>
      <div 
        ref={contentRef} 
        className="h-0 overflow-hidden opacity-0"
      >
        <div className="pb-4 text-white/70 text-sm leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: string }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};
