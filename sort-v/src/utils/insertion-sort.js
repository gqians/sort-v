const insertion = function* (array) {
  let length = array.length,
      j, temp;
  for (let i = 1; i < length; i++) {
    j = i;
    temp = array[i];
    while (j > 0 && temp < array[j - 1]) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
    yield array;
  }
}
export default insertion;
