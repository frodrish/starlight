# How to have starlight run in docs

[Discussion](https://github.com/withastro/starlight/discussions/1257)

[Reference](https://stackblitz.com/edit/github-yvpchbvn?file=src%2Fcontent.config.ts)

0. rm -rf src (optional)

1. Create directories
```
mkdir docs
mkdir docs/test
```

2 to 3 run steps in above section if required

Add ```"docs": "astro dev --config astro.config.docs.mjs",``` in package.json

4. Create documents
```
cat > docs/index.md << EOF
---
title: My docs
description: Learn more about my project in this docs site built with Starlight.
---

Welcome to my project!
EOF
cp docs/index.md docs/test/.
cp docs/index.md docs/test/test.md
```

5. Create astro.config.doc.mjs

Need to modify the srcDir of the config 

```
cat > astro.config.doc.mjs << EOF
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  srcDir: './docs',
  integrations: [
    starlight({
      title: 'My docs site',
      social: [ { icon: 'github', label: 'GitHub', href: 'https://github.com/frodrish/starlight'}],
      sidebar: [{ 
        label: 'test',      
        items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'test/test' },
					], 
        }	
      ],
    }),
  ],
});
EOF
```

6. Configure Collection
```
cat > docs/content.config.ts << EOF
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
    docs: defineCollection({
    loader: glob({ pattern: '**/*.(md|mdx)', base: './docs' }),
    schema: docsSchema(),
  }),
};
EOF
```

7. npm run docs