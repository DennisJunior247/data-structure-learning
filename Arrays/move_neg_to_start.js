function NegToStart(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      let temp;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }

  return arr;
}

console.log(NegToStart([-12, 11, -13, 5]));
