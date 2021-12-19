function createGame () {
  var minesNumber = document.getElementById("minesNumber").value;
  var horizontalSquares = document.getElementById("horizontalSquares").value;
  var verticalSquares = document.getElementById("verticalSquares").value;
  if(minesNumber > horizontalSquares * verticalSquares) {
    alert("Mines number is bigger than cells number.");
    return location.reload();
  }
  document.getElementById("minesInputsCard").remove();
  document.getElementById("inputsCard").remove();
  document.getElementById("startButtonCard").remove();

  mainCard.innerHTML += '\
      <div class="card-header" id="replayButtonCard">\
        <a href="#" class="btn btn-outline-dark" onclick="return location.reload()">Replay</a>\
        <param name="marks" id="marks" value=0>\
        <param name="uncoveredCells" id="uncoveredCells" value='+0+'>\
        <param name="minesNumber" id="minesNumber" value='+minesNumber+'>\
        <param name="horizontalSquares" id="horizontalSquares" value='+horizontalSquares+'>\
        <param name="verticalSquares" id="verticalSquares" value='+verticalSquares+'>\
      </div>';

  for(var i = 1; i <= verticalSquares; ++i) {
    gameCard.innerHTML += '\
      <div class="row" id="Row">\
        <div class="column" id="'+i+'Row" >\
        </div>\
      </div>';
  }
  for(var i = 1; i <= verticalSquares; ++i) {
    var name = i+"Row";
    var iRow = document.getElementById(name);
    for(var j = 1; j <= horizontalSquares; ++j) {
      iRow.innerHTML +='\
        <img src="pics/9Box.png" id="'+i+'_'+j+'" onclick="return oneClick(id);" oncontextmenu="return rightClick(id);" >\
        <param id="'+i+'param'+j+'" value="0">';
    }

  }
  return false;
}
