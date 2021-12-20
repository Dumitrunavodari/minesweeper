function uncover(element) {
  var i = extractRow(element);
  var j = extractColumn(element);
  var bombs = 0;
  for(var x = i - 1; x <= 1 * i + 1; ++x) {
    for(var y = j - 1; y <= 1 * j + 1; ++y) {
      bombs += 1 * verifyCell(x , y);
    }
  }
document.getElementById(i +'_'+ j).src = "pics/"+ bombs +"Box.png";
++document.getElementById("uncoveredCells").value;
var minesNumber = document.getElementById("minesNumber").value;
var horizontalSquares = document.getElementById("horizontalSquares").value;
var verticalSquares = document.getElementById("verticalSquares").value;
if(document.getElementById("uncoveredCells").value == horizontalSquares * verticalSquares - minesNumber) {
  return win();
}
return false;
}
