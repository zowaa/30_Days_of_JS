const createCounter = (n: number): (() => number) => {
  return function counter(): number {
    return n++;
  };
};

const count = createCounter(10);
console.log(count());
console.log(count());
console.log(count());

// Time & Space Complexity O(1)
