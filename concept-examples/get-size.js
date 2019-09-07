// get multiple values out of a function.
// functions can return more than one value using an array.

function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}

var areaOne = getSize(3, 2, 3)[0];
var areaTwo = getSize(3, 2, 3)[1];
