declare module '*.js' {
  // Define the shape of the 'converted' export from your theme.js files
  // This assumes 'converted' is an object where keys are strings (like ':root' or '.dark')
  // and values are objects of CSS variable names to their string values.
  export const  converted: Record<string, Record<string, string>>;
}

declare module '*.css' {
  // This allows TypeScript to understand direct imports of .css files.
  // It assumes you are importing them for their side effects (i.e., making styles available)
  // and not for specific named exports from the CSS (which isn't standard for plain CSS).
  const content: any; // You can use a more specific type if your setup provides one for CSS modules.
  export default content;
} 