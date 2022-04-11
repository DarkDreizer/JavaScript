export const arrayToSet = function(array) {
  if(array.length == 0){
    return new Set();
  } else {
    let buildSet = new Set();
    array.forEach((element) => {
      buildSet.add(element);
    });
    return buildSet;
  }
}