///递归函数，将数组切割到足够小
const mergesort = function* (array) {
  yield mergeSortRec(array);
}

const mergeSortRec = (array)=>{
  let length = array.length;
  if (length === 1) {
    return array;
  }
  let mid = Math.floor(length / 2),
    left = array.slice(0, mid),
    right = array.slice(mid, length);
  return merge(mergeSortRec(left), mergeSortRec(right));
 
}
const merge = (left,right) => {
  let result = [],
    il = 0,
    ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  while (il < left.length) {
    result.push(left[il++]);
  }
  while (ir < right.length) {
    result.push(right[ir++]);
  }
  return result;
}
export default mergesort;
