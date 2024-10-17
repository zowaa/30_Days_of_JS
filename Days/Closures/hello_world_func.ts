const createHelloWorld = (): ((...args: any[]) => string) => {
  return function (...args: any[]): string {
    return "Hello World";
  };
};

const f = createHelloWorld();
console.log(f());

// Time & Space Complexity O(1)
