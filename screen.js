function onload() {
  if (screen.width < screen.height) {
    var elements = document.getElementsByName('headnav-size')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = screen.width / 100 * 13  + "px";
      elements[i].style.height = screen.width / 100 * 13  + "px";
    }
  } else {

  }
}
