"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  width: 100%;
  background-color: beige;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #008000;
  padding: 2vh;
  justify-content: space-between;
  display: flex;
}
header #sun {
  position: absolute;
  top: -7%;
  left: 13%;
}
header #title:hover {
  color: #FFD700;
  cursor: pointer;
}
header #title {
  color: white;
  font-size: 35px;
  top: -15%;
}
header .searchBar {
  margin-top: 30px;
}
header #searchLabel {
  color: white;
  font-size: 24px;
}
header #search {
  width: 20vw;
  height: 2vh;
}
header #search:hover {
  cursor: pointer;
}
header #enter {
  border: none;
  width: 5vw;
  height: 3vh;
  border-radius: 5px;
  color: white;
  background-color: #007FFF;
}
header #enter:hover {
  background-color: #17B169;
  cursor: pointer;
}
header #random:hover {
  background-color: #17B169;
  cursor: pointer;
}
header #random {
  border: none;
  width: 5vw;
  height: 3vh;
  border-radius: 5px;
  color: white;
  background-color: #007FFF;
}
header .sidebar {
  background: #008000;
  border: none;
}

#mid #cardButtons {
  position: absolute;
  top: 73%;
  left: 47%;
}
#mid #cardButtons button {
  margin-left: 3px;
  background-color: #007FFF;
  width: 1vw;
  height: 2vh;
  border-radius: 50%;
  border: none;
}
#mid #cardButtons button:hover {
  background-color: #6CB4EE;
  cursor: pointer;
}
#mid #leftArrow:hover {
  cursor: pointer;
}
#mid #rightArrow:hover {
  cursor: pointer;
}
#mid #leftArrow {
  top: 40%;
  left: 20%;
  background-color: beige;
  position: absolute;
  padding: 0;
  border: none;
}
#mid #rightArrow {
  top: 40%;
  background-color: beige;
  left: 70%;
  position: absolute;
  padding: 0;
  border: none;
}
#mid #wrap {
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 25px -4px rgb(0, 0, 0);
  border-radius: 5px;
  border: 1px solid black;
}
#mid #wrap #content #divWrap {
  width: 28vw;
  transition: transform 1s ease-in;
  transform: translateX(0vw);
  display: flex;
}
#mid #wrap #content #divWrap #card {
  display: flex;
  flex-direction: column;
  padding: 5px;
  min-width: 30vw;
  align-items: center;
  background-color: white;
  border: solid 1px black;
}
#mid #wrap #content #divWrap #card #tempBtn:hover {
  cursor: pointer;
}
#mid #wrap #content #divWrap #card #tempBtn {
  width: 80px;
  height: 34px;
  margin-top: 15px;
  border-radius: 20px;
  margin-left: 3vw;
}
#mid #wrap #content #divWrap #card #tempBtn #cardbtn {
  margin-right: 30px;
  transition: transform 1s ease-in-out;
}
#mid #wrap #content #divWrap #card #windBtn:hover {
  cursor: pointer;
}
#mid #wrap #content #divWrap #card #windBtn {
  width: 80px;
  height: 34px;
  margin-top: 15px;
  border-radius: 20px;
  margin-left: 3vw;
}
#mid #wrap #content #divWrap #card #windBtn #cardbtn2 {
  margin-right: 30px;
  transition: transform 1s ease-in-out;
}
#mid #wrap #content #divWrap #card .active {
  transform: translateX(2vw);
}
#mid #wrap #content #divWrap #card .label {
  display: flex;
}
#mid #wrap #content #divWrap #card .label .temp {
  margin-top: 12px;
}
#mid #wrap #content #divWrap #card .label p {
  margin-left: 2vw;
  font-size: 20px;
  font-weight: bold;
}
#mid #wrap #content #divWrap #card .label label {
  font-size: 24px;
  margin-top: 15px;
  margin-right: 1vw;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACK,SAAA;EACD,WAAA;EACA,uBAAA;EACA,aAAA;EACA,sBAAA;AADJ;;AAKA;EAEI,yBAAA;EACA,YAAA;EACA,8BAAA;EACA,aAAA;AAHJ;AAII;EACI,kBAAA;EACA,QAAA;EACA,SAAA;AAFR;AAII;EACI,cAAA;EACA,eAAA;AAFR;AAII;EAEI,YAAA;EACA,eAAA;EACA,SAAA;AAHR;AAKI;EACI,gBAAA;AAHR;AAKI;EACI,YAAA;EACA,eAAA;AAHR;AAKI;EACI,WAAA;EACA,WAAA;AAHR;AAMI;EACI,eAAA;AAJR;AAMI;EACI,YAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;AAJR;AAMI;EACI,yBAAA;EACA,eAAA;AAJR;AAMI;EACI,yBAAA;EACA,eAAA;AAJR;AAMI;EACI,YAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;AAJR;AAMK;EACG,mBAAA;EACA,YAAA;AAJR;;AASO;EAEC,kBAAA;EACA,QAAA;EACA,SAAA;AAPR;AAQQ;EACI,gBAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;AANZ;AAQQ;EACI,yBAAA;EACA,eAAA;AANZ;AASI;EACI,eAAA;AAPR;AASI;EACI,eAAA;AAPR;AASI;EACI,QAAA;EACA,SAAA;EACA,uBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;AAPR;AASM;EACI,QAAA;EACA,uBAAA;EACA,SAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;AAPV;AAYI;EAEI,gBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,0CAAA;EAEA,kBAAA;EAGH,uBAAA;AAdL;AAmBS;EACE,WAAA;EACC,gCAAA;EACD,0BAAA;EAEC,aAAA;AAlBZ;AAoBa;EAEG,aAAA;EACA,sBAAA;EACA,YAAA;EACC,eAAA;EACD,mBAAA;EACC,uBAAA;EACA,uBAAA;AAnBjB;AAoBiB;EACA,eAAA;AAlBjB;AAoBiB;EACG,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AAlBpB;AAmBoB;EACI,kBAAA;EACA,oCAAA;AAjBxB;AAoBiB;EACG,eAAA;AAlBpB;AAoBiB;EACG,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AAlBpB;AAmBoB;EACI,kBAAA;EACA,oCAAA;AAjBxB;AAoBiB;EAEG,0BAAA;AAnBpB;AAqBiB;EAWI,aAAA;AA7BrB;AAmBoB;EACI,gBAAA;AAjBxB;AAoBqB;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;AAlBzB;AAsBqB;EACI,eAAA;EACD,gBAAA;EACA,iBAAA;AApBxB","sourcesContent":[" \n$width:350px;\nbody{\n     margin: 0;\n    width: 100%;\n    background-color: beige;\n    display: flex;\n    flex-direction: column;\n     \n    \n}\nheader{\n \n    background-color: #008000;   \n    padding: 2vh;\n    justify-content: space-between;\n    display: flex;\n    #sun{\n        position:absolute;\n        top: -7%;\n        left: 13%;\n    }\n    #title:hover{\n        color: #FFD700;\n        cursor: pointer;\n    }\n    #title{\n        \n        color: white;\n        font-size: 35px;\n        top: -15%;\n    }\n    .searchBar{\n        margin-top: 30px;\n    }\n    #searchLabel{\n        color: white;\n        font-size: 24px;\n    }\n    #search{\n        width: 20vw;\n        height: 2vh;\n         \n    }\n    #search:hover{\n        cursor: pointer;\n    }\n    #enter{\n        border: none;\n        width: 5vw;\n        height: 3vh;\n        border-radius: 5px;\n        color: white;\n        background-color: #007FFF;\n    }\n    #enter:hover{\n        background-color: #17B169;\n        cursor: pointer;\n    }\n    #random:hover{\n        background-color: #17B169;\n        cursor: pointer;\n    }\n    #random{\n        border: none;\n        width: 5vw;\n        height: 3vh;\n        border-radius: 5px;\n        color: white;\n        background-color: #007FFF;\n    }\n     .sidebar{\n        background: #008000;\n        border: none;\n     }\n}\n#mid{\n    \n       #cardButtons{\n        \n        position: absolute;\n        top: 73%;\n        left: 47%;\n        button{\n            margin-left: 3px;\n            background-color: #007FFF;\n            width: 1vw;\n            height: 2vh;\n            border-radius: 50%;\n            border: none;\n        }\n        button:hover{\n            background-color: #6CB4EE;\n            cursor: pointer;\n        }\n       }\n    #leftArrow:hover{\n        cursor: pointer;\n    }\n    #rightArrow:hover{\n        cursor: pointer;\n    }\n    #leftArrow{\n        top: 40%;\n        left: 20%;\n        background-color: beige;\n        position: absolute;\n        padding: 0;\n        border: none;\n      }\n      #rightArrow{\n          top: 40%;\n          background-color: beige;\n          left: 70%;\n          position: absolute;\n          padding: 0;\n          border: none;\n      }\n        \n      \n \n    #wrap{\n      \n        overflow: hidden;         \n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%,-50%);\n        box-shadow: 0px 4px 25px -4px rgba(0,0,0,1);\n        //animation: ani 5s infinite ease-in-out;\n        border-radius: 5px;\n     \n      \n     border: 1px solid black;\n     \n     #content{\n      \n       \n         #divWrap{ \n           width: 28vw;\n            transition: transform 1s ease-in;\n           transform: translateX(0vw);\n              \n            display: flex;\n           \n             #card{\n                 \n                display: flex;\n                flex-direction: column;\n                padding: 5px;\n                 min-width: 30vw;\n                align-items: center;\n                 background-color: white;\n                 border: solid 1px black; \n                 #tempBtn:hover{ \n                 cursor: pointer;\n                 }\n                 #tempBtn{\n                    width: 80px;\n                    height:34px;\n                    margin-top: 15px;\n                    border-radius:20px ;\n                    margin-left: 3vw;\n                    #cardbtn{\n                        margin-right: 30px;\n                        transition: transform 1s ease-in-out;\n                    }\n                 }\n                 #windBtn:hover{\n                    cursor: pointer;\n                 }\n                 #windBtn{\n                    width: 80px;\n                    height:34px;\n                    margin-top: 15px;\n                    border-radius:20px ;\n                    margin-left: 3vw;\n                    #cardbtn2{\n                        margin-right: 30px;\n                        transition: transform 1s ease-in-out;\n                 }\n                }\n                 .active{\n                  \n                    transform: translateX(2vw);\n                 }\n                 .label{\n                    .temp{\n                        margin-top: 12px;\n                         \n                    }\n                     p{\n                         margin-left: 2vw;\n                         font-size: 20px;\n                         font-weight: bold;\n                          \n                     }\n                     display: flex;\n                     label{\n                         font-size: 24px;\n                        margin-top: 15px;\n                        margin-right: 1vw;\n                         \n                     }\n                   \n\n                 }\n             }\n         }\n       \n     }\n    \n      \n      \n     \n }\n \n}\n \n "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random */ "./src/random.js");
/* harmony import */ var _retrieve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retrieve */ "./src/retrieve.js");



