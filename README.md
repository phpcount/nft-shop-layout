# Vue 3 + TypeScript + Vite

## Only simple page layout

### Home page adapted for mobile pages

[Link on the template](https://frontend-skills.com/template/mzHNAnJhtO5v2mobIABK)

### Build project:

Step 1
```
npm run build
```

Step 2
```
npm run preview
```

#### Hints (FontWeight)

```
100 – Thin || Hairline
200 – Extra Light || Ultra Light || Thin
300 – Light
400 – Normal || Regular
500 – Medium
600 – Semi Bold || Demi Bold
700 – Bold
800 – Extra Bold || Ultra Bold || Heavy
900 – Black || Heavy
```


This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
