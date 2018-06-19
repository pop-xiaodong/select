webpackJsonp([12],{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"react\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_select__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rc_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_select_assets_index_less__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_select_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_select_assets_index_less__);
throw new Error("Cannot find module \"react-dom\"");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-console: 0 */





var children = [];
for (var i = 10; i < 36; i++) {
  // 11 => readonly selected item
  children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
    { disabled: i === 11, key: i.toString(36) + i },
    '\u4E2D\u6587',
    i
  ));
}

var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    var _temp, _this, _ret;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      value: ['b11']
    }, _this.onChange = function (value) {
      console.log('onChange', value);
      _this.setState({ value: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Test.prototype.render = function render() {
    var dropdownMenuStyle = {
      maxHeight: 200
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'multiple readonly default selected item'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { width: 300 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_rc_select___default.a,
          {
            multiple: true,
            value: this.state.value,
            animation: 'slide-up',
            choiceTransitionName: 'rc-select-selection__choice-zoom',
            dropdownMenuStyle: dropdownMenuStyle,
            style: { width: 500 },
            optionFilterProp: 'children',
            optionLabelProp: 'children',
            placeholder: 'please select',
            onChange: this.onChange
          },
          children
        )
      )
    );
  };

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ })

},[26]);
//# sourceMappingURL=multiple-readonly.js.map