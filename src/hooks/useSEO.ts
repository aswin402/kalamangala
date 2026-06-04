import { useEffect } from 'react';

export function useSEO(title: string, description: string) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update canonical URL
    const canonicalUrl = `https://www.kalamangala.com${window.location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(linkCanonical);
    }

    // Update og:url
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    } else {
      const ogMeta = document.createElement('meta');
      ogMeta.setAttribute('property', 'og:url');
      ogMeta.setAttribute('content', canonicalUrl);
      document.head.appendChild(ogMeta);
    }

    return () => {
      document.title = "Kalamangala | Redefining Luxury Living";
    };
  }, [title, description]);
}
