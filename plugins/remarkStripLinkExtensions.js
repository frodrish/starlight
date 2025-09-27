import { visit } from 'unist-util-visit';
import path from 'path'; 

export default function remarkStripLinkExtensions() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      let { url } = node;

      if (url && typeof url === 'string' && (url.endsWith('.md') || url.endsWith('.mdx'))) {
        
        try {
            if (!path.isAbsolute(url) && !url.startsWith('http')) {
                const newUrl = url.slice(0, -3); 
                node.url = newUrl;
            }
        } catch (e) {
            console.warn(`Could not process link URL: ${url}`, e);
        }
      }
    });
  };
}