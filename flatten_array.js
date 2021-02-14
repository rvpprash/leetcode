//Flatten array
//input -> [[1,2,[3]],4, [[[5]]]]
//output -> [1,2,3,4,5]

const input = [[1, 2, [3]], 4, [[[5]]]];

function flattenArray(input) {
  if (input === null || input === undefined || !(input instanceof Array)) {
    throw "Given input is not a array!";
  }

  let flatArr = [].concat(...input);

  for (const ele of flatArr) {
    if (ele instanceof Array) {
      return flattenArray(flatArr);
    }
  }
  return flatArr;
}

console.log(flattenArray(input));
