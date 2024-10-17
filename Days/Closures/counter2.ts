interface counterType {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
}

const createCounter2 = (num: number): counterType => {
  let init = num;
  let obj = {
    increment: function () {
      return ++init;
    },
    decrement: function () {
      return --init;
    },
    reset: function () {
      init = num;
      return init;
    },
  };

  return obj;
};

const c = createCounter2(5);

console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.decrement());
console.log(c.decrement());
console.log(c.reset());
console.log(c.increment());

// Time & Space Complexity O(1)
