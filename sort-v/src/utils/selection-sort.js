const selection = function* (array) {
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let max = array[0];
    let index = 0;
    for (let j = 1; j <= length - 1 - i; j++) {
      if (array[j] > max) {
        max = array[j];
        index = j;
      }
    }
    [array[index], array[length - 1 - i]] = [array[length - 1 - i], array[index]];
    yield array;

  }
}
export default selection;
