## starlight

- [References](docs/starlight/reference.md) - Not required
- [Setup](docs/starlight/setup.md)
- [Run From Doc](docs/starlight/runfromdocs.md)
- [Make Fontmatter Optional](docs/starlight/makefontmatteroptional.md)
- [Route and Side Bar](docs/starlight/routesidebar.md)
- [Make sidebar colapsable](docs/starlight/colapsablesidebar.md)

## vitepress
- [References](docs/vitepress/reference.md)

### Add tail tailwind

[Tailwind](https://tailwindcss.com/)
[Starlight & Tailwind](https://starlight.astro.build/guides/css-and-tailwind/)

1. npx astro add tailwind

2. npm install @astrojs/starlight-tailwind

### Alipine JS 

[Alipine](https://alpinejs.dev/)
[Astro & Alipne](https://docs.astro.build/en/guides/integrations-guide/alpinejs/)

1. npx astro add alpinejs

### Add YAML

1. npm install @rollup/plugin-yaml

2. Modify astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  // ...
  vite: {
    plugins: [yaml()],
  },
});
```

