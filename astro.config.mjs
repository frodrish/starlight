import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  integrations: [starlight({
    title: 'My delightful docs site',
    social: [ { icon: 'github', label: 'GitHub', href: 'https://github.com/frodrish/starlight'}],
    sidebar: [{ 
      label: 'test',      
      items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'test/test' },
                  ], }	],
  }), alpinejs()],

  vite: {
    plugins: [tailwindcss()],
  },
});