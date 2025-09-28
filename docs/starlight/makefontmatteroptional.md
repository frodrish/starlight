# Make Fontmatter Optional

## Patch starlight to make fontmatter optional
[patch-package](https://github.com/ds300/patch-package#readme)

1. npm i patch-package -d
2. Add pathes folder to your repo
3. Add "postinstall": "patch-package" to package.json

## Automatically add fontmatter title to files

1. Add this code to atro config
```
import remarkInjectTitle from './plugins/remarkInjectTitle.js'

...

  markdown: {
    remarkPlugins: [remarkInjectTitle],
  },

...

2. Copy ./plugins/remarkInjectTitle.js

TODO: Include code here