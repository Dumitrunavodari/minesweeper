function rightClick (element) {
  var i = extractRow(element);
  var j = extractColumn(element);
  var src = document.getElementById(i +'_'+ j).src;
  if(src[src.length - 8] == "9") {
    src = document.getElementById(i +'_'+ j).src = "pics/-1Box.png";
  } else if (src[src.length - 9] == "-") {
    src = document.getElementById(i +'_'+ j).src = "pics/9Box.png";
  }
  return false;
}
