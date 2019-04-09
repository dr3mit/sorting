
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( []);
    });

    it('handles one item', function(){
      expect( bubbleSort([9])).toEqual([9]);
    });

    it('handles many items', function(){
        expect( bubbleSort([9,5,1,6,8,4,2,0,7,3]) ).toEqual( [0,1,2,3,4,5,6,7,8,9]);
      });

   it('swaps', function () { 
       spyOn(window, 'swap').and.callThrough(); // 
       let sortedArr = bubbleSort([4,3,5]);
       expect(window.swap.calls.count()).toEqual(1);
 });

 it('compares', function () { 
    spyOn(window, 'compare').and.callThrough(); // 
    let sortedArr = bubbleSort([7, 6, 5, 4]);
    expect(window.compare.calls.count()).toEqual(9);
});
  });
