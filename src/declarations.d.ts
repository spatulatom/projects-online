/**
 * Global declarations for JavaScript modules
 *
 * This file provides TypeScript type declarations for JavaScript modules
 * that don't have their own type definitions. This helps TypeScript understand
 * how to type these modules when they're imported.
 */

declare module "*.js" {
  const content: any;
  export default content;
}

// If you want to add more specific typing for certain modules, you can do so like:
// declare module './dark-mode.js' {
//   export default function modes(): void;
// }
