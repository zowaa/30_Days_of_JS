interface expectType {
  toBe: (val: number) => boolean;
  notToBe: (val: number) => boolean;
}

const expect = (num: number): expectType => {
  let obj = {
    toBe: function (val: number): boolean {
      if (val === num) return true;
      else throw new Error("Not Equal");
    },
    notToBe: function (val: number): boolean {
      if (val !== num) return true;
      else throw new Error("Equal");
    },
  };
  return obj;
};

console.log(expect(5).notToBe(5));

// Time complexity: O(1)