# Issue with simple setup

## Steps to setup starlight manually

1. mkdir src
2. mkdir src/content
3. mkdir src/content/docs


4. create package.json 
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
5. npm install astro @astrojs/starlight sharp

6. Create one document
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
7. Create astro config
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
8. Configure Collection
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

9. npm run issue


## Fix
In order to make starlight work with this simple configuration I have to patch:
- [head.ts](fix/head.ts)
- [navigation.ts](fix/navigation.ts)

### Issue with navigation.ts
```
TypeError: Cannot read properties of undefined (reading 'hidden')
    at /workspaces/starlight/node_modules/@astrojs/starlight/utils/navigation.ts:243:44
    at Array.filter (<anonymous>)
    at treeify (/workspaces/starlight/node_modules/@astrojs/starlight/utils/navigation.ts:243:4)
    at getIntermediateSidebarFromConfig (/workspaces/starlight/node_modules/@astrojs/starlight/utils/navigation.ts:400:16)
    at getSidebar (/workspaces/starlight/node_modules/@astrojs/starlight/utils/navigation.ts:374:25)
    at generateRouteData (/workspaces/starlight/node_modules/@astrojs/starlight/utils/routing/data.ts:52:18)
    at useRouteData (/workspaces/starlight/node_modules/@astrojs/starlight/utils/routing/data.ts:40:20)
    at /workspaces/starlight/node_modules/@astrojs/starlight/routes/common.astro:18:46
```
*To address:*

cp fix/navigation.ts node_modules/@astrojs/starlight/utils/.

or modify astro.config.mjs to include sidebar

```
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'My delightful docs site',
      sidebar: []
    }),
  ],
});
```
 

### Issue with head.ts

```
TypeError: Cannot read properties of undefined (reading 'some')
    at hasOneOf (/workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:153:14)
    at hasTag (/workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:135:11)
    at /workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:174:38
    at Array.filter (<anonymous>)
    at mergeHead (/workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:174:21)
    at createHead (/workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:117:10)
    at getHead (/workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:110:9)
    at generateRouteData (/workspaces/starlight/node_modules/@astrojs/starlight/utils/routing/data.ts:64:9)
    at useRouteData (/workspaces/starlight/node_modules/@astrojs/starlight/utils/routing/data.ts:40:20)
    at /workspaces/starlight/node_modules/@astrojs/starlight/routes/common.astro:18:46
```
*To address:*
cp fix/head.ts node_modules/@astrojs/starlight/utils/.

### Run with fixed config

npm run dev

## Next step 

- Try with latest build