function onload() {
  var reswidth = screen.width;
  var resheight = screen.height;
  if (reswidth < resheight) {
    var elements = document.getElementsByName('headnav-size')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = reswidth / 100 * 13  + "px";
      elements[i].style.height = reswidth / 100 * 13  + "px";
    }
  } else {
    var elements = document.getElementsByName('headnav-size')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = resheight / 100 * 13  + "px";
      elements[i].style.height = resheight / 100 * 13  + "px";
    }
  }

  if (reswidth < resheight) {
    var elements = document.getElementsByName('headnav-size-height')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.height = reswidth / 100 * 13  + "px";
    }
  } else {
    var elements = document.getElementsByName('headnav-size-height')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.height = resheight / 100 * 13  + "px";
    }
  }

  if (reswidth < resheight) {
    var elements = document.getElementsByName('headnav-size-middle')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = reswidth - (reswidth / 100 * (13 * 2))  + "px";
      elements[i].style.fontSize = (reswidth / 100 * 13) / 100 * 38  + "px";
    }
  } else {
    var elements = document.getElementsByName('headnav-size-middle')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = reswidth - (resheight / 100 * (13 * 2))  + "px";
      elements[i].style.fontSize = (resheight / 100 * 13) / 100 * 38  + "px";
    }
  }

  if (reswidth < resheight) {
    var elements = document.getElementsByName('headnav-size-button')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = (reswidth / 100 * 13) / 100 * 52.1  + "px";
      elements[i].style.height = (reswidth / 100 * 13) / 100 * 52.1  + "px";
      elements[i].style.margin = (reswidth / 100 * 13) / 100 * 24  + "px";
    }
  } else {
    var elements = document.getElementsByName('headnav-size-button')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = (resheight / 100 * 13) / 100 * 52.1  + "px";
      elements[i].style.height = (resheight / 100 * 13) / 100 * 52.1  + "px";
      elements[i].style.margin = (resheight / 100 * 13) / 100 * 24  + "px";
    }
  }

  if (reswidth < resheight) {
    var elements = document.getElementsByName('headnav-size-button-white')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.height = (reswidth / 100 * 13) / 100 * 7.06  + "px";
    }
  } else {
    var elements = document.getElementsByName('headnav-size-button-white')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.height = (resheight / 100 * 13) / 100 * 7.06  + "px";
    }
  }

  if (reswidth < resheight) {
    var elements = document.getElementsByName('headnav-size-button-black')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.height = (reswidth / 100 * 13) / 100 * 13.214  + "px";
    }
  } else {
    var elements = document.getElementsByName('headnav-size-button-black')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.height = (resheight / 100 * 13) / 100 * 13.214  + "px";
    }
  }
}
