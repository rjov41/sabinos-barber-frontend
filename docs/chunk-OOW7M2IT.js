// node_modules/@coreui/utils/dist/esm/getStyle.js
var getStyle = function(property, element) {
  if (typeof window === "undefined") {
    return;
  }
  if (typeof document === "undefined") {
    return;
  }
  var _element = element !== null && element !== void 0 ? element : document.body;
  return window.getComputedStyle(_element, null).getPropertyValue(property).replace(/^\s/, "");
};

// node_modules/@coreui/utils/dist/esm/rgbToHex.js
var rgbToHex = function(color) {
  if (typeof color === "undefined") {
    throw new TypeError("Hex color is not defined");
  }
  if (color === "transparent") {
    return "#00000000";
  }
  var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  if (!rgb) {
    throw new Error("".concat(color, " is not a valid rgb color"));
  }
  var r = "0".concat(parseInt(rgb[1], 10).toString(16));
  var g = "0".concat(parseInt(rgb[2], 10).toString(16));
  var b = "0".concat(parseInt(rgb[3], 10).toString(16));
  return "#".concat(r.slice(-2)).concat(g.slice(-2)).concat(b.slice(-2));
};

// node_modules/@coreui/utils/dist/esm/hexToRgba.js
var hexToRgba = function(color, opacity) {
  if (opacity === void 0) {
    opacity = 100;
  }
  if (typeof color === "undefined") {
    throw new TypeError("Hex color is not defined");
  }
  var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);
  if (!hex) {
    throw new Error("".concat(color, " is not a valid hex color"));
  }
  var r;
  var g;
  var b;
  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);
  } else {
    r = parseInt(color.slice(1, 2), 16);
    g = parseInt(color.slice(2, 3), 16);
    b = parseInt(color.slice(3, 5), 16);
  }
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity / 100, ")");
};

export {
  getStyle,
  hexToRgba,
  rgbToHex
};
//# sourceMappingURL=chunk-OOW7M2IT.js.map
