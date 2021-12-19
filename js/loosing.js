function loosing() {
 document.getElementById("gameCard").remove();
 mainCard.innerHTML +='\
  <div class="position-relative m-4">\
    <img src="pics/oops.gif" style="width:50%; " />\
  </div>'
 return false;
}
