import { visit } from 'unist-util-visit';

export default function remarkLinkExtensions() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      let { url } = node;

      console.log('Processing link URL:', url);
      const extensionsToStrip = ['.mdx', '.md'];
        
      try {
          if (url && typeof url === 'string' && !url.startsWith('http')) {
              for (const ext of extensionsToStrip) {
                if (url.endsWith(ext)) {
                  node.url = url.slice(0, -ext.length);
                  break; 
                }
              }
          }
      } catch (e) {
          console.warn(`Could not process link URL: ${url}`, e);
      }
      
    });
  };
}