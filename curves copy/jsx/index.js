(function (thisObj) {// ----- EXTENDSCRIPT INCLUDES ------ //"object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();// ---------------------------------- //// ----- EXTENDSCRIPT PONYFILLS -----function __objectFreeze(obj) { return obj; }function __isArray(arr) { try { return arr instanceof Array; } catch (e) { return false; } };// ---------------------------------- //var version = "1.0.1";

var config = {
  version: version,
  id: "com.curves.cep",
  displayName: "Curves",
  symlink: "local",
  port: 3000,
  servePort: 5000,
  startingDebugPort: 8860,
  extensionManifestVersion: 6.0,
  requiredRuntimeVersion: 9.0,
  hosts: [{
    name: "AEFT",
    version: "[0.0,99.9]"
  }],
  type: "Panel",
  iconDarkNormal: "./src/assets/light-icon.png",
  iconNormal: "./src/assets/dark-icon.png",
  iconDarkNormalRollOver: "./src/assets/light-icon.png",
  iconNormalRollOver: "./src/assets/dark-icon.png",
  
  parameters: ["--v=0", "--enable-nodejs", "--mixed-context", "--windowless-frame-rate=60", "--disable-frame-rate-limit", "--disable-gpu-vsync", "--disable-gpu", "--disable-gpu-compositing", "--hardware-acceleration=false", "--hardware-video-decode-framerate=0", "--enable-begin-frame-scheduling"],
  width: 500,
  height: 550,
  panels: [{
    mainPath: "./main/index.html",
    name: "main",
    panelDisplayName: "Curves",
    autoVisible: true,
    width: 600,
    height: 650
  }, {
    mainPath: "./licensing/index.html",
    name: "licensing",
    type: "Modeless",
    // panelDisplayName: 'PP CEP Boilerplate | settings',
    autoVisible: true,
    width: 400,
    height: 300
  }],
  build: {
    jsxBin: "copy",
    sourceMap: true
  },
  zxp: {
    country: "US",
    province: "CA",
    org: "MyCompany",
    password: "mypassword",
    tsa: "http://timestamp.digicert.com/",
    sourceMap: false,
    jsxBin: "replace"
  },
  installModules: [],
  copyAssets: [],
  copyZipAssets: []
};

var ns = config.id;

var getDistanceBetweenPoints2D = function getDistanceBetweenPoints2D(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
var mapToValues = function mapToValues(val, multiplier) {
  if (val instanceof Array) {
    var res = [];
    for (var i = 0; i < val.length; i++) {
      res.push(val[i] * multiplier);
    }
    return res;
  } else {
    return val * multiplier;
  }
};
var addArrayValues = function addArrayValues(val1, val2) {
  if (val1 instanceof Array) {
    var res = [];
    for (var i = 0; i < val1.length; i++) {
      res.push(val1[i] - val2[i]);
    }
    return res;
  } else {
    return val1 - val2;
  }
};

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }
function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit$1(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles$1(arr) { if (__isArray(arr)) return arr; }
/**
 * Calculates and creates a AE keyframe ease object.
 *
 * @param prop - property in layer
 * @param keyframeIndex - index of keyframe
 * @param userVars - easing in cubic-bezier notation
 * @returns an array of KeyframeEase objects
 *
 */
var getBezierInEase = function getBezierInEase(prop, keyframeIndex, userVars) {
  var _userVars = _slicedToArray$1(userVars, 4),
    x1 = _userVars[0],
    y1 = _userVars[1],
    x2 = _userVars[2],
    y2 = _userVars[3];
  var priorVal = prop.keyValue(keyframeIndex - 1);
  var priorTime = prop.keyTime(keyframeIndex - 1);
  var selectedTime = prop.keyTime(keyframeIndex);
  var selectedVal = prop.keyValue(keyframeIndex);
  if (selectedVal instanceof Array == false && priorVal instanceof Array == false) {
    var distanceBetweenPoints = Math.abs(priorVal - selectedVal);
    var avSpeed = Math.abs(distanceBetweenPoints) / (priorTime - selectedTime);
    var xEaseIn = 100 - x2 * 100;
    var yEaseIn = .1 + (1 - y2) / (1 - x2) * avSpeed;
    var easeIn = getKeyframeEaseObject(yEaseIn, xEaseIn);
    //if the distance between the points is negative, we need to reverse the ease in and ease out
    if (selectedVal > priorVal) {
      yEaseIn *= -1;
      easeIn = getKeyframeEaseObject(yEaseIn, xEaseIn);
    }
    return [easeIn];
  } else if (prop.matchName.includes("Position") || prop.matchName.includes("Color") || prop.matchName.includes("Anchor")) {
    var _distanceBetweenPoints = getDistanceBetweenPoints2D(priorVal[0], priorVal[1], selectedVal[0], selectedVal[1]);
    var _avSpeed = Math.abs(_distanceBetweenPoints) / (selectedTime - priorTime);
    var inInf = 100 - x2 * 100;
    var inSpd = (1 - y2) / (1 - x2) * _avSpeed;
    var _easeIn = getKeyframeEaseObject(inSpd, inInf);
    return [_easeIn];
  } else if (selectedVal instanceof Array && priorVal instanceof Array) {
    var easings = [];
    var _easeIn2;
    var easeOut;
    for (var i = 0; i < selectedVal.length; i++) {
      var _distanceBetweenPoints2 = Math.abs(priorVal[i] - selectedVal[i]);
      var _avSpeed2 = Math.abs(_distanceBetweenPoints2) / (priorTime - selectedTime);
      var xEaseOut = x1 * 100;
      var yEaseOut = y1 / x1 * _avSpeed2;
      var _xEaseIn = 100 - x2 * 100;
      var _yEaseIn = .1 + (1 - y2) / (1 - x2) * _avSpeed2;
      if (selectedVal[i] > priorVal[i]) {
        yEaseOut *= -1;
        _yEaseIn *= -1;
        easeOut = getKeyframeEaseObject(yEaseOut, xEaseOut);
        _easeIn2 = getKeyframeEaseObject(_yEaseIn, _xEaseIn);
      } else {
        _easeIn2 = getKeyframeEaseObject(_yEaseIn, _xEaseIn);
        easeOut = getKeyframeEaseObject(yEaseOut, xEaseOut);
      }
      easings.push([_easeIn2, easeOut]);
    }
    if (prop.value.length == 1) {
      
      return [_easeIn2];
    } else if (prop.value.length == 2) {
      return [easings[0][1], easings[0][1]];
    } else {
      return [easings[0][0], easings[1][0], easings[2][0]];
    }
  }
};
function getKeyframeEaseObject(speed, influence) {
  if (influence < 0.1) influence = 0.1;
  if (influence > 100) influence = 100;
  return new KeyframeEase(speed, influence);
}
var getBezierOutEase = function getBezierOutEase(prop, keyframeIndex, userVars) {
  var _userVars2 = _slicedToArray$1(userVars, 4),
    x1 = _userVars2[0],
    y1 = _userVars2[1],
    x2 = _userVars2[2],
    y2 = _userVars2[3];
  var postTime = prop.keyTime(keyframeIndex + 1);
  var postVal = prop.keyValue(keyframeIndex + 1);
  var selectedTime = prop.keyTime(keyframeIndex);
  var selectedVal = prop.keyValue(keyframeIndex);
  if (selectedVal instanceof Array == false && postVal instanceof Array == false) {
    var distanceBetweenPoints = Math.abs(postVal - selectedVal);
    var avSpeed = Math.abs(distanceBetweenPoints) / (postTime - selectedTime);
    var xEaseOut = x1 * 100;
    var yEaseOut = y1 / x1 * avSpeed;
    var easeOut = getKeyframeEaseObject(yEaseOut, xEaseOut);
    if (selectedVal > postVal) {
      yEaseOut *= -1;
      easeOut = getKeyframeEaseObject(yEaseOut, xEaseOut);
    }
    return [easeOut];
  } else if (prop.matchName.includes("Position") || prop.matchName.includes("Color") || prop.matchName.includes("Anchor")) {
    var _distanceBetweenPoints3 = getDistanceBetweenPoints2D(postVal[0], postVal[1], selectedVal[0], selectedVal[1]);
    var _avSpeed3 = Math.abs(_distanceBetweenPoints3) / (postTime - selectedTime);
    var _xEaseOut = x1 * 100;
    var _yEaseOut = y1 / x1 * _avSpeed3;
    var _easeOut = getKeyframeEaseObject(_yEaseOut, _xEaseOut);
    return [_easeOut];
  } else if (selectedVal instanceof Array && postVal instanceof Array) {
    var easings = [];
    var easeIn;
    var _easeOut2;
    for (var i = 0; i < selectedVal.length; i++) {
      var _distanceBetweenPoints4 = Math.abs(postVal[i] - selectedVal[i]);
      var _avSpeed4 = Math.abs(_distanceBetweenPoints4) / (postTime - selectedTime);
      var _xEaseOut2 = x1 * 100;
      var _yEaseOut2 = y1 / x1 * _avSpeed4;
      var xEaseIn = 100 - x2 * 100;
      var yEaseIn = .1 + (1 - y2) / (1 - x2) * _avSpeed4;
      if (selectedVal[i] > postVal[i]) {
        _yEaseOut2 *= -1;
        yEaseIn *= -1;
        _easeOut2 = getKeyframeEaseObject(_yEaseOut2, _xEaseOut2);
        easeIn = getKeyframeEaseObject(yEaseIn, xEaseIn);
      } else {
        easeIn = getKeyframeEaseObject(yEaseIn, xEaseIn);
        _easeOut2 = getKeyframeEaseObject(_yEaseOut2, _xEaseOut2);
      }
      easings.push([easeIn, _easeOut2]);
    }
    if (prop.value.length == 1) {
      
      return [easeIn];
    } else if (prop.value.length == 2) {
      return [easings[0][1], easings[0][1]];
    } else {
      return [easings[0][0], easings[1][0], easings[2][0]];
    }
  }
};
var applyBezierToPeak = function applyBezierToPeak(prop, peakIdx, dstIdx, cubicBez) {
  var inEase = getBezierInEase(prop, peakIdx + 1, [cubicBez[0], cubicBez[1], 1 - cubicBez[0], 1 - cubicBez[1]]);
  var outEase = getBezierOutEase(prop, peakIdx - 1, [cubicBez[0], cubicBez[1], 1 - cubicBez[0], 1 - cubicBez[1]]);
  var mirroredPeakEase = getBezierInEase(prop, peakIdx, cubicBez);
  
  prop.setTemporalEaseAtKey(peakIdx, mirroredPeakEase, mirroredPeakEase);
  var existingEase = prop.keyInTemporalEase(peakIdx - 1);
  if (peakIdx - 1 !== dstIdx) prop.setTemporalContinuousAtKey(peakIdx - 1, false);
  
  prop.setTemporalEaseAtKey(peakIdx - 1, existingEase, outEase);
  
  prop.setTemporalEaseAtKey(peakIdx + 1, inEase);
};
var applyBezierToSingleSelection = function applyBezierToSingleSelection(prop, keyframeIndex, userVars) {
  if (keyframeIndex === 1) {
    var left = prop.selectedKeys[0];
    var firstSelectedEaseInType = prop.keyInInterpolationType(left);
    var outEase = getBezierOutEase(prop, left, userVars);
    var originalEaseIn = prop.keyInTemporalEase(left);
    
    prop.setTemporalEaseAtKey(left, originalEaseIn, outEase);
    if (firstSelectedEaseInType === KeyframeInterpolationType.LINEAR) {
      prop.setInterpolationTypeAtKey(left, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.BEZIER);
    } else if (firstSelectedEaseInType === KeyframeInterpolationType.HOLD) {
      prop.setInterpolationTypeAtKey(left, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.BEZIER);
    }
  } else if (keyframeIndex === prop.numKeys) {
    var right = prop.selectedKeys[0];
    var lastSelectedEaseOutType = prop.keyOutInterpolationType(right);
    var inEase = getBezierInEase(prop, right, userVars);
    var originalEaseOut = prop.keyOutTemporalEase(right);
    
    prop.setTemporalEaseAtKey(right, inEase, originalEaseOut);
    if (lastSelectedEaseOutType === KeyframeInterpolationType.LINEAR) {
      prop.setInterpolationTypeAtKey(right, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.LINEAR);
    } else if (lastSelectedEaseOutType === KeyframeInterpolationType.HOLD) {
      prop.setInterpolationTypeAtKey(right, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.HOLD);
    }
  } else {
    var _outEase = getBezierOutEase(prop, keyframeIndex, [userVars[0], userVars[1], 1 - userVars[0], 1 - userVars[1]]);
    var _inEase = getBezierInEase(prop, keyframeIndex, userVars);
    
    prop.setTemporalEaseAtKey(keyframeIndex, _inEase, _outEase);
  }
};
var applyBezierToMultipleSelections = function applyBezierToMultipleSelections(prop, selectedIndices, userVars) {
  applyBezierBookends(prop, selectedIndices[0], selectedIndices[selectedIndices.length - 1], userVars);
  for (var i = 1; i < selectedIndices.length - 1; i++) {
    applyBezierToSingleSelection(prop, selectedIndices[i], userVars);
  }
};

//for multiple selections far left and far right keyframe are only out and only in respectively
var applyBezierBookends = function applyBezierBookends(prop, left, right, userVars) {
  var firstSelectedEaseInType = prop.keyInInterpolationType(left);
  var outEase = getBezierOutEase(prop, left, [userVars[0], userVars[1], 1 - userVars[0], 1 - userVars[1]]);
  var originalEaseIn = prop.keyInTemporalEase(left);
  
  prop.setTemporalEaseAtKey(left, originalEaseIn, outEase);
  var lastSelectedEaseOutType = prop.keyOutInterpolationType(right);
  var inEase = getBezierInEase(prop, right, userVars);
  var originalEaseOut = prop.keyOutTemporalEase(right);
  
  prop.setTemporalEaseAtKey(right, inEase, originalEaseOut);
  if (lastSelectedEaseOutType === KeyframeInterpolationType.LINEAR) {
    prop.setInterpolationTypeAtKey(right, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.LINEAR);
  } else if (lastSelectedEaseOutType === KeyframeInterpolationType.HOLD) {
    prop.setInterpolationTypeAtKey(right, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.HOLD);
  }
  if (firstSelectedEaseInType === KeyframeInterpolationType.LINEAR) {
    prop.setInterpolationTypeAtKey(left, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.BEZIER);
  } else if (firstSelectedEaseInType === KeyframeInterpolationType.HOLD) {
    prop.setInterpolationTypeAtKey(left, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.BEZIER);
  }
};

var getActiveComposition = function getActiveComposition() {
  var comp = app.project && app.project.activeItem && app.project.activeItem instanceof CompItem ? app.project.activeItem : null;
  if (!comp) {
    throw new Error('Please select a composition.');
  }
  return comp;
};

var getLatestSelectedKeyframeIndices = function getLatestSelectedKeyframeIndices(prop) {
  var selectedIndices = prop.selectedKeys;
  selectedIndices = selectedIndices.sort(function (a, b) {
    return a - b;
  });
  return selectedIndices.slice(selectedIndices.length - 2, selectedIndices.length);
};
var clearAllSpatialEaseOnKeyframe = function clearAllSpatialEaseOnKeyframe(prop, keyIndex) {
  if (prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL) {
    prop.setSpatialTangentsAtKey(keyIndex, [0, 0, 0], [0, 0, 0]);
  } else if (prop.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
    prop.setSpatialTangentsAtKey(keyIndex, [0, 0], [0, 0]);
  }
};
var getNearestFrameTime = function getNearestFrameTime(comp, newKeyframeTime) {
  var compStartTime = comp.displayStartTime;
  var frameDuration = comp.frameDuration;
  var elapsedTime = newKeyframeTime - compStartTime;
  var nearestFrameIndex = Math.round(elapsedTime / frameDuration);
  var nearestFrameTime = nearestFrameIndex * frameDuration + compStartTime;
  return nearestFrameTime;
};
var getKeyValues = function getKeyValues(prop, keyToCopy) {
  var keyInInterpolationType = prop.keyInInterpolationType(keyToCopy);
  var keyOutInterpolationType = prop.keyOutInterpolationType(keyToCopy);
  var curKeyValue = prop.keyValue(keyToCopy);
  var keyTemporalAutoBezier, keyTemporalContinuous;
  if (keyInInterpolationType === KeyframeInterpolationType.BEZIER && keyOutInterpolationType === KeyframeInterpolationType.BEZIER) {
    keyTemporalAutoBezier = prop.keyTemporalAutoBezier(keyToCopy);
    keyTemporalContinuous = prop.keyTemporalContinuous(keyToCopy);
  }
  var keyInTemporalEase, keyOutTemporalEase;
  if (keyOutInterpolationType !== KeyframeInterpolationType.HOLD) {
    keyInTemporalEase = prop.keyInTemporalEase(keyToCopy);
    keyOutTemporalEase = prop.keyOutTemporalEase(keyToCopy);
  }
  var keySpatialAutoBezier, keySpatialContinuous, keyInSpatialTangent, keyOutSpatialTangent, keyRoving;
  if (prop.propertyValueType === PropertyValueType.TwoD_SPATIAL || prop.propertyValueType === PropertyValueType.ThreeD_SPATIAL) {
    keySpatialAutoBezier = prop.keySpatialAutoBezier(keyToCopy);
    keySpatialContinuous = prop.keySpatialContinuous(keyToCopy);
    keyInSpatialTangent = prop.keyInSpatialTangent(keyToCopy);
    keyOutSpatialTangent = prop.keyOutSpatialTangent(keyToCopy);
    keyRoving = prop.keyRoving(keyToCopy);
  }
  return {
    keyInInterpolationType: keyInInterpolationType,
    keyOutInterpolationType: keyOutInterpolationType,
    curKeyValue: curKeyValue,
    keyTemporalAutoBezier: keyTemporalAutoBezier,
    keyTemporalContinuous: keyTemporalContinuous,
    keyInTemporalEase: keyInTemporalEase,
    keyOutTemporalEase: keyOutTemporalEase,
    keySpatialAutoBezier: keySpatialAutoBezier,
    keySpatialContinuous: keySpatialContinuous,
    keyInSpatialTangent: keyInSpatialTangent,
    keyOutSpatialTangent: keyOutSpatialTangent,
    keyRoving: keyRoving
  };
};
var setKeyValues = function setKeyValues(prop, newKeyIndex, keyframe) {
  prop.setValueAtKey(newKeyIndex, keyframe.curKeyValue);
  if (keyframe.keyOutInterpolationType !== KeyframeInterpolationType.HOLD) prop.setTemporalEaseAtKey(newKeyIndex, keyframe.keyInTemporalEase, keyframe.keyOutTemporalEase);
  prop.setInterpolationTypeAtKey(newKeyIndex, keyframe.keyInInterpolationType, keyframe.keyOutInterpolationType);
  if (keyframe.keyInInterpolationType === KeyframeInterpolationType.BEZIER && keyframe.keyOutInterpolationType === KeyframeInterpolationType.BEZIER && keyframe.keyTemporalContinuous) {
    prop.setTemporalContinuousAtKey(newKeyIndex, keyframe.keyTemporalContinuous);
    prop.setTemporalAutoBezierAtKey(newKeyIndex, keyframe.keyTemporalAutoBezier);
  }
  if (prop.propertyValueType === PropertyValueType.TwoD_SPATIAL || prop.propertyValueType === PropertyValueType.ThreeD_SPATIAL) {
    prop.setSpatialContinuousAtKey(newKeyIndex, keyframe.keySpatialContinuous);
    prop.setSpatialAutoBezierAtKey(newKeyIndex, keyframe.keySpatialAutoBezier);
    prop.setSpatialTangentsAtKey(newKeyIndex, keyframe.keyInSpatialTangent, keyframe.keyOutSpatialTangent);
    if (keyframe.keyRoving) prop.setRovingAtKey(newKeyIndex, keyframe.keyRoving);
  }
};
var shiftKeyToNewOffset = function shiftKeyToNewOffset(prop, keyToCopy, offset, keyToRemove) {
  if (offset === 0) return;
  var value = getKeyValues(prop, keyToCopy);
  var newTime = prop.keyTime(keyToCopy) + offset;
  var newKeyIndex = prop.addKey(newTime);
  setKeyValues(prop, newKeyIndex, value);
  prop.removeKey(keyToRemove);
};

var notify = {
  noComp: "General Input Validation: Please select a composition.",
  noLayer: "General Input Validation: Please select a layer.",
  noKeyframes: "Property with 0 selected keyframes found.",
  insufficientLayers: "Please select 2 or more layers.",
  pleaseAddOneOrMoreKeyframes: "Please add one or more keyframes to the selected property.",
  pleaseSelectOneOrMoreKeyframes: "Please select one or more keyframes across two or more layers or properties.",
  elasticNoDelta: "Penultimate and final keyframe share static values.",
  maskPath: "Mask paths are not yet supported."
};

var generalInputValidation = function generalInputValidation(comp, selectedLayers) {
  if (!comp) {
    alert(notify.noComp);
    return;
  }
  if (selectedLayers.length === 0) {
    alert(notify.noLayer);
    return;
  }
};

/**
 * Takes a keyframeable property in Adobe After Effects and returns an array of indices for the selected keyframes.
 *
 * @param prop - The keyframeable property to validate.
 * @returns An array of indices for the selected keyframes, or an empty array if the selected keyframes are invalid.
 */
var validateSelectedKeyframes = function validateSelectedKeyframes(prop) {
  var selectedKeys = prop.selectedKeys;
  if (!selectedKeys || selectedKeys.length < 1 || prop.numKeys < 1) {
    //alert(notify.noKeyframes)
    return [];
  }
  var originIndex = selectedKeys[selectedKeys.length - 2];
  var destinationIndex = selectedKeys[selectedKeys.length - 1];
  if (prop.matchName.includes("Mask Path")) {
    //alert(notify.maskPath)
    return [];
  } else if (selectedKeys.length === 1) {
    // alert(notify.elasticNoDelta);
    return selectedKeys;
  } else {
    if (prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL || prop.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
      clearAllSpatialEaseOnKeyframe(prop, originIndex);
      clearAllSpatialEaseOnKeyframe(prop, destinationIndex);
    }
    return selectedKeys;
  }
};
var validateSelectedKeyframesDistribute = function validateSelectedKeyframesDistribute(prop) {
  var selectedKeys = prop.selectedKeys;
  if (!selectedKeys || selectedKeys.length <= 1 || prop.numKeys < 2) {
    //alert(notify.noKeyframes)
    return [];
  }
  var originIndex = selectedKeys[selectedKeys.length - 2];
  var destinationIndex = selectedKeys[selectedKeys.length - 1];
  if (prop.matchName.includes("Mask Path")) {
    //alert(notify.maskPath)
    return [];
  } else if (prop.keyValue(destinationIndex) === prop.keyValue(originIndex)) {
    //alert(notify.elasticNoDelta)
    return [];
  } else {
    return selectedKeys;
  }
};

//TODO: 0 breaks AE, check for more details and fix below.
var validateCubicBezierX = function validateCubicBezierX(vals) {
  if (vals[0] >= 1) vals[0] = 0.999;
  if (vals[2] >= 1) vals[2] = 0.999;
  if (vals[0] < 0.001) vals[0] = 0.001;
  if (vals[2] < 0.001) vals[2] = 0.001;
  return vals;
};

var elasticEaseLayer = function elasticEaseLayer(prop, req, selectedIndices) {
  var values = req.values;
  var ognIdx = selectedIndices[selectedIndices.length - 2];
  var dstIdx = selectedIndices[selectedIndices.length - 1];
  var timeDelta = prop.keyTime(dstIdx) - prop.keyTime(ognIdx);
  var timeLerpMax = timeDelta * 5; //TODO: magic number here corresponds to UI visualization as initial bounce occurs at 1/5 of total time
  var valueLerpMax = prop.keyValue(dstIdx) - prop.keyValue(ognIdx);
  var keysframesToWrite = [];
  for (var i = 0; i < values.length - 1; i += 2) {
    //get time offset of peak keyframe
    var peakKfTimeOffset = values[i].dstLerpX * timeLerpMax;
    //get time offset of destination keyframe
    var dstKfTimeOffset = values[i + 1].dstLerpX * timeLerpMax;
    //get value offset of peak keyframe
    var peakKfValueOffset = mapToValues(valueLerpMax, values[i].dstLerpY);
    //get value offset of destination keyframe
    var dstKfValueOffset = mapToValues(valueLerpMax, values[i + 1].dstLerpY);
    //get peak keyframe total value
    var peakKfValue = addArrayValues(prop.keyValue(dstIdx), peakKfValueOffset) + valueLerpMax / 2;
    //get destination keyframe total value
    var dstKfValue = addArrayValues(prop.keyValue(dstIdx), dstKfValueOffset) + valueLerpMax / 2;

    //TODO: validation functions for values
    if (prop.matchName.includes("Opacity")) {
      if (peakKfValue > 100) {
        peakKfValue = 100;
      } else if (dstKfValue < 0) {
        dstKfValue = 0;
      }
    }

    //validate easing
    var cubicBez = validateCubicBezierX([1 - values[i].ognXCubic, 1 - values[i].ognYCubic, values[i].dstXCubic, values[i].dstYCubic]);
    var kf = {
      peakKfTimeOffset: peakKfTimeOffset,
      dstKfTimeOffset: dstKfTimeOffset,
      peakKfValue: peakKfValue,
      dstKfValue: dstKfValue,
      cubicBez: cubicBez
    };
    keysframesToWrite.push(kf);
  }
  return keysframesToWrite;
};

//req object is being passed existing keyframes
var createElasticKeyframesStop = function createElasticKeyframesStop(req, comp, prop, selectedIndices, newKeyframes) {
  //find first existing keyframe after startTime
  var firstExistingKeyframeTime = Infinity;
  var finalSelectedKeyframeTime = prop.keyTime(selectedIndices[selectedIndices.length - 1]);
  var ognSelectedKeyframeTime = prop.keyTime(selectedIndices[selectedIndices.length - 2]);
  //get first existing keyframe AFTER last selected index
  for (var i = 1; i <= prop.numKeys; i++) {
    var curKeyTime = prop.keyTime(i);
    if (curKeyTime > finalSelectedKeyframeTime) {
      firstExistingKeyframeTime = curKeyTime;
      //TODO: look into potential issues with removing continuous easing on existing keyframes
      if (prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL || prop.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
        clearAllSpatialEaseOnKeyframe(prop, i);
        if (i + 1 <= prop.numKeys) clearAllSpatialEaseOnKeyframe(prop, i + 1);
        break;
      }
    }
  }
  for (var _i = 0; _i < newKeyframes.length; _i++) {
    var _newKeyframes$_i = newKeyframes[_i],
      peakKfTimeOffset = _newKeyframes$_i.peakKfTimeOffset,
      dstKfTimeOffset = _newKeyframes$_i.dstKfTimeOffset,
      peakKfValue = _newKeyframes$_i.peakKfValue,
      dstKfValue = _newKeyframes$_i.dstKfValue,
      cubicBez = _newKeyframes$_i.cubicBez;
    var peakKeyframeWriteTime = ognSelectedKeyframeTime + peakKfTimeOffset;
    var dstKeyframeWriteTime = ognSelectedKeyframeTime + dstKfTimeOffset;
    if (req.config.keyframeWriteAtTimeBehavior === "nearest_frame") {
      peakKeyframeWriteTime = getNearestFrameTime(comp, peakKeyframeWriteTime);
      dstKeyframeWriteTime = getNearestFrameTime(comp, dstKeyframeWriteTime);
      if (peakKeyframeWriteTime === dstKeyframeWriteTime) return;
    }
    if (dstKeyframeWriteTime < firstExistingKeyframeTime) {
      //create peak keyframe
      var newPeakKf = prop.addKey(peakKeyframeWriteTime);
      //set peak keyframe value
      prop.setValueAtKey(newPeakKf, peakKfValue);
      //create destination keyframe
      var newDestKf = prop.addKey(dstKeyframeWriteTime);
      //set destination keyframe value
      prop.setValueAtKey(newDestKf, dstKfValue);
      //handle preexisting incoming ease on final selected keyframe
      if (_i === 0) {
        var mirroredPeakEase = getBezierInEase(prop, newPeakKf, cubicBez);
        prop.setTemporalEaseAtKey(newPeakKf, mirroredPeakEase, mirroredPeakEase);
        var existingEaseIn = prop.keyInTemporalEase(newPeakKf - 1);
        var existingEaseOut = prop.keyOutTemporalEase(newPeakKf - 1);
        prop.setTemporalContinuousAtKey(newPeakKf - 1, false);
        prop.setTemporalEaseAtKey(newPeakKf - 1, existingEaseIn, existingEaseOut);
        prop.setTemporalEaseAtKey(newPeakKf + 1, mirroredPeakEase);
      } else {
        applyBezierToPeak(prop, newPeakKf, selectedIndices[selectedIndices.length - 1], cubicBez);
      }
    }
  }
  prop.removeKey(selectedIndices[selectedIndices.length - 1]);
};
var createElasticKeyframesOverwrite = function createElasticKeyframesOverwrite(req, comp, prop, selectedIndices, newKeyframes) {
  var finalSelectedKeyframeTime = prop.keyTime(selectedIndices[selectedIndices.length - 1]);
  var finalKeyframeWriteTime = newKeyframes[newKeyframes.length - 1].dstKfTimeOffset + finalSelectedKeyframeTime;
  var ognSelectedKeyframeTime = prop.keyTime(selectedIndices[selectedIndices.length - 2]);
  for (var i = prop.numKeys; i > 0; i--) {
    if (prop.keyTime(i) < finalKeyframeWriteTime && prop.keyTime(i) > finalSelectedKeyframeTime) {
      prop.removeKey(i);
    }
  }
  for (var _i2 = 0; _i2 < newKeyframes.length; _i2++) {
    var _newKeyframes$_i2 = newKeyframes[_i2],
      peakKfTimeOffset = _newKeyframes$_i2.peakKfTimeOffset,
      dstKfTimeOffset = _newKeyframes$_i2.dstKfTimeOffset,
      peakKfValue = _newKeyframes$_i2.peakKfValue,
      dstKfValue = _newKeyframes$_i2.dstKfValue,
      cubicBez = _newKeyframes$_i2.cubicBez;
    var peakKeyframeWriteTime = ognSelectedKeyframeTime + peakKfTimeOffset;
    var dstKeyframeWriteTime = ognSelectedKeyframeTime + dstKfTimeOffset;
    if (req.config.keyframeWriteAtTimeBehavior === "nearest_frame") {
      peakKeyframeWriteTime = getNearestFrameTime(comp, peakKeyframeWriteTime);
      dstKeyframeWriteTime = getNearestFrameTime(comp, dstKeyframeWriteTime);
      if (peakKeyframeWriteTime === dstKeyframeWriteTime) return;
    }
    var newPeakKf = prop.addKey(peakKeyframeWriteTime);
    //set peak keyframe value
    prop.setValueAtKey(newPeakKf, peakKfValue);
    //create destination keyframe
    var newDestKf = prop.addKey(dstKeyframeWriteTime);
    //set destination keyframe value
    prop.setValueAtKey(newDestKf, dstKfValue);
    //handle preexisting incoming ease on final selected keyframe
    if (_i2 === 0) {
      var mirroredPeakEase = getBezierInEase(prop, newPeakKf, cubicBez);
      prop.setTemporalEaseAtKey(newPeakKf, mirroredPeakEase, mirroredPeakEase);
      var existingEaseIn = prop.keyInTemporalEase(newPeakKf - 1);
      var existingEaseOut = prop.keyOutTemporalEase(newPeakKf - 1);
      prop.setTemporalContinuousAtKey(newPeakKf - 1, false);
      prop.setTemporalEaseAtKey(newPeakKf - 1, existingEaseIn, existingEaseOut);
      prop.setTemporalEaseAtKey(newPeakKf + 1, mirroredPeakEase);
    } else {
      applyBezierToPeak(prop, newPeakKf, selectedIndices[selectedIndices.length - 1], cubicBez);
    }
  }
  prop.removeKey(selectedIndices[selectedIndices.length - 1]);
};

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (__isArray(arr)) return arr; }
var rangeMap = function rangeMap(a, b) {
  return function (s) {
    var _a = _slicedToArray(a, 2),
      a1 = _a[0],
      a2 = _a[1];
    var _b = _slicedToArray(b, 2),
      b1 = _b[0],
      b2 = _b[1];
    // Scaling up an order, and then down, to bypass a potential,
    // precision issue with negative numbers.
    return ((b2 - b1) * (s - a1) / (a2 - a1) * 10 + 10 * b1) / 10;
  };
};


var enumFromTo = function enumFromTo(m, n) {
  var arr = [];
  for (var i = m; i <= n; i++) {
    arr.push(i);
  }
  return arr;
};
var mapEasing = function mapEasing(f, xs) {
  return mapPolyfill(xs, f);
};
var mapPolyfill = function mapPolyfill(arr, fn) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var A = function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
};
var B = function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
};
var C = function C(aA1) {
  return 3.0 * aA1;
};

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
var calcBezier = function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
};

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
var getSlope = function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
};
var binarySubdivide = function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX,
    currentT,
    i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
};
var newtonRaphsonIterate = function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0.0) {
      return aGuessT;
    }
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
};
var LinearEasing = function LinearEasing(x) {
  return x;
};
var bezier = function bezier(mX1, mY1, mX2, mY2) {
  // if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
  //   throw new Error('bezier x values must be in [0, 1] range')
  // }
  if (mX1 >= 1) mX1 = 1;
  if (mX2 >= 1) mX2 = 1;
  if (mX1 < .001) mX1 = .001;
  if (mX2 < .001) mX2 = .001;
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  var getTForX = function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  };
  return function (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0 || x === 1) {
      return x;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

//TODO: typings
function getSelectedLayerTimes() {
  var activeComposition = app.project && app.project.activeItem && app.project.activeItem instanceof CompItem ? app.project.activeItem : null;
  var selectedLayerTimes = [];
  if (activeComposition && activeComposition !== null && activeComposition !== void 0 && activeComposition.selectedLayers) {
    for (var i = 0; i < activeComposition.selectedLayers.length; i++) {
      var obj = {
        index: 0,
        time: 0,
        frameRate: 0
      };
      obj.index = activeComposition.selectedLayers[i].index;
      obj.time = activeComposition.selectedLayers[i].inPoint;
      obj.frameRate = activeComposition.frameRate;
      selectedLayerTimes.push(obj);
    }
  }
  return selectedLayerTimes;
}
//AE layers are 1-indexed
//User selected layer array is 0 indexed and can contain any contiguous range of layers  
function moveLayers(req, sortedLayerArr) {
  var myComp = app.project.activeItem;
  if (myComp) {
    for (var i = 0; i < sortedLayerArr.length; i++) {
      
      myComp.layer(sortedLayerArr[i].index).startTime = req[i] * myComp.frameDuration;
    }
  }
}
function getSelectedLayers() {
  var activeComposition = app.project && app.project.activeItem && app.project.activeItem instanceof CompItem ? app.project.activeItem : null;
  var active = activeComposition === null || activeComposition === void 0 ? void 0 : activeComposition.selectedLayers;
  return active;
}

var bounceEaseLayer = function bounceEaseLayer(req, comp, prop, values) {
  var selectedIndices = getLatestSelectedKeyframeIndices(prop);
  var ognIdx = selectedIndices[selectedIndices.length - 2];
  var dstIdx = selectedIndices[selectedIndices.length - 1];
  var timeDelta = prop.keyTime(dstIdx) - prop.keyTime(ognIdx);
  var timeLerpMax = timeDelta * 5; //TODO: magic number here corresponds to UI visualization as initial bounce occurs at 1/5 of total time
  var valueLerpMax = prop.keyValue(dstIdx) - prop.keyValue(ognIdx);
  //TODO: validation functions for values
  if (prop.matchName.includes('Opacity')) {
    if (valueLerpMax > 100) {
      valueLerpMax = 100;
    }
  }
  var keysframesToWrite = [];
  for (var i = 0; i < values.length; i++) {
    var peakDeltaLerp = (values[i].dstLerpX - values[i].ognLerpX) / 2 + values[i].ognLerpX;
    var peakKfTimeOffset = peakDeltaLerp * timeLerpMax;
    var peakKfValue = mapToValues(valueLerpMax, values[i].peakLerpY); // SHOULD BE THIS PLUS DST VAL
    peakKfValue = addArrayValues(prop.keyValue(dstIdx), peakKfValue);
    // let peakKf = prop.addKey(peakKfTime);
    // prop.setValueAtKey(peakKf, peakKfValue);
    var dstLerp = values[i].dstLerpX;
    var dstKfTimeOffset = dstLerp * timeLerpMax;
    // currOgn = prop.addKey(destKfTime);
    // prop.setValueAtKey(currOgn, prop.keyValue(dstIdx));
    var cubicBez = validateCubicBezierX([values[i].mirrorPeakXCubic, values[i].mirrorPeakYCubic, values[i].dstXCubic, values[i].dstYCubic]);
    var keyframe = {
      peakKfTimeOffset: peakKfTimeOffset,
      peakKfValue: peakKfValue,
      dstKfValue: prop.keyValue(dstIdx),
      dstKfTimeOffset: dstKfTimeOffset,
      cubicBez: cubicBez
    };
    keysframesToWrite.push(keyframe);
    // if(prop.propertyValueType  == PropertyValueType.ThreeD_SPATIAL || prop.propertyValueType  == PropertyValueType.TwoD_SPATIAL) {
    //   clearSpatialOutEaseOnKeyframe(prop, peakKf - 1)
    // }
    // applyBezierToPeak(prop, peakKf, dstIdx, cubicBezVal);
  }

  return keysframesToWrite;
};
var createBounceKeyframesOverwrite = function createBounceKeyframesOverwrite(req, comp, prop, selectedIndices, newKeyframes) {
  var finalSelectedKeyframeTime = prop.keyTime(selectedIndices[selectedIndices.length - 1]);
  var ognSelectedKeyframeTime = prop.keyTime(selectedIndices[selectedIndices.length - 2]);
  var finalKeyframeWriteTime = newKeyframes[newKeyframes.length - 1].dstKfTimeOffset + finalSelectedKeyframeTime;
  for (var i = prop.numKeys; i > 0; i--) {
    if (prop.keyTime(i) < finalKeyframeWriteTime && prop.keyTime(i) > finalSelectedKeyframeTime) {
      prop.removeKey(i);
    }
  }
  for (var _i = 0; _i < newKeyframes.length; _i++) {
    var _newKeyframes$_i = newKeyframes[_i],
      peakKfTimeOffset = _newKeyframes$_i.peakKfTimeOffset,
      dstKfTimeOffset = _newKeyframes$_i.dstKfTimeOffset,
      peakKfValue = _newKeyframes$_i.peakKfValue,
      dstKfValue = _newKeyframes$_i.dstKfValue,
      cubicBez = _newKeyframes$_i.cubicBez;
    var peakKeyframeWriteTime = ognSelectedKeyframeTime + peakKfTimeOffset;
    var dstKeyframeWriteTime = ognSelectedKeyframeTime + dstKfTimeOffset;
    if (req.config.keyframeWriteAtTimeBehavior === 'nearest_frame') {
      peakKeyframeWriteTime = getNearestFrameTime(comp, peakKeyframeWriteTime);
      dstKeyframeWriteTime = getNearestFrameTime(comp, dstKeyframeWriteTime);
      if (peakKeyframeWriteTime === dstKeyframeWriteTime) return;
    }
    //create peak keyframe
    var newPeakKf = prop.addKey(peakKeyframeWriteTime);
    //set peak keyframe value
    prop.setValueAtKey(newPeakKf, peakKfValue);
    //create destination keyframe
    var newDstKf = prop.addKey(dstKeyframeWriteTime);
    //set destination keyframe value
    prop.setValueAtKey(newDstKf, dstKfValue);
    applyBezierToPeak(prop, newPeakKf, selectedIndices[selectedIndices.length - 1], cubicBez);
  }
};
var createBounceKeyframesStop = function createBounceKeyframesStop(req, comp, prop, selectedIndices, newKeyframes) {
  var firstExistingKeyframeTime = Infinity;
  var finalSelectedKeyframeTime = prop.keyTime(selectedIndices[selectedIndices.length - 1]);
  var ognSelectedKeyframeTime = prop.keyTime(selectedIndices[selectedIndices.length - 2]);
  for (var i = 1; i <= prop.numKeys; i++) {
    var curKeyTime = prop.keyTime(i);
    if (curKeyTime > finalSelectedKeyframeTime) {
      firstExistingKeyframeTime = curKeyTime;
      //TODO: look into potential issues with removing continuous easing on existing keyframes
      if (prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL || prop.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
        clearAllSpatialEaseOnKeyframe(prop, i);
        if (i + 1 <= prop.numKeys) clearAllSpatialEaseOnKeyframe(prop, i + 1);
      }
      break;
    }
  }
  for (var _i2 = 0; _i2 < newKeyframes.length; _i2++) {
    var _newKeyframes$_i2 = newKeyframes[_i2],
      peakKfTimeOffset = _newKeyframes$_i2.peakKfTimeOffset,
      dstKfTimeOffset = _newKeyframes$_i2.dstKfTimeOffset,
      peakKfValue = _newKeyframes$_i2.peakKfValue,
      dstKfValue = _newKeyframes$_i2.dstKfValue,
      cubicBez = _newKeyframes$_i2.cubicBez;
    var peakKeyframeWriteTime = ognSelectedKeyframeTime + peakKfTimeOffset;
    var dstKeyframeWriteTime = ognSelectedKeyframeTime + dstKfTimeOffset;
    if (req.config.keyframeWriteAtTimeBehavior === 'nearest_frame') {
      peakKeyframeWriteTime = getNearestFrameTime(comp, peakKeyframeWriteTime);
      dstKeyframeWriteTime = getNearestFrameTime(comp, dstKeyframeWriteTime);
      if (peakKeyframeWriteTime === dstKeyframeWriteTime) return;
    }
    if (dstKeyframeWriteTime < firstExistingKeyframeTime) {
      //create peak keyframe
      var newPeakKf = prop.addKey(peakKeyframeWriteTime);
      //set peak keyframe value
      prop.setValueAtKey(newPeakKf, peakKfValue);
      //create destination keyframe
      var newDstKf = prop.addKey(dstKeyframeWriteTime);
      //set destination keyframe value
      prop.setValueAtKey(newDstKf, dstKfValue);
      applyBezierToPeak(prop, newPeakKf, selectedIndices[selectedIndices.length - 1], cubicBez);
    }
  }
};

//TODO: consider using this to create mode allowing user to specific angle and velocity of bounce
// var basicBounceEaseLayer = function basicBounceEaseLayer(prop, layerNum) {
//     var a = collectKeyframes(prop);
//     var incomingVal = a[a.length - 1]['curKeyValue'];
//     elev = degreesToRadians(75);
//     v = 1900;
//     e = .7;
//     f = .5;
//     gravity = 5000;
//     maxBounces = 11;
//     tLaunch = .5;
//     vy = v*Math.sin(elev);
//     vx = v*Math.cos(elev);
//     var numKeys = 2;
//     for (var i = 0; i < 3; i += .01) {
//       if (i >= tLaunch){
//         t = i - tLaunch;
//         tCur = 0;
//         segDur = 2*vy/g;
//         tNext = segDur;
//         d = 0; // x distance traveled
//         nb = 0; // number of bounces
//         while (tNext < t && nb <= maxBounces){
//           d += vx*segDur;
//           vy *= e;
//           vx *= f;
//           segDur *= e;
//           tCur = tNext;
//           tNext += segDur;
//           nb++
//         }
//         if(nb <= maxBounces){
//           delta = t - tCur;
//           x = d + delta*vx;
//           y = delta*(vy - g*delta/2);
//         }else{
//           x = d;
//           y = 0;
//         }
//         numKeys++
//         var newKeyframePosition = [incomingVal[0] + x, incomingVal[1] + (-y), incomingVal[2] + 0];
//         createKeyframe(prop, numKeys, i, newKeyframePosition);
//       }else
//         0
//     }
//   }

var retrieveLocalLicense = function retrieveLocalLicense() {
  var hasLicense = app.settings.haveSetting("pp-prefs", "key");
  var License = {
    key: "null",
    plan: "null",
    last_check: 0
  };
  if (!hasLicense) {
    var _jsonLicense = JSON.stringify(License);
    return _jsonLicense;
  }
  var key = app.settings.getSetting("pp-prefs", "key");
  var plan = app.settings.getSetting("pp-prefs", "plan");
  var last_check = parseInt(app.settings.getSetting("pp-prefs", "last_check"));
  License = {
    key: key,
    plan: plan,
    last_check: last_check
  };
  var jsonLicense = JSON.stringify(License);
  return jsonLicense;
};
var updateLicense = function updateLicense(License) {
  saveSetting("last_check", License.last_check.toString());
  saveSetting("plan", License.plan);
  saveSetting("key", License.key);
  app.preferences.saveToDisk();
};
function saveSetting(setting, value) {
  app.settings.saveSetting("pp-prefs", setting, value);
  app.preferences.saveToDisk();
}

function convertToBezierValues(property, indexTime) {
  var i, len;
  var key = {};
  var lastKey = {};
  var interpolationType = '';
  key.time = property.keyTime(indexTime + 1);
  lastKey.time = property.keyTime(indexTime);
  key.value = getPropertyValue(property.keyValue(indexTime + 1), false);
  lastKey.value = getPropertyValue(property.keyValue(indexTime), false);
  if (!(key.value instanceof Array)) {
    key.value = [key.value];
    lastKey.value = [lastKey.value];
  }
  if (property.keyOutInterpolationType(indexTime) == KeyframeInterpolationType.HOLD) {
    interpolationType = 'hold';
  } else {
    if (property.keyOutInterpolationType(indexTime) == KeyframeInterpolationType.LINEAR && property.keyInInterpolationType(indexTime + 1) == KeyframeInterpolationType.LINEAR) {
      interpolationType = 'linear';
    }
    buildKeyInfluence(property, key, lastKey, indexTime);
    switch (property.propertyValueType) {
      case PropertyValueType.ThreeD_SPATIAL:
      case PropertyValueType.TwoD_SPATIAL:
        lastKey.to = property.keyOutSpatialTangent(indexTime);
        key.ti = property.keyInSpatialTangent(indexTime + 1);
        break;
    }
  }
  duration = key.time - lastKey.time;
  len = key.value.length;
  bezierIn = {};
  bezierOut = {};
  averageSpeed = 0;
  var infOut, infIn;
  switch (property.propertyValueType) {
    case PropertyValueType.ThreeD_SPATIAL:
    case PropertyValueType.TwoD_SPATIAL:
      var curveLength = getCurveLength(lastKey.value, key.value, lastKey.to, key.ti);
      averageSpeed = curveLength / duration;
      if (curveLength === 0) {
        infOut = lastKey.easeOut.influence;
        infIn = key.easeIn.influence;
      } else {
        infOut = Math.min(100 * curveLength / (lastKey.easeOut.speed * duration), lastKey.easeOut.influence);
        infIn = Math.min(100 * curveLength / (key.easeIn.speed * duration), key.easeIn.influence);
      }
      bezierIn.x = 1 - infIn / 100;
      bezierOut.x = infOut / 100;
      break;
    case PropertyValueType.SHAPE:
      averageSpeed = 1;
      infOut = Math.min(100 / lastKey.easeOut.speed, lastKey.easeOut.influence);
      infIn = Math.min(100 / key.easeIn.speed, key.easeIn.influence);
      bezierIn.x = 1 - infIn / 100;
      bezierOut.x = infOut / 100;
      break;
    case PropertyValueType.ThreeD:
    case PropertyValueType.TwoD:
    case PropertyValueType.OneD:
    case PropertyValueType.COLOR:
      bezierIn.x = [];
      bezierOut.x = [];
      key.easeIn.forEach(function (item, index) {
        bezierIn.x[index] = 1 - item.influence / 100;
        bezierOut.x[index] = lastKey.easeOut[index].influence / 100;
      });
      averageSpeed = [];
      for (i = 0; i < len; i += 1) {
        averageSpeed[i] = (key.value[i] - lastKey.value[i]) / duration;
      }
      break;
  }
  if (averageSpeed == 0) {
    bezierIn.y = bezierIn.x;
    bezierOut.y = bezierOut.x;
  } else {
    switch (property.propertyValueType) {
      case PropertyValueType.ThreeD_SPATIAL:
      case PropertyValueType.TwoD_SPATIAL:
      case PropertyValueType.SHAPE:
        if (interpolationType == 'linear') {
          bezierIn.y = bezierIn.x;
          bezierOut.y = bezierOut.x;
        } else {
          bezierIn.y = 1 - key.easeIn.speed / averageSpeed * (infIn / 100);
          bezierOut.y = lastKey.easeOut.speed / averageSpeed * bezierOut.x;
        }
        break;
      case PropertyValueType.ThreeD:
      case PropertyValueType.TwoD:
      case PropertyValueType.OneD:
      case PropertyValueType.COLOR:
        bezierIn.y = [];
        bezierOut.y = [];
        key.easeIn.forEach(function (item, index) {
          if (averageSpeed[index] == 0 || interpolationType == 'linear') {
            bezierIn.y[index] = bezierIn.x[index];
            bezierOut.y[index] = bezierOut.x[index];
          } else {
            bezierIn.y[index] = 1 - item.speed / averageSpeed[index] * (item.influence / 100);
            bezierOut.y[index] = lastKey.easeOut[index].speed / averageSpeed[index] * bezierOut.x[index];
          }
        });
    }
  }
  return {
    "in": bezierOut,
    out: bezierIn,
    duration: duration
  };
}
function getCurveLength(initPos, endPos, outBezier, inBezier) {
  var k,
    curveSegments = 200;
  var point,
    lastPoint = null;
  var ptDistance;
  var absToCoord, absTiCoord;
  var triCoord1,
    triCoord2,
    triCoord3,
    liCoord1,
    liCoord2,
    ptCoord,
    perc,
    addedLength = 0;
  for (k = 0; k < curveSegments; k += 1) {
    point = [];
    perc = k / (curveSegments - 1);
    ptDistance = 0;
    absToCoord = [];
    absTiCoord = [];
    outBezier.forEach(function (item, index) {
      if (absToCoord[index] == null) {
        absToCoord[index] = initPos[index] + outBezier[index];
        absTiCoord[index] = endPos[index] + inBezier[index];
      }
      triCoord1 = initPos[index] + (absToCoord[index] - initPos[index]) * perc;
      triCoord2 = absToCoord[index] + (absTiCoord[index] - absToCoord[index]) * perc;
      triCoord3 = absTiCoord[index] + (endPos[index] - absTiCoord[index]) * perc;
      liCoord1 = triCoord1 + (triCoord2 - triCoord1) * perc;
      liCoord2 = triCoord2 + (triCoord3 - triCoord2) * perc;
      ptCoord = liCoord1 + (liCoord2 - liCoord1) * perc;
      point.push(ptCoord);
      if (lastPoint !== null) {
        ptDistance += Math.pow(point[index] - lastPoint[index], 2);
      }
    });
    ptDistance = Math.sqrt(ptDistance);
    addedLength += ptDistance;
    lastPoint = point;
  }
  return addedLength;
}
function buildKeyInfluence(property, key, lastKey, indexTime) {
  switch (property.propertyValueType) {
    case PropertyValueType.ThreeD_SPATIAL:
    case PropertyValueType.TwoD_SPATIAL:
    case PropertyValueType.SHAPE:
      key.easeIn = {
        influence: property.keyInTemporalEase(indexTime + 1)[0].influence,
        speed: property.keyInTemporalEase(indexTime + 1)[0].speed
      };
      lastKey.easeOut = {
        influence: property.keyOutTemporalEase(indexTime)[0].influence,
        speed: property.keyOutTemporalEase(indexTime)[0].speed
      };
      break;
    default:
      key.easeIn = [];
      lastKey.easeOut = [];
      var inEase = property.keyInTemporalEase(indexTime + 1);
      var outEase = property.keyOutTemporalEase(indexTime);
      inEase.forEach(function (item, index) {
        key.easeIn.push({
          influence: item.influence,
          speed: item.speed
        });
        lastKey.easeOut.push({
          influence: outEase[index].influence,
          speed: outEase[index].speed
        });
      });
  }
}
function getPropertyValue(value, type) {
  switch (type) {
    case 'color':
      return rgbToHex(Math.round(values[0] * 255), Math.round(values[1] * 255), Math.round(values[2] * 255));
    default:
      return value;
  }
}
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    var T, k;
    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    k = 0;
    while (k < len) {
      var kValue;
      if (k in O) {
        kValue = O[k];
        callback.call(T, kValue, k, O);
      }
      k++;
    }
  };
}
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    var T, A, k;
    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    A = new Array(len);
    k = 0;
    while (k < len) {
      var kValue, mappedValue;
      if (k in O) {
        kValue = O[k];
        mappedValue = callback.call(T, kValue, k, O);
        A[k] = mappedValue;
      }
      k++;
    }
    return A;
  };
}

