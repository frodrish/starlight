import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightFullViewMode from 'starlight-fullview-mode'
import remarkStripLinkExtensions from './plugins/remarkStripLinkExtensions.js'

export default defineConfig({
  srcDir: './docs',
  integrations: [
    starlight({
      title: 'My docs site',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/frodrish/starlight' }],
      sidebar: [{
        label: 'test',
        items: [
          { label: 'Example Guide', slug: 'test/test' },
        ],
      }
      ],
      plugins: [
        starlightFullViewMode({
        })
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkStripLinkExtensions],
  },
});