let count = 0
let vw =32
const title = document.getElementById('title')
const cardBtns = document.getElementById('cardButtons')
const leftArrow = document.getElementById('leftArrow')
const rightArrow = document.getElementById('rightArrow')
const content = document.getElementById('content');   
const enter = document.getElementById('enter');
const search = document.getElementById('search');
const randomBtn = document.getElementById('random')
randomBtn.addEventListener('click',()=>{
  const divWrap = document.getElementById('divWrap')
  clearInterval(interval)
  let count = divWrap.childElementCount
  console.log(count)
  if(divWrap.childElementCount >=1){
    divWrap.remove()
    const div = document.createElement('div')
    div.setAttribute('id', 'divWrap')
    content.appendChild(div)
    leftArrow.style.visibility = 'hidden'
    rightArrow.style.visibility = 'hidden'
    cardBtns.style.visibility = 'hidden'
  }  
   (0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])());
})
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
search.addEventListener('keypress',(e)=>{
  if(e.key === 'Enter'){
    e.preventDefault()
    enter.click()
  }
})

 enter.addEventListener('click',(e)=>{
  
  const divWrap = document.getElementById('divWrap')
  clearInterval(interval)
  let count = divWrap.childElementCount
  console.log(count)
  if(divWrap.childElementCount >=1){
    divWrap.remove()
    const div = document.createElement('div')
    div.setAttribute('id', 'divWrap')
    content.appendChild(div)
    leftArrow.style.visibility = 'hidden'
    rightArrow.style.visibility = 'hidden'
    cardBtns.style.visibility = 'hidden'
  }  
   (0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)(search.value);
    search.value = ''

 });
 
 leftArrow.addEventListener('click', ()=>{
  vw = 31
  const divWrap = document.getElementById('divWrap')
   if(count == 0){
    vw = vw*count
    divWrap.style.transform = `translateX(${vw}vw)` 
   }else{
    count++
    vw = count*vw
    console.log(vw)
    divWrap.style.transform = `translateX(${vw}vw)` 
   }
   clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
 })
 rightArrow.addEventListener('click',()=>{
  vw = 31
  const divWrap = document.getElementById('divWrap')
  if(count == -4){
    count = 0
    vw = vw * count
    divWrap.style.transform = `translateX(${vw}vw)` 
  }else{
    count--
  vw = vw * count
  console.log(vw)
  divWrap.style.transform = `translateX(${vw}vw)` 
  }
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
 })
 const card1 = document.querySelector('.card1')
 const card2 = document.querySelector('.card2')
 const card3 = document.querySelector('.card3')
 const card4 = document.querySelector('.card4')
 const card5 = document.querySelector('.card5')
 card1.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(0vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = 0
 })
 card2.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-31vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -1
 })
 card3.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-62vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -2
 })
 card4.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-92vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -3
 })
 card5.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-123vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -4
 })
 var interval = setInterval(()=>{
  const divWrap = document.getElementById('divWrap')
    let vw = 31
    if(count == -4){ count = 0
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` 
    }
    else {count--
    vw = vw*count
    divWrap.style.transform = `translateX(${vw}vw)` }
    const enter = document.getElementById('enter');
     
 },5000)
 
 title.addEventListener('click',()=>{
   clearInterval(interval)
    divWrap.remove()
    const div = document.createElement('div')
    div.setAttribute('id', 'divWrap')
    content.appendChild(div)
  leftArrow.style.visibility = 'visible'
  rightArrow.style.visibility = 'visible'
  cardBtns.style.visibility = 'visible'
  ;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
interval = setInterval(()=>{
  const divWrap = document.getElementById('divWrap')
    let vw = 31
    if(count == -4){ count = 0
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` 
    }
    else {count--
    vw = vw*count
    divWrap.style.transform = `translateX(${vw}vw)` }
    const enter = document.getElementById('enter');
     
 },5000)
 }
)
 
 


