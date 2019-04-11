describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    let testArr = [2,6,9,4,3,5,1];
    expect(split(testArr)).toEqual([[2,6,9],[4,3,5,1]]);
  });
});

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        let left = [1,2,3,5,8];
        let right = [2,4,6,7];
        expect(merge(left, right)).toEqual([1,2,2,3,4,5,6,7,8]);
    });
  });


  describe('MergeSort function', function(){
    it('is able to merge two array', function(){
        let arr = [1,2,3,5,8,2,4,6,7,8];
        expect(mergeSort(arr)).toEqual([1,2,2,3,4,5,6,7,8,8]);
    });
  });