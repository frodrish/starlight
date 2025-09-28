/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('vfile').VFile} VFile
 */

import { visit } from 'unist-util-visit';
import { VFile } from 'vfile';
import YAML from 'yaml'; // You'll need to install this: npm install yaml

export default function remarkInjectTitle() {
  return function transformer(tree, file) {

    // 1. Check for existing frontmatter title
    let existingTitle = null;

    visit(tree, 'yaml', (node) => {
      try {
        const data = YAML.parse(node.value);
        if (data && data.title) {
          existingTitle = data.title;
        }
      } catch (err) {
        // Ignore YAML parsing errors, assume no valid frontmatter title exists
      }
      return false; 
    });

    if (existingTitle) {
      return tree;
    }

    // 2. Find title from the first level 1 heading
    let newTitle = null;

    visit(tree, 'heading', (node) => {
      // Only check for H1 (depth: 1)
      if (node.depth === 1) {
        const textNodes = node.children.filter(child => child.type === 'text');
        if (textNodes.length > 0) {
          newTitle = textNodes.map(n => n.value).join('');
          return false; 
        }
      }
    });
    
    // 3. If no heading, use file name as title
    if (!newTitle) {

      const filePath = file.path; 
      
      if (filePath) {
         let baseName = filePath.split('/').pop().replace(/\.[^/.]+$/, "");
        
        newTitle = baseName
          .replace(/-/g, ' ') 
          .replace(/(^\w|\s\w)/g, m => m.toUpperCase()); 
      }
    }

    // 4. Inject the new frontmatter if a title was found
    if (newTitle) {

      const yamlContent = YAML.stringify({ title: newTitle.trim() });
      const yamlNode = {
        type: 'yaml',
        value: yamlContent.trim(),
        position: {
            start: {line: 1, column: 1, offset: 0},
            end: {line: 1, column: yamlContent.length, offset: yamlContent.length}
        }
      };

      tree.children.unshift(yamlNode);
    }

    return tree;
  };
}