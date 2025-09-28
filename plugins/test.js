import { readSync } from 'to-vfile';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkInjectTitle from './remarkInjectTitle.js'; 

// Use the VFile utility to simulate file paths
import path from 'path';

// This function processes one file and prints the input/output
async function processAndPrint(fileName, content) {
  // Create a VFile object with content and a mock path for the plugin to use
  const file = readSync({ 
    path: path.resolve('./plugins/',fileName), 
    value: content 
  }); 

  const processor = unified()
    .use(remarkParse)
    // 1. Must parse existing frontmatter before our plugin
    .use(remarkFrontmatter, ['yaml']) 
    // 2. Our custom plugin
    .use(remarkInjectTitle) 
    .use(remarkStringify);

  const result = await processor.process(file);

  console.log(`\n==========================================`);
  console.log(`TEST CASE: ${fileName}`);
  console.log(`==========================================`);
  console.log(`\n--- Original Markdown ---`);
  console.log(content.trim());
  console.log(`\n--- Processed Markdown (Result) ---`);
  console.log(String(result).trim());
}


// --- Execute Test Cases ---

(async () => {
    // Case 1: Title from the first H1
    await processAndPrint(
        'my-first-post.md', 
        `# A Brilliant Title Here
        
This is the content of my post.
`
    );

    // Case 2: Title from the file name (slugified)
    await processAndPrint(
        'auto-generated-title.md', 
        `
This post starts with content, no heading.
`
    );

    // Case 3: Existing title (should be ignored and left alone)
    await processAndPrint(
        'existing-data.md', 
        `---
title: The Final Word
author: AI Assistant
---

# This Heading is Ignored
`
    );
})();