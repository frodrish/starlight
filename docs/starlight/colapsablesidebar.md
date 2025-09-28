# Make sidebar colapsable

[Reference](https://github.com/WindMillCode/starlight-fullview-mode)

1. npm install starlight-fullview-mode

2. Modify the configuration
```
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightFullViewMode from 'starlight-fullview-mode'

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
      plugins: [
        starlightFullViewMode({
           // Configuration options go here.
        })
       ],
    }),
  ],
});
EOF
```

3. npm run docs