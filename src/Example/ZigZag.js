export const zigZag = () => {
  processData([1, 7, 3, 4, 5, 2, 6]);
};

function processData(input) {
  //Enter your code here
  let mid = Math.floor(input.length / 2, 10);
  let length = input.length - 1;
  let arr = input.sort((a, b) => a - b);
  let max = arr[length];
  arr[length] = arr[mid];
  arr[mid] = max;
  let left = mid + 1;
  let right = length - 1;
  while (left < right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
  console.log('zigZag', arr);
}
