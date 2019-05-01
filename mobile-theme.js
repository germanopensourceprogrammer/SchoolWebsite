function Theme() {
    setTheme(getCookie("theme"));
}

function setTheme(path) {
    console.log(document.cookie);
    document.cookie = "theme=" + path + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    console.log(document.cookie);
    var linkelement = document.getElementsByName("theme-stylesheet")[0];
    linkelement.href = "mobile" + path + "theme.css";
}

function onThemeSlider() {
    var slider = document.getElementsByName("ThemeSlider")[0];
    if (slider.checked) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
