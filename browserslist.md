# Browserslist Configuration Explained

This project uses a specific browserslist configuration in `package.json`:

```json
"browserslist": [
  "extends browserslist-config-baseline"
]
```

## How Browserslist Affects Different Tools

This configuration affects multiple tools in the project:

1. **PostCSS/Autoprefixer** - Controls which CSS features get prefixed
2. **Tailwind** - Uses this indirectly through PostCSS for CSS generation
3. **ESLint compat plugin** - Uses this to warn about unsupported JS features
4. **Vite** - Now configured (in vite.config.js) to respect this for JS output

## The Browserslist-Config-Baseline Package

The `browserslist-config-baseline` package provides a curated list of baseline browser versions to support, ensuring good compatibility without excessive legacy support.

## Why This Matters

Without proper configuration, you might end up with:

- CSS with prefixes for older browsers
- JavaScript with modern features those same browsers can't support

The updated configuration in `vite.config.js` ensures consistent browser compatibility across both CSS and JavaScript.

## Verifying Your Configuration

You can see which browsers are supported by running:

```bash
npx browserslist
```

This will show the actual browser versions being targeted by your configuration.
