function buildArray(element) {
  var minesNumber = document.getElementById("minesNumber").value;
  var horizontalSquares = document.getElementById("horizontalSquares").value;
  var verticalSquares = document.getElementById("verticalSquares").value;
  var cellRow = extractRow(element);
  var cellColumn = extractColumn(element);
  var x = 0;
  while(x < minesNumber) {
    var i = Math.floor(Math.random() * verticalSquares) + 1;
    var j = Math.floor(Math.random() * horizontalSquares) + 1;
    if((i != cellRow || j != cellColumn) && document.getElementById(i+'param'+j).value == 0) {
      document.getElementById(i+'param'+j).value = "1";
      ++x;
    };
  }

    ++document.getElementById("marks").value;
  return uncover(element);
}
