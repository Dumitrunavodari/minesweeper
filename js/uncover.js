function uncover(element) {
  var i = extractRow(element);
  var j = extractColumn(element);
  var bombs = 0;

   //the upper cell
 if (verifyCell(i - 1, j) == 1) {
   ++bombs;
 }
 //the left-up cell
if (verifyCell(i - 1, j - 1) == 1) {
  ++bombs;
}
//the left cell
if (verifyCell(i, j - 1) == 1) {
 ++bombs;
}
//the down-left cell
if (verifyCell(1 * i + 1, j - 1) == 1) {
 ++bombs;
}
//the down cell
if (verifyCell(1 * i + 1, j) == 1) {
 ++bombs;
}
//the down-rigth cell
if (verifyCell(1 * i + 1, 1 * j + 1) == 1) {
 ++bombs;
}
//the rigth cell
if (verifyCell(i, 1 * j + 1) == 1) {
 ++bombs;
}
//the rigth-up cell
if (verifyCell(i - 1, 1 * j + 1) == 1) {
 ++bombs;
}
document.getElementById(i+'_'+j).src = "pics/"+bombs+"Box.png";

++document.getElementById("uncoveredCells").value;
var minesNumber = document.getElementById("minesNumber").value;
var horizontalSquares = document.getElementById("horizontalSquares").value;
var verticalSquares = document.getElementById("verticalSquares").value;
if(document.getElementById("uncoveredCells").value == horizontalSquares * verticalSquares - minesNumber) {
  return win();
}
return false;
}
