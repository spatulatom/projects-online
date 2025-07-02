import { defineConfig } from 'vite'

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
  
  // The following settings are implicit defaults in Vite:
  
  // esbuild is used to transpile TypeScript to JavaScript
  // esbuild: {
  //   target: 'esnext'
  // }
  
  // .ts and .tsx files are automatically included
  // resolve: {
  //   extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  // }
})
