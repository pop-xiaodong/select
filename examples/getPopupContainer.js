webpackJsonp([13],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_select__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_select_assets_index_less__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_select_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rc_select_assets_index_less__);
throw new Error("Cannot find module \"rc-dialog\"");
throw new Error("Cannot find module \"rc-dialog/assets/index.css\"");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    var _temp, _this, _ret;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      open: false,
      destroy: false
    }, _this.getPopupContainer = function (node) {
      return node.parentNode;
    }, _this.setVisible = function (open) {
      _this.setState({
        open: open
      });
    }, _this.open = function () {
      _this.setVisible(true);
    }, _this.close = function () {
      _this.setVisible(false);
    }, _this.destroy = function () {
      _this.setState({
        destroy: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Test.prototype.render = function render() {
    if (this.state.destroy) {
      return null;
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: this.open },
        'open'
      ),
      '\xA0',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: this.destroy },
        'destroy'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_rc_dialog___default.a,
        { visible: this.state.open, onClose: this.close },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginTop: 20, position: 'relative' } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_select___default.a,
            {
              placeholder: 'placeholder',
              style: { width: 200 },
              getPopupContainer: this.getPopupContainer
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
              { value: '1' },
              '1'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
              { value: '2' },
              '2'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
              { value: '3' },
              '3'
            )
          )
        )
      )
    );
  };

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ })

},[20]);
//# sourceMappingURL=getPopupContainer.js.map