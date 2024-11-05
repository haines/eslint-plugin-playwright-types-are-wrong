# [eslint-plugin-playwright#330](https://github.com/playwright-community/eslint-plugin-playwright/issues/330)

```console
$ pnpm install

$ pnpm run build

src/index.ts:5:20 - error TS2339: Property 'configs' does not exist on type 'typeof import("eslint-plugin-playwright-types-are-wrong/node_modules/.pnpm/eslint-plugin-playwright@2.0.0_eslint@9.14.0/node_modules/eslint-plugin-playwright/index")'.

5   playwrightPlugin.configs["flat/recommended"],
                     ~~~~~~~


Found 1 error in src/index.ts:5


$ pnpm test

❗️ The resolved types use export default where the JavaScript file appears to use module.exports =. This will cause TypeScript under the node16 module mode to think an extra .default property access is required, but that will likely fail at runtime. These types should use export = instead of export default. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseExportDefault.md

🎭 Import resolved to a CommonJS type declaration file, but an ESM JavaScript file. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseCJS.md


┌───────────────────┬──────────────────────────────┐
│                   │ "eslint-plugin-playwright"   │
├───────────────────┼──────────────────────────────┤
│ node10            │ 🟢                           │
├───────────────────┼──────────────────────────────┤
│ node16 (from CJS) │ ❗️ Incorrect default export │
├───────────────────┼──────────────────────────────┤
│ node16 (from ESM) │ 🎭 Masquerading as CJS       │
├───────────────────┼──────────────────────────────┤
│ bundler           │ 🟢                           │
└───────────────────┴──────────────────────────────┘
```
