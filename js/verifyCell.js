function verifyCell(i, j) {
  var horizontalSquares = document.getElementById("horizontalSquares").value;
  var verticalSquares = document.getElementById("verticalSquares").value;
  if(i == 0 || i > verticalSquares || j == 0 || j > horizontalSquares) {
    return 0;
  }
  return document.getElementById(i+"param"+j).value;
}
