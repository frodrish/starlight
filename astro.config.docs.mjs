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
