var mfobj = {};

mfobj.settings = {
  color: "white",
  width: 16,
  height: 12
}; // color: white | black

mfobj.isMobile = function() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false; }
}

mfobj.parse  = function(text, _settings = {}) { 
  if (mfobj.isMobile() == true) {
    var settings = mfobj.settings;
    if (_settings !== {}) { 
      if (_settings.color) settings.color = _settings.color;
      if (_settings.width) settings.width = _settings.width;
      if (_settings.height) settings.color = _settings.height;
    }
    if (settings.color == "black") return text.split('￼').join(`<img src="images/obj_black.png" width="${settings.width}" height="${mfobj.settings.height}" class="mobile-obj obj-black">`);
    return text.split('￼').join(`<img src="images/obj_white.png" width="${settings.width}" height="${settings.height}" class="mobile-obj obj-white">`);
  } else {
    return text;
  }
}
