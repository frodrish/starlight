import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightFullViewMode from 'starlight-fullview-mode'
import remarkLinkExtensions from './plugins/remarkLinkExtensions.js'
import remarkInjectTitle from './plugins/remarkInjectTitle.js' 
import yaml from '@rollup/plugin-yaml';
import generateSidebar from './plugins/generateSidebar.js'; 

const srcDir = './proto';
const customSidebar = generateSidebar(srcDir + '/index.md');

console.log('fred:', srcDir , '/index.md ->',customSidebar);

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
    }),
  ],
  markdown: {
    remarkPlugins: [remarkLinkExtensions,remarkInjectTitle],
  },
  vite: {
    plugins: [yaml()],
  },
});
