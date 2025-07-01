// Mock for codegenNativeComponent to prevent fabric component errors
export default function codegenNativeComponent(name) {
  return function(props) {
    return null; // Return null for web - these components don't exist in web
  };
}