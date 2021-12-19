function oneClick (element) {
  if(document.getElementById("marks").value == 0) {
    return buildArray(element);
  }
  var i = extractRow(element);
  var j = extractColumn(element);

  if(document.getElementById(i+'param'+j).value == 0) {;
    return uncover(element);
  } else {
    return loosing();
  }
  return false;
}
