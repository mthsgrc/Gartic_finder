"use strict";


function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  // script.type = 'text/javascript';
  // script.defer = true;
  
  document.getElementsByTagName('body').item(0).appendChild(script);
  
}

include("js/words.js");
include("js/main.js");
