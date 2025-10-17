---
title: Test to use Starlight without fontmatter titles
---

## Purpose
The goal of this project is to reduce cryptic errors in starlight in case of non-stanadrd configuration

## Patch
The patch address logic for undefine in 3 different places:
- @astrojs/starlight/utils/head.ts
- @astrojs/starlight/utils/navigation.ts
- @astrojs/starlight/utils/routing/index.ts

Might make sense to enhance the path to provide warnings in these situations.

### Example
[stackblitz](https://stackblitz.com/~/github.com/frodrish/HelloStarlight)

### Tests
There are 3 tests:
- [NoTitleAndNoHeader](test/notitlenoheader)
- [NoTitleAndWithHeader](test/notitlewithheader)
- [WithTitle](test/withtitle

### Error examples before the patch

#### @astrojs/starlight/utils/head.ts
For missing title
```
TypeError: Cannot read properties of undefined (reading 'some')
    at hasOneOf (/workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:153:14)
    at hasTag (/workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:135:11)
    at /workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:174:38
    at Array.filter (<anonymous>)
    at mergeHead (/workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:174:21)
    at createHead (/workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:117:10)
    at getHead (/workspaces/starlight/node_modules/@astrojs/starlight/utils/head.ts:110:9)
    at generateRouteData (/workspaces/starlight/node_modules/@astrojs/starlight/utils/routing/data.ts:64:9)
    at useRouteData (/workspaces/starlight/node_modules/@astrojs/starlight/utils/routing/data.ts:40:20)
    at /workspaces/starlight/node_modules/@astrojs/starlight/routes/common.astro:18:46
```

#### @astrojs/starlight/utils/navigation.ts

```
TypeError: Cannot read properties of undefined (reading 'hidden')
    at /workspaces/starlight/node_modules/@astrojs/starlight/utils/navigation.ts:243:44
    at Array.filter (<anonymous>)
    at treeify (/workspaces/starlight/node_modules/@astrojs/starlight/utils/navigation.ts:243:4)
    at getIntermediateSidebarFromConfig (/workspaces/starlight/node_modules/@astrojs/starlight/utils/navigation.ts:400:16)
    at getSidebar (/workspaces/starlight/node_modules/@astrojs/starlight/utils/navigation.ts:374:25)
    at generateRouteData (/workspaces/starlight/node_modules/@astrojs/starlight/utils/routing/data.ts:52:18)
    at useRouteData (/workspaces/starlight/node_modules/@astrojs/starlight/utils/routing/data.ts:40:20)
    at /workspaces/starlight/node_modules/@astrojs/starlight/routes/common.astro:18:46
```

#### @astrojs/starlight/utils/routing/index.ts

In this case the content is not marked as draft but draft is undefined. The content is available at dev time but not at build time.