/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RandomCity)
/* harmony export */ });


function RandomCity(){
    const cities = ['Tokyo','Delhi','Shanghai','Los Angeles','São Paulo','Mexico City','Cairo','Dhaka','Mumbai','Beijing','Osaka','Washington D.C','Tampa','Denver','Toranto','Tuzla','London','New York','New Jersey','Lima','Ho Chi Minh','Jinan','Baghdad','Bogota','Bengaluru','Paris','Vienna','Sydney','Buenos Aires','Santiago','Tehran' ]
    const cityLength = cities.length
    return cities[Math.floor(Math.random()*cityLength)]
}

/***/ }),

/***/ "./src/retrieve.js":
/*!*************************!*\
  !*** ./src/retrieve.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildWeather: () => (/* binding */ buildWeather),
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
/* eslint-disable no-case-declarations */
/* eslint-disable indent */
class cityWeather{
    constructor(city,state, country, tempF,tempC,condition, windMPH,windKPH){
        this.city = city;
        this.state = state;
        this.country = country;
        this.tempF = tempF;
        this.tempC = tempC;
        this.condition =condition;
        this.windMPH = windMPH;
        this.windKPH = windKPH;
    }
}
async function getWeather(city){     
    try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=298bf6c3b43b4a55875191548230211&q=${city}`,{mode:'cors'});
    const data = await response.json();
    console.log(data)
    const object = new cityWeather(data.location.name,data.location.region,data.location.country,data.current.temp_f,data.current.temp_c,data.current.condition.text,data.current.wind_mph,data.current.wind_kph);
    console.log(object);
    buildWeather(object);
    }catch(err){
        alert('Not a real city');
        
    }
     
  
}
function buildWeather(object){
   
     const content = document.getElementById('content');
    const wrapper = document.getElementById('divWrap')
    const div = document.createElement('div');
    div.setAttribute('id','card');
   
    for(let i = 0;i<8;i++){
        const container = document.createElement('div');
        const btn = document.createElement('button')
                btn.innerHTML = '<svg id="cardbtn" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="15" cy="15" r="15" fill="#326BFF"/></svg>'
                const butn = document.createElement('button')
                butn.innerHTML = '<svg id="cardbtn2" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="15" cy="15" r="15" fill="#326BFF"/></svg>'
        container.classList.add('label');
        const label = document.createElement('label');
        const p = document.createElement('p');
       
         
        
        
        switch(i){
            case 0:
                const h2 = document.createElement('h2');   
                h2.setAttribute('name','city');
                label.setAttribute('for','city');
                label.innerHTML = 'City: ';
                h2.innerHTML = object.city;
                container.appendChild(label);
                container.appendChild(h2);
               div.appendChild(container);
                break;
            case 1:
                if(object.country == 'United States of America'){
                    const h3 = document.createElement('h3');
                    label.setAttribute('for','state');
                    h3.setAttribute('name','state');
                    label.setAttribute('class','state')
                    h3.innerHTML = object.state;
                    label.innerHTML = 'State:';
                    container.appendChild(label);
                    container.appendChild(h3);
                    div.appendChild(container);
                    break;
                }else break;
            case 2:
                const h4 = document.createElement('h3');
                label.setAttribute('for','country');
                label.setAttribute('class','country')
                h4.setAttribute('name','country');
                h4.innerHTML = object.country;
                label.innerHTML = 'Country:';
                container.appendChild(label);
                container.appendChild(h4);
                div.appendChild(container);
                break;
            case 3:
              
                p.setAttribute('name','F');
                label.setAttribute('for','F');
                label.setAttribute('class','temp')
                btn.setAttribute('id','tempBtn')
                btn.addEventListener('click',()=>{
                    const svg = document.getElementById('cardbtn')
                    if(svg.hasAttribute('class','active')){
                        svg.setAttribute('style','transform:translateX(0vw);')
                        svg.removeAttribute('class','active')
                        p.innerHTML = object.tempF;
                        label.innerHTML = 'F<sup>o</sup>'
                    }else{
                        svg.setAttribute('class','active')
                       svg.setAttribute('style','transform:translateX(2vw);')
                       p.innerHTML = object.tempC;
                       label.innerHTML = 'C<sup>o</sup>'
                    }
                  })
       
                p.innerHTML = object.tempF;
                label.innerHTML = 'F<sup>o</sup>'
                container.appendChild(label);
                container.appendChild(p);
                if(wrapper.childElementCount==0){
                container.appendChild(btn)}
                div.appendChild(container);
                break;
            case 4:
                
                break;
                 
            case 5:
                p.setAttribute('name','condition');
                label.setAttribute('for','condition');
                p.innerHTML = object.condition;
                label.innerHTML = 'Condition:';
                container.appendChild(label);
                container.appendChild(p);
                div.appendChild(container);
                break;
            case 6:
                
                break;
            case 7:
                p.setAttribute('name','mph');
                label.setAttribute('for','mph');
                p.innerHTML = object.windMPH;
                butn.setAttribute('id','windBtn')
              
               butn.addEventListener('click',()=>{
                    const svg2 = document.getElementById('cardbtn2')
                    if(svg2.hasAttribute('class','active')){
                        svg2.setAttribute('style','transform:translateX(0vw);')
                        svg2.removeAttribute('class','active')
                        label.innerHTML = 'Wind MPH'
                        p.innerHTML = object.windMPH
                        
                    }else{
                        svg2.setAttribute('class','active')
                       svg2.setAttribute('style','transform:translateX(2vw);')
                       label.innerHTML = "Wind KPH"
                        p.innerHTML = object.windKPH
                    }
                  })
                  
                label.innerHTML = 'Wind MPH:';
                container.appendChild(label);
                container.appendChild(p);
                if(wrapper.childElementCount==0){
                container.appendChild(butn)}
                div.appendChild(container);
                break;
        }
    }

    wrapper.appendChild(div);
    content.appendChild(wrapper);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcs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cUJBQXFCO0FBQ3JCO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9yZXRyaWV2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xuICBwYWRkaW5nOiAydmg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cbmhlYWRlciAjc3VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03JTtcbiAgbGVmdDogMTMlO1xufVxuaGVhZGVyICN0aXRsZTpob3ZlciB7XG4gIGNvbG9yOiAjRkZENzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgI3RpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDM1cHg7XG4gIHRvcDogLTE1JTtcbn1cbmhlYWRlciAuc2VhcmNoQmFyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmhlYWRlciAjc2VhcmNoTGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmhlYWRlciAjc2VhcmNoIHtcbiAgd2lkdGg6IDIwdnc7XG4gIGhlaWdodDogMnZoO1xufVxuaGVhZGVyICNzZWFyY2g6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgI2VudGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNXZ3O1xuICBoZWlnaHQ6IDN2aDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdGRkY7XG59XG5oZWFkZXIgI2VudGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3QjE2OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyICNyYW5kb206aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdCMTY5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgI3JhbmRvbSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDV2dztcbiAgaGVpZ2h0OiAzdmg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3RkZGO1xufVxuaGVhZGVyIC5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogIzAwODAwMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jbWlkICNjYXJkQnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MyU7XG4gIGxlZnQ6IDQ3JTtcbn1cbiNtaWQgI2NhcmRCdXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdGRkY7XG4gIHdpZHRoOiAxdnc7XG4gIGhlaWdodDogMnZoO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbiNtaWQgI2NhcmRCdXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Q0I0RUU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtaWQgI2xlZnRBcnJvdzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtaWQgI3JpZ2h0QXJyb3c6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbWlkICNsZWZ0QXJyb3cge1xuICB0b3A6IDQwJTtcbiAgbGVmdDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG59XG4jbWlkICNyaWdodEFycm93IHtcbiAgdG9wOiA0MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICBsZWZ0OiA3MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuI21pZCAjd3JhcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjVweCAtNHB4IHJnYigwLCAwLCAwKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbiNtaWQgI3dyYXAgI2NvbnRlbnQgI2RpdldyYXAge1xuICB3aWR0aDogMjh2dztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI21pZCAjd3JhcCAjY29udGVudCAjZGl2V3JhcCAjY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweDtcbiAgbWluLXdpZHRoOiAzMHZ3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkICN0ZW1wQnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI21pZCAjd3JhcCAjY29udGVudCAjZGl2V3JhcCAjY2FyZCAjdGVtcEJ0biB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkICN0ZW1wQnRuICNjYXJkYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkICN3aW5kQnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI21pZCAjd3JhcCAjY29udGVudCAjZGl2V3JhcCAjY2FyZCAjd2luZEJ0biB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkICN3aW5kQnRuICNjYXJkYnRuMiB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xufVxuI21pZCAjd3JhcCAjY29udGVudCAjZGl2V3JhcCAjY2FyZCAuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJ2dyk7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkIC5sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkIC5sYWJlbCAudGVtcCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkIC5sYWJlbCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNtaWQgI3dyYXAgI2NvbnRlbnQgI2RpdldyYXAgI2NhcmQgLmxhYmVsIGxhYmVsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDF2dztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ssU0FBQTtFQUNELFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURKOztBQUtBO0VBRUkseUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBSEo7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFGUjtBQUlJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGUjtBQUlJO0VBRUksWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBSFI7QUFLSTtFQUNJLGdCQUFBO0FBSFI7QUFLSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBSFI7QUFLSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBSFI7QUFNSTtFQUNJLGVBQUE7QUFKUjtBQU1JO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFKUjtBQU1JO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBSlI7QUFNSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUpSO0FBTUk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUpSO0FBTUs7RUFDRyxtQkFBQTtFQUNBLFlBQUE7QUFKUjs7QUFTTztFQUVDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFQUjtBQVFRO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTlo7QUFRUTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQU5aO0FBU0k7RUFDSSxlQUFBO0FBUFI7QUFTSTtFQUNJLGVBQUE7QUFQUjtBQVNJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFQUjtBQVNNO0VBQ0ksUUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFQVjtBQVlJO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQ0FBQTtFQUVBLGtCQUFBO0VBR0gsdUJBQUE7QUFkTDtBQW1CUztFQUNFLFdBQUE7RUFDQyxnQ0FBQTtFQUNELDBCQUFBO0VBRUMsYUFBQTtBQWxCWjtBQW9CYTtFQUVHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQyxlQUFBO0VBQ0QsbUJBQUE7RUFDQyx1QkFBQTtFQUNBLHVCQUFBO0FBbkJqQjtBQW9CaUI7RUFDQSxlQUFBO0FBbEJqQjtBQW9CaUI7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWxCcEI7QUFtQm9CO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtBQWpCeEI7QUFvQmlCO0VBQ0csZUFBQTtBQWxCcEI7QUFvQmlCO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFsQnBCO0FBbUJvQjtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7QUFqQnhCO0FBb0JpQjtFQUVHLDBCQUFBO0FBbkJwQjtBQXFCaUI7RUFXSSxhQUFBO0FBN0JyQjtBQW1Cb0I7RUFDSSxnQkFBQTtBQWpCeEI7QUFvQnFCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFsQnpCO0FBc0JxQjtFQUNJLGVBQUE7RUFDRCxnQkFBQTtFQUNBLGlCQUFBO0FBcEJ4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgXFxuJHdpZHRoOjM1MHB4O1xcbmJvZHl7XFxuICAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIFxcbiAgICBcXG59XFxuaGVhZGVye1xcbiBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDsgICBcXG4gICAgcGFkZGluZzogMnZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICNzdW57XFxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogLTclO1xcbiAgICAgICAgbGVmdDogMTMlO1xcbiAgICB9XFxuICAgICN0aXRsZTpob3ZlcntcXG4gICAgICAgIGNvbG9yOiAjRkZENzAwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgICN0aXRsZXtcXG4gICAgICAgIFxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICAgICAgdG9wOiAtMTUlO1xcbiAgICB9XFxuICAgIC5zZWFyY2hCYXJ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB9XFxuICAgICNzZWFyY2hMYWJlbHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgfVxcbiAgICAjc2VhcmNoe1xcbiAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgICAgICBoZWlnaHQ6IDJ2aDtcXG4gICAgICAgICBcXG4gICAgfVxcbiAgICAjc2VhcmNoOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgICNlbnRlcntcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHdpZHRoOiA1dnc7XFxuICAgICAgICBoZWlnaHQ6IDN2aDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdGRkY7XFxuICAgIH1cXG4gICAgI2VudGVyOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3QjE2OTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAjcmFuZG9tOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3QjE2OTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAjcmFuZG9te1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDV2dztcXG4gICAgICAgIGhlaWdodDogM3ZoO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0ZGRjtcXG4gICAgfVxcbiAgICAgLnNpZGViYXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA4MDAwO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgfVxcbn1cXG4jbWlke1xcbiAgICBcXG4gICAgICAgI2NhcmRCdXR0b25ze1xcbiAgICAgICAgXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDczJTtcXG4gICAgICAgIGxlZnQ6IDQ3JTtcXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdGRkY7XFxuICAgICAgICAgICAgd2lkdGg6IDF2dztcXG4gICAgICAgICAgICBoZWlnaHQ6IDJ2aDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Q0I0RUU7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgICB9XFxuICAgICNsZWZ0QXJyb3c6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgI3JpZ2h0QXJyb3c6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgI2xlZnRBcnJvd3tcXG4gICAgICAgIHRvcDogNDAlO1xcbiAgICAgICAgbGVmdDogMjAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIH1cXG4gICAgICAjcmlnaHRBcnJvd3tcXG4gICAgICAgICAgdG9wOiA0MCU7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICAgICAgICBsZWZ0OiA3MCU7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgIFxcbiBcXG4gICAgI3dyYXB7XFxuICAgICAgXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAgICAgICAgIFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyNXB4IC00cHggcmdiYSgwLDAsMCwxKTtcXG4gICAgICAgIC8vYW5pbWF0aW9uOiBhbmkgNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICBcXG4gICAgICBcXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgXFxuICAgICAjY29udGVudHtcXG4gICAgICBcXG4gICAgICAgXFxuICAgICAgICAgI2RpdldyYXB7IFxcbiAgICAgICAgICAgd2lkdGg6IDI4dnc7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW47XFxuICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICAgI2NhcmR7XFxuICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMHZ3O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjazsgXFxuICAgICAgICAgICAgICAgICAjdGVtcEJ0bjpob3ZlcnsgXFxuICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAjdGVtcEJ0bntcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjM0cHg7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4IDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICAgICAgICAgICAgICAgICAgICAjY2FyZGJ0bntcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgI3dpbmRCdG46aG92ZXJ7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAjd2luZEJ0bntcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjM0cHg7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4IDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICAgICAgICAgICAgICAgICAgICAjY2FyZGJ0bjJ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgLmFjdGl2ZXtcXG4gICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgydncpO1xcbiAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgLmxhYmVse1xcbiAgICAgICAgICAgICAgICAgICAgLnRlbXB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJ2dztcXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVse1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDF2dztcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgfVxcbiAgICAgICAgIH1cXG4gICAgICAgXFxuICAgICB9XFxuICAgIFxcbiAgICAgIFxcbiAgICAgIFxcbiAgICAgXFxuIH1cXG4gXFxufVxcbiBcXG4gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgUmFuZG9tQ2l0eSBmcm9tICcuL3JhbmRvbSc7XG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSAnLi9yZXRyaWV2ZSc7XG5sZXQgY291bnQgPSAwXG5sZXQgdncgPTMyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpXG5jb25zdCBjYXJkQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkQnV0dG9ucycpXG5jb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEFycm93JylcbmNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHRBcnJvdycpXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTsgICBcbmNvbnN0IGVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyJyk7XG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5jb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJylcbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgbGV0IGNvdW50ID0gZGl2V3JhcC5jaGlsZEVsZW1lbnRDb3VudFxuICBjb25zb2xlLmxvZyhjb3VudClcbiAgaWYoZGl2V3JhcC5jaGlsZEVsZW1lbnRDb3VudCA+PTEpe1xuICAgIGRpdldyYXAucmVtb3ZlKClcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpdldyYXAnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGxlZnRBcnJvdy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICByaWdodEFycm93LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgIGNhcmRCdG5zLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICB9ICBcbiAgIGdldFdlYXRoZXIoUmFuZG9tQ2l0eSgpKTtcbn0pXG5nZXRXZWF0aGVyKFJhbmRvbUNpdHkoKSlcbmdldFdlYXRoZXIoUmFuZG9tQ2l0eSgpKVxuZ2V0V2VhdGhlcihSYW5kb21DaXR5KCkpXG5nZXRXZWF0aGVyKFJhbmRvbUNpdHkoKSlcbmdldFdlYXRoZXIoUmFuZG9tQ2l0eSgpKVxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywoZSk9PntcbiAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGVudGVyLmNsaWNrKClcbiAgfVxufSlcblxuIGVudGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgXG4gIGNvbnN0IGRpdldyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2V3JhcCcpXG4gIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIGxldCBjb3VudCA9IGRpdldyYXAuY2hpbGRFbGVtZW50Q291bnRcbiAgY29uc29sZS5sb2coY291bnQpXG4gIGlmKGRpdldyYXAuY2hpbGRFbGVtZW50Q291bnQgPj0xKXtcbiAgICBkaXZXcmFwLnJlbW92ZSgpXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdkaXZXcmFwJylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdilcbiAgICBsZWZ0QXJyb3cuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgcmlnaHRBcnJvdy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICBjYXJkQnRucy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgfSAgXG4gICBnZXRXZWF0aGVyKHNlYXJjaC52YWx1ZSk7XG4gICAgc2VhcmNoLnZhbHVlID0gJydcblxuIH0pO1xuIFxuIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gIHZ3ID0gMzFcbiAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgIGlmKGNvdW50ID09IDApe1xuICAgIHZ3ID0gdncqY291bnRcbiAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCBcbiAgIH1lbHNle1xuICAgIGNvdW50KytcbiAgICB2dyA9IGNvdW50KnZ3XG4gICAgY29uc29sZS5sb2codncpXG4gICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgXG4gICB9XG4gICBjbGVhckludGVydmFsKGludGVydmFsKVxuICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgICAgIGxldCB2dyA9IDMxXG4gICAgICBpZihjb3VudCA9PSAtNCl7IGNvdW50ID0gMFxuICAgICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIFxuICAgICAgfVxuICAgICAgZWxzZSB7Y291bnQtLVxuICAgICAgdncgPSB2dypjb3VudFxuICAgICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgfVxuICAgICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXInKTtcbiAgICAgICBcbiAgIH0sNTAwMClcbiB9KVxuIHJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gIHZ3ID0gMzFcbiAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgaWYoY291bnQgPT0gLTQpe1xuICAgIGNvdW50ID0gMFxuICAgIHZ3ID0gdncgKiBjb3VudFxuICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIFxuICB9ZWxzZXtcbiAgICBjb3VudC0tXG4gIHZ3ID0gdncgKiBjb3VudFxuICBjb25zb2xlLmxvZyh2dylcbiAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgXG4gIH1cbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgIGNvbnN0IGRpdldyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2V3JhcCcpXG4gICAgICBsZXQgdncgPSAzMVxuICAgICAgaWYoY291bnQgPT0gLTQpeyBjb3VudCA9IDBcbiAgICAgICAgdncgPSB2dypjb3VudFxuICAgICAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCBcbiAgICAgIH1cbiAgICAgIGVsc2Uge2NvdW50LS1cbiAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIH1cbiAgICAgIGNvbnN0IGVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyJyk7XG4gICAgICAgXG4gICB9LDUwMDApXG4gfSlcbiBjb25zdCBjYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkMScpXG4gY29uc3QgY2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZDInKVxuIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQzJylcbiBjb25zdCBjYXJkNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkNCcpXG4gY29uc3QgY2FyZDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZDUnKVxuIGNhcmQxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwdncpJ1xuICBjbGVhckludGVydmFsKGludGVydmFsKVxuICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgICAgIGxldCB2dyA9IDMxXG4gICAgICBpZihjb3VudCA9PSAtNCl7IGNvdW50ID0gMFxuICAgICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIFxuICAgICAgfVxuICAgICAgZWxzZSB7Y291bnQtLVxuICAgICAgdncgPSB2dypjb3VudFxuICAgICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgfVxuICAgICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXInKTtcbiAgICAgICBcbiAgIH0sNTAwMClcbiAgIGNvdW50ID0gMFxuIH0pXG4gY2FyZDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0zMXZ3KSdcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgIGNvbnN0IGRpdldyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2V3JhcCcpXG4gICAgICBsZXQgdncgPSAzMVxuICAgICAgaWYoY291bnQgPT0gLTQpeyBjb3VudCA9IDBcbiAgICAgICAgdncgPSB2dypjb3VudFxuICAgICAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCBcbiAgICAgIH1cbiAgICAgIGVsc2Uge2NvdW50LS1cbiAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIH1cbiAgICAgIGNvbnN0IGVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyJyk7XG4gICAgICAgXG4gICB9LDUwMDApXG4gICBjb3VudCA9IC0xXG4gfSlcbiBjYXJkMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gIGNvbnN0IGRpdldyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2V3JhcCcpXG4gIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTYydncpJ1xuICBjbGVhckludGVydmFsKGludGVydmFsKVxuICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgICAgIGxldCB2dyA9IDMxXG4gICAgICBpZihjb3VudCA9PSAtNCl7IGNvdW50ID0gMFxuICAgICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIFxuICAgICAgfVxuICAgICAgZWxzZSB7Y291bnQtLVxuICAgICAgdncgPSB2dypjb3VudFxuICAgICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgfVxuICAgICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXInKTtcbiAgICAgICBcbiAgIH0sNTAwMClcbiAgIGNvdW50ID0gLTJcbiB9KVxuIGNhcmQ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtOTJ2dyknXG4gIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICAgICAgbGV0IHZ3ID0gMzFcbiAgICAgIGlmKGNvdW50ID09IC00KXsgY291bnQgPSAwXG4gICAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgXG4gICAgICB9XG4gICAgICBlbHNlIHtjb3VudC0tXG4gICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCB9XG4gICAgICBjb25zdCBlbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlcicpO1xuICAgICAgIFxuICAgfSw1MDAwKVxuICAgY291bnQgPSAtM1xuIH0pXG4gY2FyZDUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMjN2dyknXG4gIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICAgICAgbGV0IHZ3ID0gMzFcbiAgICAgIGlmKGNvdW50ID09IC00KXsgY291bnQgPSAwXG4gICAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgXG4gICAgICB9XG4gICAgICBlbHNlIHtjb3VudC0tXG4gICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCB9XG4gICAgICBjb25zdCBlbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlcicpO1xuICAgICAgIFxuICAgfSw1MDAwKVxuICAgY291bnQgPSAtNFxuIH0pXG4gdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgICBsZXQgdncgPSAzMVxuICAgIGlmKGNvdW50ID09IC00KXsgY291bnQgPSAwXG4gICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCBcbiAgICB9XG4gICAgZWxzZSB7Y291bnQtLVxuICAgIHZ3ID0gdncqY291bnRcbiAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCB9XG4gICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXInKTtcbiAgICAgXG4gfSw1MDAwKVxuIFxuIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICBkaXZXcmFwLnJlbW92ZSgpXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdkaXZXcmFwJylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdilcbiAgbGVmdEFycm93LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgcmlnaHRBcnJvdy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gIGNhcmRCdG5zLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgZ2V0V2VhdGhlcihSYW5kb21DaXR5KCkpXG5nZXRXZWF0aGVyKFJhbmRvbUNpdHkoKSlcbmdldFdlYXRoZXIoUmFuZG9tQ2l0eSgpKVxuZ2V0V2VhdGhlcihSYW5kb21DaXR5KCkpXG5nZXRXZWF0aGVyKFJhbmRvbUNpdHkoKSlcbmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgICBsZXQgdncgPSAzMVxuICAgIGlmKGNvdW50ID09IC00KXsgY291bnQgPSAwXG4gICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCBcbiAgICB9XG4gICAgZWxzZSB7Y291bnQtLVxuICAgIHZ3ID0gdncqY291bnRcbiAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCB9XG4gICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXInKTtcbiAgICAgXG4gfSw1MDAwKVxuIH1cbilcbiBcbiBcbiIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5kb21DaXR5KCl7XG4gICAgY29uc3QgY2l0aWVzID0gWydUb2t5bycsJ0RlbGhpJywnU2hhbmdoYWknLCdMb3MgQW5nZWxlcycsJ1PDo28gUGF1bG8nLCdNZXhpY28gQ2l0eScsJ0NhaXJvJywnRGhha2EnLCdNdW1iYWknLCdCZWlqaW5nJywnT3Nha2EnLCdXYXNoaW5ndG9uIEQuQycsJ1RhbXBhJywnRGVudmVyJywnVG9yYW50bycsJ1R1emxhJywnTG9uZG9uJywnTmV3IFlvcmsnLCdOZXcgSmVyc2V5JywnTGltYScsJ0hvIENoaSBNaW5oJywnSmluYW4nLCdCYWdoZGFkJywnQm9nb3RhJywnQmVuZ2FsdXJ1JywnUGFyaXMnLCdWaWVubmEnLCdTeWRuZXknLCdCdWVub3MgQWlyZXMnLCdTYW50aWFnbycsJ1RlaHJhbicgXVxuICAgIGNvbnN0IGNpdHlMZW5ndGggPSBjaXRpZXMubGVuZ3RoXG4gICAgcmV0dXJuIGNpdGllc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqY2l0eUxlbmd0aCldXG59IiwiLyogZXNsaW50LWRpc2FibGUgbm8tY2FzZS1kZWNsYXJhdGlvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuY2xhc3MgY2l0eVdlYXRoZXJ7XG4gICAgY29uc3RydWN0b3IoY2l0eSxzdGF0ZSwgY291bnRyeSwgdGVtcEYsdGVtcEMsY29uZGl0aW9uLCB3aW5kTVBILHdpbmRLUEgpe1xuICAgICAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG4gICAgICAgIHRoaXMudGVtcEYgPSB0ZW1wRjtcbiAgICAgICAgdGhpcy50ZW1wQyA9IHRlbXBDO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9Y29uZGl0aW9uO1xuICAgICAgICB0aGlzLndpbmRNUEggPSB3aW5kTVBIO1xuICAgICAgICB0aGlzLndpbmRLUEggPSB3aW5kS1BIO1xuICAgIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpeyAgICAgXG4gICAgdHJ5e1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9Mjk4YmY2YzNiNDNiNGE1NTg3NTE5MTU0ODIzMDIxMSZxPSR7Y2l0eX1gLHttb2RlOidjb3JzJ30pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBjb25zdCBvYmplY3QgPSBuZXcgY2l0eVdlYXRoZXIoZGF0YS5sb2NhdGlvbi5uYW1lLGRhdGEubG9jYXRpb24ucmVnaW9uLGRhdGEubG9jYXRpb24uY291bnRyeSxkYXRhLmN1cnJlbnQudGVtcF9mLGRhdGEuY3VycmVudC50ZW1wX2MsZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LGRhdGEuY3VycmVudC53aW5kX21waCxkYXRhLmN1cnJlbnQud2luZF9rcGgpO1xuICAgIGNvbnNvbGUubG9nKG9iamVjdCk7XG4gICAgYnVpbGRXZWF0aGVyKG9iamVjdCk7XG4gICAgfWNhdGNoKGVycil7XG4gICAgICAgIGFsZXJ0KCdOb3QgYSByZWFsIGNpdHknKTtcbiAgICAgICAgXG4gICAgfVxuICAgICBcbiAgXG59XG5leHBvcnQgZnVuY3Rpb24gYnVpbGRXZWF0aGVyKG9iamVjdCl7XG4gICBcbiAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsJ2NhcmQnKTtcbiAgIFxuICAgIGZvcihsZXQgaSA9IDA7aTw4O2krKyl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnPHN2ZyBpZD1cImNhcmRidG5cIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDMwIDMwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+IDxjaXJjbGUgY3g9XCIxNVwiIGN5PVwiMTVcIiByPVwiMTVcIiBmaWxsPVwiIzMyNkJGRlwiLz48L3N2Zz4nXG4gICAgICAgICAgICAgICAgY29uc3QgYnV0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICAgICAgYnV0bi5pbm5lckhUTUwgPSAnPHN2ZyBpZD1cImNhcmRidG4yXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgdmlld0JveD1cIjAgMCAzMCAzMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiA8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjE1XCIgcj1cIjE1XCIgZmlsbD1cIiMzMjZCRkZcIi8+PC9zdmc+J1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc3dpdGNoKGkpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTsgICBcbiAgICAgICAgICAgICAgICBoMi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjaXR5Jyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdjaXR5Jyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0NpdHk6ICc7XG4gICAgICAgICAgICAgICAgaDIuaW5uZXJIVE1MID0gb2JqZWN0LmNpdHk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYob2JqZWN0LmNvdW50cnkgPT0gJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYScpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnc3RhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaDMuc2V0QXR0cmlidXRlKCduYW1lJywnc3RhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3N0YXRlJylcbiAgICAgICAgICAgICAgICAgICAgaDMuaW5uZXJIVE1MID0gb2JqZWN0LnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSAnU3RhdGU6JztcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGgzKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1lbHNlIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2NvdW50cnknKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY291bnRyeScpXG4gICAgICAgICAgICAgICAgaDQuc2V0QXR0cmlidXRlKCduYW1lJywnY291bnRyeScpO1xuICAgICAgICAgICAgICAgIGg0LmlubmVySFRNTCA9IG9iamVjdC5jb3VudHJ5O1xuICAgICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdDb3VudHJ5Oic7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDQpO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwLnNldEF0dHJpYnV0ZSgnbmFtZScsJ0YnKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ0YnKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndGVtcCcpXG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCd0ZW1wQnRuJylcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkYnRuJylcbiAgICAgICAgICAgICAgICAgICAgaWYoc3ZnLmhhc0F0dHJpYnV0ZSgnY2xhc3MnLCdhY3RpdmUnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3RyYW5zZm9ybTp0cmFuc2xhdGVYKDB2dyk7JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJywnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gb2JqZWN0LnRlbXBGO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0Y8c3VwPm88L3N1cD4nXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3RyYW5zZm9ybTp0cmFuc2xhdGVYKDJ2dyk7JylcbiAgICAgICAgICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBvYmplY3QudGVtcEM7XG4gICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdDPHN1cD5vPC9zdXA+J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgIFxuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gb2JqZWN0LnRlbXBGO1xuICAgICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdGPHN1cD5vPC9zdXA+J1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuICAgICAgICAgICAgICAgIGlmKHdyYXBwZXIuY2hpbGRFbGVtZW50Q291bnQ9PTApe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pfVxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBwLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2NvbmRpdGlvbicpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnY29uZGl0aW9uJyk7XG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBvYmplY3QuY29uZGl0aW9uO1xuICAgICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdDb25kaXRpb246JztcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBwLnNldEF0dHJpYnV0ZSgnbmFtZScsJ21waCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbXBoJyk7XG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBvYmplY3Qud2luZE1QSDtcbiAgICAgICAgICAgICAgICBidXRuLnNldEF0dHJpYnV0ZSgnaWQnLCd3aW5kQnRuJylcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBidXRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdmcyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRidG4yJylcbiAgICAgICAgICAgICAgICAgICAgaWYoc3ZnMi5oYXNBdHRyaWJ1dGUoJ2NsYXNzJywnYWN0aXZlJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywndHJhbnNmb3JtOnRyYW5zbGF0ZVgoMHZ3KTsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnMi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJywnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdXaW5kIE1QSCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gb2JqZWN0LndpbmRNUEhcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2ZzIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgIHN2ZzIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3RyYW5zZm9ybTp0cmFuc2xhdGVYKDJ2dyk7JylcbiAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gXCJXaW5kIEtQSFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IG9iamVjdC53aW5kS1BIXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSAnV2luZCBNUEg6JztcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmNoaWxkRWxlbWVudENvdW50PT0wKXtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0bil9XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=