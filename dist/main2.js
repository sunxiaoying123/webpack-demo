!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="http://localhost:8890/",n(n.s="./src/main2.js")}({"./src/main2.js":
/*!**********************!*\
  !*** ./src/main2.js ***!
  \**********************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\n// let name = '孙小英'\n// let allName = `${name}学习webpack`\n// document.getElementById('study').innerHTML = allName\nvar num = [{\n  name: '小蛮',\n  value: '11'\n}, {\n  name: '小黄',\n  value: '12'\n}, {\n  name: '小里',\n  value: '10'\n}, {\n  name: '小呗',\n  value: '9'\n}, {\n  name: '小话',\n  value: '100'\n}];\nvar temp = '';\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n  for (var _iterator = num[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n    var item = _step.value;\n\n    temp += '\\u6211\\u662Fmain2\\u91CC\\u9762\\u7684' + item.name + ':' + item.value + '<br>';\n  }\n} catch (err) {\n  _didIteratorError = true;\n  _iteratorError = err;\n} finally {\n  try {\n    if (!_iteratorNormalCompletion && _iterator.return) {\n      _iterator.return();\n    }\n  } finally {\n    if (_didIteratorError) {\n      throw _iteratorError;\n    }\n  }\n}\n\ndocument.getElementById('study').innerHTML = temp;\n\n//# sourceURL=webpack:///./src/main2.js?")}});