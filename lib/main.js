root = document.documentElement;

let unsets = [];

function observe(name, callback) {
  atom.config.observe("snow-dark-syntax-fork." + name, (value) => {
    callback(value);
  });
  unsets.push(callback)
}

module.exports.activate = function(state) {
  observe("invisibleOpacity", invisibleOpacity);
  observe("cursorColor", cursorColor);
  observe("textShadow", textShadow);
  observe("hideCurrentInvisible", hideCurrentInvisible);
}

module.exports.deactivate = function() {
  unsets.forEach(callback => callback());
}

invisibleOpacity = function(opacity = null) {
  if (isFinite(opacity)) {
    root.style.setProperty("--invisibleOpacity", opacity);
  }
  else if (opacity === "Default" || opacity === null) {
    root.style.setProperty("--invisibleOpacity", "");
  }
}

cursorColor = function(color = null) {
  if (/^#?(?:[\da-fA-F]{8}|[\da-fA-F]{6}|[\da-fA-F]{3})$/.exec(color)) {
    root.style.setProperty("--cursorColor", color.startsWith("#") ? color : "#" + color);
  }
  else if (color === "Default" || color === null) {
    root.style.setProperty("--cursorColor", "");
  }
}

textShadow = function(shadow = null) {
  if (shadow === "true" || shadow === true) {
    root.classList.add("snow-dark-syntax-fork-shadow");
  }
  else if (shadow === "false" || shadow === "Default" || shadow === null || shadow === false) {
    root.classList.remove("snow-dark-syntax-fork-shadow");
  }
}

hideCurrentInvisible = function(hide = null) {
  if (hide === "true" || hide === true) {
    root.classList.add("snow-dark-syntax-fork-hide-current-invisible");
  }
  else if (hide === "false" || hide === "Default" || hide === null || hide === false) {
    root.classList.remove("snow-dark-syntax-fork-hide-current-invisible");
  }
}
