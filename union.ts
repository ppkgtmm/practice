/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
  }
  
padLeft("Hello world", 4); // returns "    Hello world"
// will  error 
// padLeft("Hello world", undefined);

// If we have a value that is a union type, we can only access 
// members that are common to all types in the union without type checking safely.

