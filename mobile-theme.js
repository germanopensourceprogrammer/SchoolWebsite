function Theme() {

	if (theme = "black") {
    var elements = document.getElementsByName('Theme_mobile-container')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "white";
      elements[i].style.height = reswidth / 100 * 13  + "px";
    }
  }
	if (theme = "light") {
    var elements = document.getElementsByName('Theme_mobile-container')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "white";
			elements[i].style.height = resheight / 100 * 13  + "px";
    }

  }
//document.getElementsByName('Theme_mobile-container').style.color = "black";
