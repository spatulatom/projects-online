import { defineConfig } from "vite";

/**
 * VITE CONFIGURATION EXPLAINED
 *
 * This file configures Vite, which is the build tool and dev server used in this project.
 *
 * TYPESCRIPT HANDLING:
 * Even without a tsconfig.json file, Vite automatically transpiles TypeScript files (.ts/.tsx)
 * through its built-in esbuild integration. This happens during both:
 *   1. Development (npm run dev) - TypeScript errors are reported but don't stop compilation
 *   2. Production build (npm run build) - TypeScript files are compiled to JavaScript
 *
 * HOW IT WORKS:
 * - Vite uses esbuild (much faster than tsc) for transpilation
 * - Type checking is done separately and doesn't block development
 * - Without tsconfig.json, Vite uses default TypeScript settings
 * - This is why you can use .ts files without explicit TypeScript setup
 *
 * LIMITATIONS:
 * - For full TypeScript type checking, you would still benefit from a tsconfig.json
 * - Some advanced TypeScript features might require explicit configuration
 * - Type errors won't prevent the build but could cause runtime errors
 *
 * Adding a tsconfig.json would give you more control over TypeScript behavior
 * and enable better editor integration and stricter type checking.
 */

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000, // change port number if you prefer
  },

  /**
   * BROWSERSLIST INTEGRATION
   *
   * By default, Vite/esbuild DOES NOT respect the browserslist configuration
   * from package.json, which is a significant gap in the build pipeline.
   *
   * The settings below ensure that:
   * 1. JavaScript is transpiled to support the same browsers as your CSS
   * 2. Your browserslist-config-baseline is respected for JS too
   * 3. The entire application has consistent browser compatibility
   *
   * Without this configuration, you would have:
   * - CSS with prefixes for older browsers (from PostCSS/Autoprefixer)
   * - JavaScript with modern features that those same browsers can't support
   */
  build: {
    // Make Vite generate JS compatible with your browserslist
    target: "es2015", // Ensures compatibility with browsers in browserslist

    // Additional esbuild options that respect browserslist
    rollupOptions: {
      output: {
        // Ensure that generated chunks are compatible with target browsers
        // This prevents using features that might not be supported
        generatedCode: "es2015",
      },
    },
  },

  // Configure esbuild for development as well
  esbuild: {
    // A conservative target that aligns with browserslist-baseline
    target: "es2015",
    // Ensure JSX/TSX are properly handled
    jsx: "transform",
    // Keep source maps for debugging
    sourcemap: true,
  },
});
