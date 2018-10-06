/*Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {	
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth-1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});
*/
const mang = [1,2,[3,4,[5,6]]];
function splitArr(arr) {
  if (Array.isArray(arr)) {
  return arr.reduce(function(next,current){
    return next.concat(splitArr(current));
    }, []);
  } else {
    return arr;
  }
}
console.log(splitArr(mang));
