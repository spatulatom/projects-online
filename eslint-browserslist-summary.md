# Project Linting & Build Compatibility Summary

## ESLint & Browserslist

- **ESLint** is set up to lint JavaScript and TypeScript files using the recommended rules.
- **ESLint does NOT natively use `browserslist`** for browser compatibility checks.
- Plugins like `eslint-plugin-compat` or `eslint-plugin-es-x` are required to check browser compatibility, but:
  - These plugins do **not** fully support the new ESLint flat config (as of 2025).
  - Compatibility checks may not work reliably with the current ESLint setup.
- **Current setup:** ESLint is used for code quality, not browser compatibility.

## Browserslist

- The project uses a `browserslist` field in `package.json`:
  ```json
  "browserslist": [
    "extends browserslist-config-baseline"
  ]
  ```
- This means the project targets a modern baseline of browsers for both JS and CSS processing.
- You can change the target browsers by editing this field.

## Vite, esbuild, and Babel

- **Vite** is the build tool and dev server.
- **esbuild** is used by default for JS/TS transpilation and minification.
  - esbuild is fast, but does **not** fully use `browserslist` (targets modern browsers by default).
  - If you need legacy browser support (like IE11), use the [@vitejs/plugin-legacy](https://vitejs.dev/plugins/#vitejs-plugin-legacy) or switch to Babel.
- **Babel** is NOT used in this project. If you want Babel to handle browser compatibility, you must add and configure it.

## CSS (Tailwind & PostCSS)

- **PostCSS** is configured with `tailwindcss` and `autoprefixer` plugins.
- **Autoprefixer** uses your `browserslist` settings to add necessary CSS prefixes for your target browsers.
- Vite automatically detects and uses your `postcss.config.cjs`.

## Key Takeaways

- **ESLint**: Lints code quality, not browser compatibility (unless a plugin is added, which may not work with flat config).
- **Browserslist**: Controls CSS prefixing and (with extra plugins) can control JS transpilation.
- **Vite + esbuild**: Fast, modern builds; for legacy browser support, use the legacy plugin or Babel.
- **PostCSS/Autoprefixer**: CSS is always aligned with browserslist.

---

**To check or change browser support:**

- Edit the `browserslist` field in `package.json`.
- For legacy JS support, add `@vitejs/plugin-legacy` or Babel.
- For CSS, Autoprefixer will always follow browserslist.

---

_Last updated: June 25, 2025_
