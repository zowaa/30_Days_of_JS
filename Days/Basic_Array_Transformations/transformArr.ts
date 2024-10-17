const mapping = (
  arr: number[],
  fn: (n: number, ind: number) => number,
): number[] => {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(fn(arr[i], i));
  }

  return new_arr;
};

let arr = [1, 2, 3, 4];
function fn(n: number) {
  return n + 2;
}
console.log(mapping(arr, fn));


// Time & Space Complexity O(n)