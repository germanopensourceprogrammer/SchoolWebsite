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
      elements[i].style.height = reswidth / 100 * 11.2  + "px";
      elements[i].style.paddingTop = reswidth / 100 * 1.8  + "px";
      elements[i].style.fontSize = (reswidth / 100 * 13) / 100 * 34  + "px";
    }
  } else {
    var elements = document.getElementsByName('headnav-size-middle')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = reswidth - (resheight / 100 * (13 * 2))  + "px";
      elements[i].style.height = resheight / 100 * 11.2  + "px";
      elements[i].style.paddingTop = resheight / 100 * 1.8  + "px";
      elements[i].style.fontSize = (resheight / 100 * 13) / 100 * 34  + "px";
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

  if (reswidth < resheight) {
    var elements = document.getElementsByName('menu-button-js')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.height = reswidth / 100 * 8.273  + "px";
      elements[i].style.paddingTop = reswidth / 100 * 2.19  + "px";
      elements[i].style.paddingBottom = reswidth / 100 * 2.19  + "px";
      elements[i].style.paddingLeft = reswidth / 100 * 3.89  + "px";
      elements[i].style.paddingRight = reswidth / 100 * 3.89  + "px";
      elements[i].style.fontSize = reswidth / 100 * 3.89  + "px";
    }
  } else {
    var elements = document.getElementsByName('menu-button-js')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.height = resheight / 100 * 8.273  + "px";
      elements[i].style.paddingTop = resheight / 100 * 2.19  + "px";
      elements[i].style.paddingBottom = resheight / 100 * 2.19  + "px";
      elements[i].style.paddingLeft = resheight / 100 * 3.89  + "px";
      elements[i].style.paddingRight = resheight / 100 * 3.89  + "px";
      elements[i].style.fontSize = resheight / 100 * 3.89  + "px";
    }
  }

  if (reswidth < resheight) {
    var elements = document.getElementsByName('content-headline-js')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.height = reswidth / 100 * 4  + "px";
      elements[i].style.padding = reswidth / 100 * 1.217  + "px";
      elements[i].style.fontSize = reswidth / 100 * 4.38  + "px";
    }
  } else {
    var elements = document.getElementsByName('content-headline-js')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.height = resheight / 100 * 4  + "px";
      elements[i].style.padding = resheight / 100 * 1.217  + "px";
      elements[i].style.fontSize = resheight / 100 * 4.38  + "px";
    }
  }

  if (reswidth < resheight) {
    var elements = document.getElementsByName('normal-text')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = reswidth / 100 * 3.65  + "px";
    }
  } else {
    var elements = document.getElementsByName('normal-text')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = resheight / 100 * 3.65  + "px";
    }
  }

  if (reswidth < resheight) {
    var elements = document.getElementsByName('big-text')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = reswidth / 100 * 4.8662  + "px";
    }
  } else {
    var elements = document.getElementsByName('big-text')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = resheight / 100 * 4.8662  + "px";
    }
  }


  if (reswidth < resheight) {
    var elements = document.getElementsByName('table-vp')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = reswidth / 100 * 3.163  + "px";
    }
  } else {
    var elements = document.getElementsByName('table-vp')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = resheight / 100 * 3.163  + "px";
    }
  }

  if (reswidth < resheight) {
    var elements = document.getElementsByName('table-vp-th')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = reswidth / 100 * 3.65  + "px";
    }
  } else {
    var elements = document.getElementsByName('table-vp-th')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = resheight / 100 * 3.65  + "px";
    }
  }

  if (reswidth < resheight) {
    var elements = document.getElementsByClassName('table-list')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = reswidth / 100 * 3.65  + "px";
    }
  } else {
    var elements = document.getElementsByClassName('table-list')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = resheight / 100 * 3.65  + "px";
    }
  }

}