var applyToolES = function applyToolES(req) {
  var resObj = {
    success: true,
    data: null,
    message: ""
  };
  var comp = getActiveComposition();
  var layers = getSelectedLayers();
  var noActiveItemMessage = "";
  if (req.tool === "distribute") noActiveItemMessage = "Please select keyframes or layers to apply the distribute to.";
  if (req.tool === "synergy") noActiveItemMessage = "Please select keyframes to apply the synergy to.";
  if (req.tool === "bezier") noActiveItemMessage = "Please select keyframes to apply the bezier to.";
  if (req.tool === "elastic") noActiveItemMessage = "Please select keyframes to apply the elastic to.";
  if (req.tool === "bounce") noActiveItemMessage = "Please select keyframes to apply the bounce to.";
  if (!comp || !(layers !== null && layers !== void 0 && layers.length) > 0) return JSON.stringify({
    success: false,
    data: {},
    message: noActiveItemMessage
  });
  generalInputValidation(comp, layers);
  switch (req.tool) {
    case "bezier":
      resObj = bezierEase(req, comp, layers, resObj);
      break;
    case "elastic":
      resObj = elasticEase(req, comp, layers, resObj);
      break;
    case "bounce":
      resObj = bounceEase(req, comp, layers, resObj);
      break;
    case "distribute":
      resObj = distributeEase(req, comp, layers, resObj);
      break;
    case "synergy":
      resObj = synergyDistributeAndEase(req, comp, layers, resObj);
      break;
  }
  return JSON.stringify(resObj);
};
var clearKeyframeEasing = function clearKeyframeEasing() {
  app.beginUndoGroup("clear keyframe easing");
  var comp = getActiveComposition();
  var layers = getSelectedLayers();
  if (!comp || !(layers !== null && layers !== void 0 && layers.length) > 0) return;
  for (var i = 0; i < layers.length; i++) {
    var layerPropArray = comp.layer(layers[i]["index"]).selectedProperties;
    for (var j = 0; j < layerPropArray.length; j++) {
      var _prop = layerPropArray[j];
      if (_prop instanceof PropertyGroup || _prop instanceof MaskPropertyGroup) continue;
      var selectedKeys = _prop.selectedKeys;
      for (var k = 0; k < selectedKeys.length; k++) {
        _prop.setInterpolationTypeAtKey(selectedKeys[k], KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
      }
    }
  }
  app.endUndoGroup();
};
var readKeyframePairEasing = function readKeyframePairEasing() {
  var comp = getActiveComposition();
  var layers = getSelectedLayers();
  //search all selected layers for keyframes
  //if there are only 2 selected keyframes on a single layer, return the easing of those keyframes
  for (var i = 0; i < layers.length; i++) {
    var layerPropArray = comp.layer(layers[i]["index"]).selectedProperties;
    for (var j = 0; j < layerPropArray.length; j++) {
      var _prop2 = layerPropArray[j];
      if (_prop2 instanceof PropertyGroup || _prop2 instanceof MaskPropertyGroup) continue;
      var selectedKeys = _prop2.selectedKeys;
      if (selectedKeys.length === 2 && selectedKeys[0] === selectedKeys[1] - 1) {
        var converted = convertToBezierValues(_prop2, selectedKeys[0]);
        converted.success = true;
        return JSON.stringify(converted);
      } else if (selectedKeys.length === 2 && selectedKeys[0] !== selectedKeys[1] - 1) {
        var easeOut = convertToBezierValues(_prop2, selectedKeys[0]);
        var easeIn = convertToBezierValues(_prop2, selectedKeys[1] - 1);
        var res = {
          "in": {
            x: easeOut["in"]["x"],
            y: easeOut["in"]["y"]
          },
          out: {
            x: easeIn["out"]["x"],
            y: easeIn["out"]["y"]
          },
          duration: false,
          success: true
        };
        return JSON.stringify(res);
      } else if (selectedKeys.length === 1 && selectedKeys[0] !== 1 && selectedKeys[0] !== _prop2.numKeys) {
        var _easeOut = convertToBezierValues(_prop2, selectedKeys[0] - 1);
        var _easeIn = convertToBezierValues(_prop2, selectedKeys[0]);
        var _res = {
          "in": {
            x: _easeIn["in"]["x"],
            y: _easeIn["in"]["y"]
          },
          out: {
            x: _easeOut["out"]["x"],
            y: _easeOut["out"]["y"]
          },
          duration: false,
          success: true
        };
        return JSON.stringify(_res);
      }
    }
  }
  return JSON.stringify({
    success: false,
    data: {},
    message: "Please select 2 keys in order to read their values."
  });
};
function saveCustomPresets(value) {
  app.preferences.savePrefAsString("presets", "custom", JSON.stringify(value));
  app.preferences.saveToDisk();
  app.preferences.reload();
  return value;
}
function loadCustomPresets() {
  var hasCustomPresets = app.preferences.havePref("presets", "custom");
  if (!hasCustomPresets) {
    return "[]";
  } else {
    var presetEasings = app.preferences.getPrefAsString("presets", "custom");
    return presetEasings;
  }
}
function savePresetOrdering(value, tool) {
  app.preferences.savePrefAsString("presets", "".concat(tool, "_presets_ordering"), JSON.stringify(value));
  app.preferences.saveToDisk();
  app.preferences.reload();
  return value;
}
function loadPresetOrdering(tool) {
  var hasOrdering = app.preferences.havePref("presets", "".concat(tool, "_presets_ordering"));
  if (!hasOrdering) {
    return "[]";
  } else {
    var ordering = app.preferences.getPrefAsString("presets", "".concat(tool, "_presets_ordering"));
    return ordering;
  }
}
function saveFavoritePresets(value) {
  app.preferences.savePrefAsString("presets", "favorites", JSON.stringify(value));
  app.preferences.saveToDisk();
  app.preferences.reload();
  return value;
}
function loadFavoritePresets() {
  var hasFavoritePresets = app.preferences.havePref("presets", "favorites");
  if (!hasFavoritePresets) {
    return "{}";
  } else {
    var favoritePresets = app.preferences.getPrefAsString("presets", "favorites");
    return favoritePresets;
  }
}
function synergyDistributeAndEase(req, comp, layers, resObj) {
  var keyframePairArr = [];
  var earliestFoundKeyframe = Infinity;
  for (var _i = 0; _i < layers.length; _i++) {
    var layerPropArray = comp.layer(layers[_i]['index']).selectedProperties;
    if (layers[_i].matchName === "ADBE Vector Layer") {
      layerPropArray = sortShapesInShapeLayer(layerPropArray);
    } else {
      layerPropArray = layerPropArray.sort(function (a, b) {
        return a.propertyIndex - b.propertyIndex;
      });
    }
    for (var j = 0; j < layerPropArray.length; j++) {
      var currProperty = layerPropArray[j];
      if (currProperty instanceof PropertyGroup || currProperty instanceof MaskPropertyGroup) continue;
      var selectedKeyframes = validateSelectedKeyframes(layerPropArray[j]);
      if (!selectedKeyframes.length) ; else if (selectedKeyframes.length >= 2) {
        if (currProperty.keyTime(selectedKeyframes[0]) < earliestFoundKeyframe) earliestFoundKeyframe = currProperty.keyTime(selectedKeyframes[0]);
        keyframePairArr.push({
          property: currProperty,
          inIndex: selectedKeyframes[selectedKeyframes.length - 2],
          outIndex: selectedKeyframes[selectedKeyframes.length - 1]
        });
      }
    }
  }
  var inEase = validateCubicBezierX(req.userVars.inEase);
  var outEase = validateCubicBezierX(req.userVars.outEase);
  var deltasArr = [];
  for (var _i2 = 0; _i2 < 4; _i2++) {
    deltasArr[_i2] = inEase[_i2] - outEase[_i2];
  }
  var deltaIncrement = [];
  for (var _i3 = 0; _i3 < 4; _i3++) {
    deltaIncrement[_i3] = deltasArr[_i3] / keyframePairArr.length;
  }
  var values = validateCubicBezierX(req.values);
  
  var easing = bezier(values[0], values[1], values[2], values[3]);
  var mapping = rangeMap([1, keyframePairArr.length], [0, 1]);
  var layersArr = enumFromTo(1, keyframePairArr.length);
  var rangeMappedLayers = mapEasing(mapping, layersArr);
  var updatedStartTimes = [];
  for (var i = 0; i < rangeMappedLayers.length; i++) {
    updatedStartTimes[i] = easing(rangeMappedLayers[i]) * req.userVars.numFrames;
  }
  if (req.userVars.isInverted) updatedStartTimes = updatedStartTimes.reverse();
  app.beginUndoGroup("Lazy Layers");
  for (var _i4 = 0; _i4 < keyframePairArr.length; _i4++) {
    applyBezierBookends(keyframePairArr[_i4].property, keyframePairArr[_i4].inIndex, keyframePairArr[_i4].outIndex, validateCubicBezierX(req.userVars.outEase));
    shiftKeyToNewOffset(keyframePairArr[_i4].property, keyframePairArr[_i4].outIndex, updatedStartTimes[_i4] * comp.frameDuration, keyframePairArr[_i4].outIndex);
    shiftKeyToNewOffset(keyframePairArr[_i4].property, keyframePairArr[_i4].inIndex, updatedStartTimes[_i4] * comp.frameDuration, keyframePairArr[_i4].inIndex);
    for (var _i5 = 0; _i5 < 4; _i5++) {
      req.userVars.outEase[_i5] += deltaIncrement[_i5];
    }
  }
  app.endUndoGroup();
  return keyframePairArr.length ? resObj : {
    success: false,
    data: null,
    message: notify.noKeyframes
  };
}

//TODO: finalize UI visualization logic for elastic/bounce
//PROBLEM: elastic + bounce derive velocity from internal AE keyframe values
//       - we expect users to apply elastic || bounce to more than a single layer
//       - how do we choose which layer to derive velocity from?
function getIncomingVelocity() {
  return 1;
}
function sortShapesInShapeLayer(shapeLayerProps) {
  var layerProperties = [];
  var i = 0;
  while (shapeLayerProps[i] !== undefined && shapeLayerProps[i].matchName !== "ADBE Vector Group") {
    layerProperties.push(shapeLayerProps[i]);
    i++;
  }
  layerProperties.sort(function (a, b) {
    return a.propertyIndex - b.propertyIndex;
  });
  var shapeProperties = [];
  for (var j = i; j < shapeLayerProps.length; j++) {
    if (shapeLayerProps[j].matchName === "ADBE Vector Group") {
      j++;
      var shapePropArr = [];
      var k = j;
      while (shapeLayerProps[k] !== undefined && shapeLayerProps[k].matchName !== "ADBE Vector Group") {
        shapePropArr.push(shapeLayerProps[k]);
        k++;
      }
      shapePropArr.sort(function (a, b) {
        return a.propertyIndex - b.propertyIndex;
      });
      shapeProperties = shapeProperties.concat(shapePropArr);
      j = k - 1;
    }
  }
  var res = shapeProperties.concat(layerProperties);
  return res;
}

//We need to get selected layers and keyframes
//TODO: Refactor, no need to traverse ALL selected properties twice.
var distributeEase = function distributeEase(req, comp, layers, resObj) {
  var earliestFoundKeyframe = Infinity;
  var keyframesInPropertyArr = [];
  for (var i = 0; i < layers.length; i++) {
    var layerPropArray = comp.layer(layers[i]['index']).selectedProperties;
    if (layers[i].matchName === "ADBE Vector Layer") {
      layerPropArray = sortShapesInShapeLayer(layerPropArray);
    } else {
      layerPropArray = layerPropArray.sort(function (a, b) {
        return a.propertyIndex - b.propertyIndex;
      });
    }
    for (var j = 0; j < layerPropArray.length; j++) {
      var currProperty = layerPropArray[j];
      if (currProperty instanceof PropertyGroup || currProperty instanceof MaskPropertyGroup) continue;
      var selectedKeyframes = validateSelectedKeyframesDistribute(layerPropArray[j]);
      if (selectedKeyframes.length) {
        foundKeyframe = true;
        if (currProperty.keyTime(selectedKeyframes[0]) < earliestFoundKeyframe) earliestFoundKeyframe = currProperty.keyTime(selectedKeyframes[0]);
        keyframesInPropertyArr.push({
          property: currProperty,
          keyframes: selectedKeyframes
        });
      }
    }
  }
  app.beginUndoGroup('Distribute Keyframes');
  if (keyframesInPropertyArr.length === 1) {
    // alert(notify.pleaseSelectOneOrMoreKeyframes);
    resObj = {
      success: false,
      data: null,
      message: notify.pleaseSelectOneOrMoreKeyframes
    };
    return resObj;
  } else if (keyframesInPropertyArr.length) {
    distributeKeyframesAlongBezier(req, comp, layers, earliestFoundKeyframe, keyframesInPropertyArr);
  } else {
    distributeLayersAlongBezier(req);
  }
  app.endUndoGroup();
  return resObj;
};
var distributeLayersAlongBezier = function distributeLayersAlongBezier(req) {
  
  var values = req.values;
  
  values = mapPolyfill(values, function (x) {
    return 1 - x;
  });
  var numFrames = req.userVars.numFrames;
  var layerArr = getSelectedLayerTimes();
  if (layerArr.length <= 1) {
    // alert(notify.insufficientLayers);
    resObj = {
      success: false,
      data: null,
      message: notify.insufficientLayers
    };
    return resObj;
  }
  var earliestLayerStartTime = Infinity;
  for (var _i6 = 0; _i6 < layerArr.length; _i6++) {
    if (layerArr[_i6].time < earliestLayerStartTime) {
      earliestLayerStartTime = layerArr[_i6].time;
    }
  }
  
  var sortedLayerArr = layerArr.sort(function (a, b) {
    return a.index - b.index;
  });
  
  var easing = bezier(values[0], values[1], values[2], values[3]); //returns function that gives X for a range
  var mapping = rangeMap([1, sortedLayerArr.length], [0, 1]); //returns function that maps val in first range to second
  var layers = enumFromTo(1, sortedLayerArr.length); //creates array of numbers from 1 to layerArr.length
  var rangeMappedLayers = mapEasing(mapping, layers); // 0 indexed, applies mapping function to each in layers
  var updatedStartTimes = [];
  for (var i = 0; i < rangeMappedLayers.length; i++) {
    updatedStartTimes[i] = easing(rangeMappedLayers[i]) * numFrames;
    updatedStartTimes[i] += earliestLayerStartTime * sortedLayerArr[0].frameRate;
  }
  if (!req.userVars.isInverted) updatedStartTimes = updatedStartTimes.reverse();
  moveLayers(updatedStartTimes, sortedLayerArr);
};
var distributeKeyframesAlongBezier = function distributeKeyframesAlongBezier(req, comp, layers, earliestFoundKeyframe, keyframesInPropertyArr) {
  var values = validateCubicBezierX(req.values);
  
  var easing = bezier(1 - values[0], 1 - values[1], 1 - values[2], 1 - values[3]);
  var mapping = rangeMap([1, keyframesInPropertyArr.length], [0, 1]);
  var layersArr = enumFromTo(1, keyframesInPropertyArr.length);
  var rangeMappedLayers = mapEasing(mapping, layersArr);
  var updatedStartTimes = [];
  for (var i = 0; i < rangeMappedLayers.length; i++) {
    updatedStartTimes[i] = easing(rangeMappedLayers[i]) * req.userVars.numFrames;
  }
  if (!req.userVars.isInverted) updatedStartTimes = updatedStartTimes.reverse();
  for (var _i7 = 0; _i7 < keyframesInPropertyArr.length; _i7++) {
    for (var j = keyframesInPropertyArr[_i7]["keyframes"].length - 1; j >= 0; j--) {
      shiftKeyToNewOffset(keyframesInPropertyArr[_i7].property, keyframesInPropertyArr[_i7]["keyframes"][j], updatedStartTimes[_i7] * comp.frameDuration, keyframesInPropertyArr[_i7]["keyframes"][j]);
    }
  }
};
var bezierEase = function bezierEase(req, comp, layers, resObj) {
  app.beginUndoGroup("bezier ease");
  var success = false;
  
  var values = validateCubicBezierX(req.values);
  for (var i = 0; i < layers.length; i++) {
    var layerPropArray = comp.layer(layers[i]["index"]).selectedProperties;
    for (var j = 0; j < layerPropArray.length; j++) {
      var currProperty = layerPropArray[j];
      if (currProperty instanceof PropertyGroup || currProperty instanceof MaskPropertyGroup) continue;
      var selectedIndices = validateSelectedKeyframes(layerPropArray[j]);
      if (selectedIndices.length === 0) {
        // alert(notify.noKeyframes);
        resObj = {
          success: false,
          message: notify.pleaseAddOneOrMoreKeyframes,
          data: null
        };
      } else if (selectedIndices.length === 1 && currProperty.numKeys === 1) {
        //alert(notify.pleaseAddOneOrMoreKeyframes)
        resObj = {
          success: false,
          message: notify.pleaseAddOneOrMoreKeyframes,
          data: null
        };
      } else if (selectedIndices.length === 1 && currProperty.numKeys >= 2) {
        applyBezierToSingleSelection(currProperty, selectedIndices[0], values);
        success = true;
      } else if (selectedIndices.length === 2 && Math.abs(selectedIndices[0] - selectedIndices[1]) === 1) {
        applyBezierBookends(currProperty, selectedIndices[0], selectedIndices[1], values);
        success = true;
      } else {
        applyBezierToMultipleSelections(currProperty, selectedIndices, values);
        success = true;
      }
    }
  }
  app.endUndoGroup();
  return success ? {
    success: true,
    message: notify.success,
    data: null
  } : resObj;
};
var bounceEase = function bounceEase(req, comp, layers, resObj) {
  app.beginUndoGroup("bounce ease");
  var keyframesToWrite = [];
  for (var i = 0; i < layers.length; i++) {
    var props = comp.layer(layers[i]["index"]).selectedProperties;
    for (var j = 0; j < props.length; j++) {
      //TODO: add validation for bounce + elastic
      var selectedIndices = validateSelectedKeyframes(props[j]);
      if (selectedIndices.length > 1) {
        var keyframes = bounceEaseLayer(req, comp, props[j], req.values);
        var keyframeWriteReq = {
          prop: props[j],
          keyframes: keyframes,
          selectedIndices: selectedIndices
        };
        keyframesToWrite.push(keyframeWriteReq);
      }
    }
  }
  for (var k = 0; k < keyframesToWrite.length; k++) {
    if (req.config.keyframeCollisionBehavior == "overwrite") {
      createBounceKeyframesOverwrite(req, comp, keyframesToWrite[k].prop, keyframesToWrite[k].selectedIndices, keyframesToWrite[k].keyframes);
    } else if (req.config.keyframeCollisionBehavior == "stop") {
      createBounceKeyframesStop(req, comp, keyframesToWrite[k].prop, keyframesToWrite[k].selectedIndices, keyframesToWrite[k].keyframes);
    }
  }
  app.endUndoGroup();
  return keyframesToWrite.length ? resObj : {
    success: false,
    message: notify.pleaseSelectOneOrMoreKeyframes,
    data: null
  };
};
var elasticEase = function elasticEase(req, comp, layers, resObj) {
  app.beginUndoGroup("Lazy Layers");
  var keyframesToWrite = [];
  for (var i = 0; i < layers.length; i++) {
    var layer = comp.layer(layers[i]["index"]);
    var props = layer.selectedProperties;
    for (var j = 0; j < props.length; j++) {
      var selectedIndices = validateSelectedKeyframes(props[j]);
      if (selectedIndices.length > 1) {
        var keysframes = elasticEaseLayer(props[j], req, selectedIndices);
        var keyframeWriteReq = {
          prop: props[j],
          keyframes: keysframes,
          selectedIndices: selectedIndices
        };
        keyframesToWrite.push(keyframeWriteReq);
      }
    }
  }
  for (var k = 0; k < keyframesToWrite.length; k++) {
    if (req.config.keyframeCollisionBehavior == "overwrite") {
      createElasticKeyframesOverwrite(req, comp, keyframesToWrite[k].prop, keyframesToWrite[k].selectedIndices, keyframesToWrite[k].keyframes);
    } else if (req.config.keyframeCollisionBehavior == "stop") {
      createElasticKeyframesStop(req, comp, keyframesToWrite[k].prop, keyframesToWrite[k].selectedIndices, keyframesToWrite[k].keyframes);
    }
  }
  app.endUndoGroup();
  return keyframesToWrite.length ? resObj : {
    success: false,
    message: notify.pleaseSelectOneOrMoreKeyframes,
    data: null
  };
};
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {

    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

var aeft = /*#__PURE__*/__objectFreeze({
	__proto__: null,
	retrieveLocalLicense: retrieveLocalLicense,
	updateLicense: updateLicense,
	applyToolES: applyToolES,
	clearKeyframeEasing: clearKeyframeEasing,
	readKeyframePairEasing: readKeyframePairEasing,
	saveCustomPresets: saveCustomPresets,
	loadCustomPresets: loadCustomPresets,
	savePresetOrdering: savePresetOrdering,
	loadPresetOrdering: loadPresetOrdering,
	saveFavoritePresets: saveFavoritePresets,
	loadFavoritePresets: loadFavoritePresets,
	getIncomingVelocity: getIncomingVelocity
});

var helloWorld$3 = function helloWorld() {
  alert("Hello from Illustrator");
  app.activeDocument.path;
};

var ilst = /*#__PURE__*/__objectFreeze({
	__proto__: null,
	helloWorld: helloWorld$3
});

var helloWorld$2 = function helloWorld() {
  alert("Hello from Animate");
};

var anim = /*#__PURE__*/__objectFreeze({
	__proto__: null,
	helloWorld: helloWorld$2
});

var qeDomFunction = function qeDomFunction() {
  if (typeof qe === "undefined") {
    app.enableQE();
  }
  if (qe) {
    qe.name;
    qe.project.getVideoEffectByName("test");
  }
};
var helloWorld$1 = function helloWorld() {
  alert("Hello from Premiere Pro.");
};

var ppro = /*#__PURE__*/__objectFreeze({
	__proto__: null,
	qeDomFunction: qeDomFunction,
	helloWorld: helloWorld$1
});

var helloWorld = function helloWorld() {
  app.activeDocument;
  alert("Hello from Photoshop");
};

var phxs = /*#__PURE__*/__objectFreeze({
	__proto__: null,
	helloWorld: helloWorld
});

var main;
switch (BridgeTalk.appName) {
  case "premierepro":
  case "premiereprobeta":
    main = ppro;
    break;
  case "aftereffects":
  case "aftereffectsbeta":
    main = aeft;
    break;
  case "illustrator":
  case "illustratorbeta":
    main = ilst;
    break;
  case "photoshop":
  case "photoshopbeta":
    main = phxs;
    break;
  default:
    
    if (app.appName === "Adobe Animate") {
      main = anim;
    }
    break;
}

var host = typeof $ !== "undefined" ? $ : window;
host[ns] = main;
})(this);//# sourceMappingURL=index.js.map
