# Setup Route and Sitebar

## To remove extession from links in MD and MDX files

1. Add this code to atro config
```
import remarkLinkExtensions from './plugins/remarkLinkExtensions.js'

...

  markdown: {
    remarkPlugins: [remarkLinkExtensions],
  },

...

```
2. Copy ./plugins/remarkLinkExtensions.js

TODO: Add code

## To automatically generate sidebar from md file

1. Add this code to atro config
```
import generateSidebar from './plugins/generateSidebar.js'; 

const srcDir = './docs';
const customSidebar = generateSidebar(srcDir + '/index.md');

...

  srcDir: srcDir,
  integrations: [
    starlight({
...
      sidebar: customSidebar,
...

```
2. Copy ./plugins/generateSidebar.js

TODO: Add code

