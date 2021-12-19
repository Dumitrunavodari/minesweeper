function extractRow(element) {
  var x = 0;
  var row = "";
  while(element.charCodeAt(x) != 95) {
    row += element[x];
    ++x;
  }
  return row;
}
