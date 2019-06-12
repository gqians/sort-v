const bubble = function* (array) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1-i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];//
        yield array;
      }
    }
  }
}
export default bubble;
