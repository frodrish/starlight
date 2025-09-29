import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightFullViewMode from 'starlight-fullview-mode'
import remarkLinkExtensions from './plugins/remarkLinkExtensions.js'
import remarkInjectTitle from './plugins/remarkInjectTitle.js'
import generateSidebar from './plugins/generateSidebar.js'; 
import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';

const srcDir = './docs';
const customSidebar = generateSidebar(srcDir + '/index.md');

export default defineConfig({
  srcDir: srcDir,
  integrations: [
    starlight({
      title: 'Doc Setup',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/frodrish/starlight' }],
      sidebar: customSidebar,
      plugins: [
        starlightFullViewMode({
        })
      ],
      customCss: [
        './docs/styles/global.css',
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkLinkExtensions,remarkInjectTitle],
  },
  vite: {
    plugins: [tailwindcss(),yaml()],
  },
});
