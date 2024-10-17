const filterArray = (
  arr: number[],
  fn: (n: number, ind: number) => boolean,
): number[] => {
  let filteredArr: number[] = [];
  arr.forEach((n: number, i: number) => {
    if (fn(n, i)) filteredArr.push(n);
  });

  return filteredArr;
};

const arr1 = [1, -2, 3];
function fn1() {
  return false;
}
console.log(filterArray(arr1, fn1));

// Time & Space Complexity O(n)
