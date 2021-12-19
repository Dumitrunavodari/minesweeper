function extractColumn(element) {
  var x = element.indexOf("_") + 1;
  var column = "";
  while(x < element.length) {
    column += element[x];
    ++x;
  }
  return column;
}
