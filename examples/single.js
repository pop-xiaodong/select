webpackJsonp([6],{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),

/***/ 39:
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






var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    var _temp, _this, _ret;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      destroy: false,
      value: 9
    }, _this.onChange = function (e) {
      var value = void 0;
      if (e && e.target) {
        value = e.target.value;
      } else {
        value = e;
      }
      console.log('onChange', value);
      _this.setState({
        value: value
      });
    }, _this.onDestroy = function () {
      _this.setState({
        destroy: 1
      });
    }, _this.onBlur = function (v) {
      console.log('onBlur', v);
    }, _this.onFocus = function () {
      console.log('onFocus');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Test.prototype.render = function render() {
    if (this.state.destroy) {
      return null;
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: { margin: 20 } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { height: 150 } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Single Select'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { width: 300 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_rc_select___default.a,
          {
            value: this.state.value,
            placeholder: 'placeholder',
            dropdownMenuStyle: { maxHeight: 200 },
            style: { width: 500 },
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            allowClear: true,
            optionLabelProp: 'children',
            optionFilterProp: 'text',
            onChange: this.onChange,
            firstActiveValue: '2',
            backfill: true
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
            { value: '01', text: 'jack', title: 'jack' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                style: {
                  color: 'red'
                }
              },
              'jack'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
            { value: '11', text: 'lucy' },
            'lucy'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
            { value: '21', disabled: true, text: 'disabled' },
            'disabled'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
            { value: '31', text: 'yiminghe' },
            'yiminghe'
          ),
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_rc_select__["Option"],
              { key: i, value: i, text: String(i) },
              i,
              '-text'
            );
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'native select'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'select',
        {
          value: this.state.value,
          style: { width: 500 },
          onChange: this.onChange
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'option',
          { value: '01' },
          'jack'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'option',
          { value: '11' },
          'lucy'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'option',
          { value: '21', disabled: true },
          'disabled'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'option',
          { value: '31' },
          'yiminghe'
        ),
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { value: i, key: i },
            i
          );
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.onDestroy },
          'destroy'
        )
      )
    );
  };

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ })

},[38]);
//# sourceMappingURL=single.js.map