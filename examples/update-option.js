webpackJsonp([4],{

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),

/***/ 45:
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






function handleChange(value) {
  console.log('selected ' + value);
}

var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test(props) {
    _classCallCheck(this, Test);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.updateLabel = function () {
      _this.setState({
        label: 'newlabel ' + _this.count++
      });
    };

    _this.updateOptions = function (value) {
      var options = [value, value + value, value + value + value];
      _this.setState({
        options: options
      });
    };

    _this.state = {
      label: 'Lucy',
      options: []
    };
    _this.count = 0;
    return _this;
  }

  Test.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      'label: ',
      this.state.label,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_rc_select___default.a,
        {
          defaultValue: 'lucy',
          optionLabelProp: 'children',
          style: { width: 120 },
          onChange: handleChange
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
          { value: 'lucy' },
          this.state.label
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
          { value: 'lucy2' },
          'lucy2'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.updateLabel },
          'upadte option label'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_rc_select___default.a,
        {
          combobox: true,
          optionLabelProp: 'children',
          onChange: this.updateOptions
        },
        this.state.options.map(function (opt) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
            { key: opt },
            opt
          );
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null)
    );
  };

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ })

},[44]);
//# sourceMappingURL=update-option.js.map