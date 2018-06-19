webpackJsonp([15],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_select__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_select_assets_index_less__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_select_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rc_select_assets_index_less__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-console: 0 */






var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      disabled: false,
      value: ''
    }, _this.onChange = function (value, option) {
      console.log('onChange', value, option);
      _this.setState({
        value: value
      });
    }, _this.onKeyDown = function (e) {
      if (e.keyCode === 13) {
        console.log('onEnter', _this.state.value);
      }
    }, _this.onSelect = function (v, option) {
      console.log('onSelect', v, option);
    }, _this.toggleDisabled = function () {
      _this.setState({
        disabled: !_this.state.disabled
      });
    }, _this.renderMenu = function () {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        '123'
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Demo.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'combobox'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.toggleDisabled },
          'toggle disabled'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { width: 300 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_rc_select___default.a,
          {
            disabled: this.state.disabled,
            style: { width: 500 },
            onChange: this.onChange,
            onSelect: this.onSelect,
            onInputKeyDown: this.onKeyDown,
            notFoundContent: '',
            allowClear: true,
            placeholder: 'please select',
            value: this.state.value,
            combobox: true,
            backfill: true,
            renderMenu: this.renderMenu
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
            { value: 'jack' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              { style: { color: 'red' } },
              'jack'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
            { value: 'lucy' },
            'lucy'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
            { value: 'disabled', disabled: true },
            'disabled'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
            { value: 'yiminghe' },
            'yiminghe'
          )
        )
      )
    );
  };

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })

},[9]);
//# sourceMappingURL=combobox.js.map