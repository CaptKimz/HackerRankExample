export const flippingMatrix = () => {
  let data = [
    [112, 42, 83, 119, 20],
    [56, 125, 56, 49, 26],
    [15, 78, 101, 43, 38],
    [62, 98, 114, 108, 29],
    [61, 99, 115, 107, 34],
  ];
  flippingMatrixFunc(data);
};

function flippingMatrixFunc(matrix) {
  // Write your code here

  // console.log(matrix);

  let lengthSplit = matrix.length / 2;
  // console.log("lengthSplit: ", lengthSplit);

  let fullLength = matrix.length - 1;
  // console.log("fullLength: ", fullLength);

  let total = 0;

  for (var i = 0; i < lengthSplit; i++) {
    // console.log(i)

    for (let j = 0; j < lengthSplit; j++) {
      // console.log(j);

      let a1 = matrix[i][j];
      // console.log("a1: ", a1);

      let a2 = matrix[fullLength - i][j];
      // console.log("a2: ", a2);

      let a3 = matrix[i][fullLength - j];
      // console.log("a3: ", a3);

      let a4 = matrix[fullLength - i][fullLength - j];
      // console.log("a4: ", a4);

      total += Math.max(a1, a2, a3, a4);
      // arrMirrorNumbers.push([a1,a2,a3,a4])
    }
  }
  console.log('flippingMatrixFunc', total);
}
