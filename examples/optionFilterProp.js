webpackJsonp([9],{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"react\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_select__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rc_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_select_assets_index_less__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_select_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_select_assets_index_less__);
throw new Error("Cannot find module \"react-dom\"");
/* eslint no-console: 0 */






function onChange(value) {
  console.log('selected ' + value);
}

var c1 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'Select optionFilterProp'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: { width: 300 } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_rc_select___default.a,
      {
        defaultValue: '\u5F20\u4E09',
        style: { width: 500 },
        placeholder: 'placeholder',
        optionFilterProp: 'desc',
        onChange: onChange
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
        { value: '\u5F20\u4E09', desc: '\u5F20\u4E09 zhang san' },
        '\u5F20\u4E09'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
        { value: '\u674E\u56DB', desc: '\u674E\u56DB li si' },
        '\u674E\u56DB'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
        { value: '\u738B\u4E94', desc: '\u738B\u4E94 wang wu' },
        '\u738B\u4E94'
      )
    )
  )
);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(c1, document.getElementById('__react-content'));

/***/ })

},[32]);
//# sourceMappingURL=optionFilterProp.js.map