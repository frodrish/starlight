# Steps to setup starlight manually

1. mkdir src
2. mkdir src/content
3. mkdir src/content/docs
4. mkdir src/content/pages
5. mkdir src/pages

6. create package.json 
```
cat > package.json << EOF
{
  "name": "example",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "astro": "astro",
    "dev": "astro dev"
  }
}
EOF
```
7. npm install astro @astrojs/starlight sharp

8. Create one document
```
cat > src/content/docs/index.md << EOF
---
title: My docs
description: Learn more about my project in this docs site built with Starlight.
---

Welcome to my project!
EOF
cp content/docs/index.md .
```
9. Create astro config
```
cat > astro.config.mjs << EOF
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'My delightful docs site',
    }),
  ],
});
EOF
```
10. Configure Collection
```
cat > src/content/content.config.ts << EOF
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
EOF
```
12. npm run dev


