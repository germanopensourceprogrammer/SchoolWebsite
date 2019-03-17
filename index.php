<?php
$homepath = "Home.html";
$mobilehomepath = "Mobile.html";
$contentpath = "content/Content-";
$contentmark = "|||CONTENT|||";
$linkmarker = "|||LINK-MARK|||";
//---Config End---
function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
function readContent($path, $contentmark, $contentpath, $linkmarker) {
  $homefile = file($path);
  foreach ($homefile as $line) {
    if (strpos($line, $linkmarker)) {
      // code...
    }
    if (strpos($line, $contentmark)) {
      $speccontentpath = $contentpath . substr(substr($line, strrpos($line, $contentmark) + strlen($contentmark) + 1),0 , -3);
      if (file_exists($speccontentpath . ".html")) {
        echo file_get_contents($speccontentpath . ".html");
      }else {
        echo "<h1>Content not found</h1><br> Please Contact an Admin";
      }

    }else if (strpos($line, $linkmarker)) {
      if(!isset($_GET["link"])) str_replace($linkmarker, "main", $line);
      else {
        echo str_replace($linkmarker, $_GET['link'], $line);
      }
    } else {
        echo $line;
    }
  }
}

if (isMobile()) {
  readContent($mobilehomepath, $contentmark, $contentpath, $linkmarker);
}else {
  readContent($homepath, $contentmark, $contentpath, $linkmarker);
}

function websitemarklink($linkmarker) {
  $linkname = $_GET['link'];
}
 ?>
