// Tabline with Buttons
function openTabcontent(tagName,elmnt,color,sidenav) {
  var i, tabcontent, tablinks;
  var sidenavs = document.getElementsByClassName("sidenav");
  for (i = 0; i < sidenavs.length; i++) {
    if (sidenav) {
      sidenavs[i].style.display = "block";
    }else {
      sidenavs[i].style.display = "none";
    }
  }
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(tagName).style.display = "block";
  elmnt.style.backgroundColor = color;
  openContent("main-"+tagName);
}

function afterpageload(idk) {
  document.getElementById("defaultOpen").click();
  closeSubsidelinks(1);
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  openContent(idk);
}
// end of Tabline

// content load
function loadContent(tagName) {
  var i, content;
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  document.getElementById(tagName).style.display = "block";
}
// end of content load

// mobile dropdown menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function onMobileload(idk){
  onload();
  window.onresize = function (event) {
    onload();
  }
  closeSubmenus(1);
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  openContent(idk);
}
function openMobileContent(tagName, hasSubmenu, submenulevel){
  //console.log(1);
  //console.log(tagName);
  if (hasSubmenu) {
    if (submenulevel == null) {
      closeSubmenus(1);
      return;
    }
    for (var i = 0; i < 5; i++) {
      closeSubmenus(submenulevel + i)
    }
    var submenu = document.getElementById(tagName + "-submenu");
    submenu.style.display = "block";
  }else {
    var x = document.getElementById("myLinks");
    x.style.display = "none";
  }
  openContent(tagName);
}
function closeSubmenus(submenulevel){
  var submenus = document.getElementsByClassName("submenu-" + submenulevel);
  for (var i = 0; i < submenus.length; i++) {
    submenus[i].style.display = "none";
  }
}
// end of mobile dropdown menu

// desktop subsidemenu
function openContent(tagName, hasSubmenu, submenulevel){
  //console.log(tagName);
  history.pushState(null, null, "?link="+tagName);
  if (hasSubmenu) {
    for (var i = 0; i < 5; i++) {
      closeSubsidelinks(submenulevel + i)
    }
    var submenu = document.getElementById(tagName + "-subsidelink");
    submenu.style.display = "block";
  }else {
    closeSubsidelinks(submenulevel);
  }
  loadContent(tagName);
}
function closeSubsidelinks(submenulevel){
  var submenus = document.getElementsByClassName("subsidelink-" + submenulevel);
  for (var i = 0; i < submenus.length; i++) {
    submenus[i].style.display = "none";
  }
}
