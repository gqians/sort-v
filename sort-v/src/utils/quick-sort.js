const quickSort = function* (array) {
  quick(array, 0, array.length - 1);
  yield array;
};
const quick = function *(array, left, right) {
  let index;
  if (array.length > 1) {
    
    index = partition(array, left, right);//返回特定值，将左边划分为小于基准点，右边大于基准点
    if (left < index - 1) {
      yield array
      yield* quick(array, left, index - 1);//递归需使用yeild*
    }
    if (index < right) {
      yield array
      yield* quick(array, index, right);
    }
  }
}
const partition = (array, left, right)=> {
  let pivot = array[Math.floor((right + left) / 2)],//寻找基准点
    i = left,
    j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      
      i++;
      j--;
    }
  }
  return i;
}
export default quick;
