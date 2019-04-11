function split(wholeArr) {
    let middle = Math.floor(wholeArr.length / 2);
    let firstHalf = wholeArr.slice(0, middle);
    let secondHalf = wholeArr.slice(middle);
    return [firstHalf, secondHalf];
  }

  function merge(left, right){
      let retArr = [];
      while (left.length && right.length){
          if (left[0] < right[0]){
              retArr.push(left.shift());
          } else {
              retArr.push(right.shift());
          }
      }
    return retArr.concat(left).concat(right);
  }

function mergeSort(array){
    if (array.length === 1){
        return array;
    }
    let halfs = split(array);
    return merge(mergeSort(halfs[0]), mergeSort(halfs[1]));
}
