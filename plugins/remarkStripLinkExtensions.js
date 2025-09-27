import { visit } from 'unist-util-visit';
import path from 'path'; // Node's built-in path utility

/**
 * A remark plugin to remove the .md extension from relative links.
 * @returns {import('unified').Transformer}
 */
export default function remarkStripLinkExtensions() {
  return (tree) => {
    // 1. Traverse the AST and find all nodes of type 'link'
    visit(tree, 'link', (node) => {
      let { url } = node;

      // 2. Check if the URL is valid and contains the .md extension
      if (url && typeof url === 'string' && url.endsWith('.md')) {
        
        // 3. Check if the URL is a relative path (e.g., './page.md' or 'folder/file.md')
        // We use path.isAbsolute to ensure we don't accidentally rename external links like 'http://example.com/doc.md'
        try {
            if (!path.isAbsolute(url) && !url.startsWith('http')) {
                // 4. Strip the extension
                const newUrl = url.slice(0, -3); // Removes the last 3 characters (.md)
                node.url = newUrl;
                
                // Optional: Log the change for debugging
                // console.log(`Changed link: ${url} -> ${newUrl}`);
            }
        } catch (e) {
            // Handle any unexpected path errors
            console.warn(`Could not process link URL: ${url}`, e);
        }
      }
    });
  };
}