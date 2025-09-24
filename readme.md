# starlight

## Steps to setup starlight manually

1. Create directories 
```
mkdir src
mkdir src/content
mkdir src/content/docs
```


2. create package.json 
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
3. npm install astro @astrojs/starlight sharp

4. Create documents
```
cat > src/content/docs/index.md << EOF
---
title: My docs
description: Learn more about my project in this docs site built with Starlight.
---

Welcome to my project!
EOF
cp src/content/docs/index.md .
```
5. Create astro config
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
6. Configure Collection
```
cat > src/content.config.ts << EOF
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
EOF
```

7. npm run issue

