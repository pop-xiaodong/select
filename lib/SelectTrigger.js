'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_rcTrigger2['default'].displayName = 'Trigger';

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var SelectTrigger = function (_React$Component) {
  (0, _inherits3['default'])(SelectTrigger, _React$Component);

  function SelectTrigger(props) {
    (0, _classCallCheck3['default'])(this, SelectTrigger);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.saveDropdownMenuRef = (0, _util.saveRef)(_this, 'dropdownMenuRef');
    _this.saveTriggerRef = (0, _util.saveRef)(_this, 'triggerRef');

    _this.state = {
      dropdownWidth: null
    };
    return _this;
  }

  SelectTrigger.prototype.componentDidMount = function componentDidMount() {
    this.setDropdownWidth();
  };

  SelectTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setDropdownWidth();
  };

  SelectTrigger.prototype.render = function render() {
    var _popupClassName;

    var _props = this.props,
        onPopupFocus = _props.onPopupFocus,
        props = (0, _objectWithoutProperties3['default'])(_props, ['onPopupFocus']);
    var multiple = props.multiple,
        visible = props.visible,
        inputValue = props.inputValue,
        dropdownAlign = props.dropdownAlign,
        disabled = props.disabled,
        showSearch = props.showSearch,
        dropdownClassName = props.dropdownClassName,
        dropdownStyle = props.dropdownStyle,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;

    var dropdownPrefixCls = this.getDropdownPrefixCls();
    var popupClassName = (_popupClassName = {}, _popupClassName[dropdownClassName] = !!dropdownClassName, _popupClassName[dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single')] = 1, _popupClassName);
    var popupElement = void 0;
    if (this.props.renderMenu) {
      // const props = this.props;
      // return (
      //   <DropdownMenu
      //     ref={this.saveDropdownMenuRef}
      //     {...newProps}
      //     prefixCls={this.getDropdownPrefixCls()}
      //     onMenuSelect={props.onMenuSelect}
      //     onMenuDeselect={props.onMenuDeselect}
      //     onPopupScroll={props.onPopupScroll}
      //     value={props.value}
      //     backfillValue={props.backfillValue}
      //     firstActiveValue={props.firstActiveValue}
      //     defaultActiveFirstOption={props.defaultActiveFirstOption}
      //     dropdownMenuStyle={props.dropdownMenuStyle}
      //   />
      // );
      popupElement = this.props.renderMenu({
        menuItems: props.options,
        onPopupFocus: onPopupFocus,
        multiple: multiple,
        inputValue: inputValue,
        visible: visible,
        onMenuSelect: props.onMenuSelect,
        onMenuDeselect: props.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        value: props.value,
        item: this
      });
    } else {
      popupElement = this.getDropdownElement({
        menuItems: props.options,
        onPopupFocus: onPopupFocus,
        multiple: multiple,
        inputValue: inputValue,
        visible: visible
      });
    }
    var hideAction = void 0;
    if (disabled) {
      hideAction = [];
    } else if ((0, _util.isSingleMode)(props) && !showSearch) {
      hideAction = ['click'];
    } else {
      hideAction = ['blur'];
    }
    var popupStyle = (0, _extends3['default'])({}, dropdownStyle);
    var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
    if (this.state.dropdownWidth) {
      popupStyle[widthProp] = this.state.dropdownWidth + 'px';
    }

    return _react2['default'].createElement(
      _rcTrigger2['default'],
      (0, _extends3['default'])({}, props, {
        showAction: disabled ? [] : this.props.showAction,
        hideAction: hideAction,
        ref: this.saveTriggerRef,
        popupPlacement: 'bottomLeft',
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        onPopupVisibleChange: props.onDropdownVisibleChange,
        popup: popupElement,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: props.getPopupContainer,
        popupClassName: (0, _classnames2['default'])(popupClassName),
        popupStyle: popupStyle
      }),
      props.children
    );
  };

  return SelectTrigger;
}(_react2['default'].Component);

SelectTrigger.propTypes = {
  onPopupFocus: _propTypes2['default'].func,
  onPopupScroll: _propTypes2['default'].func,
  dropdownMatchSelectWidth: _propTypes2['default'].bool,
  dropdownAlign: _propTypes2['default'].object,
  visible: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  showSearch: _propTypes2['default'].bool,
  dropdownClassName: _propTypes2['default'].string,
  multiple: _propTypes2['default'].bool,
  inputValue: _propTypes2['default'].string,
  filterOption: _propTypes2['default'].any,
  options: _propTypes2['default'].any,
  prefixCls: _propTypes2['default'].string,
  popupClassName: _propTypes2['default'].string,
  children: _propTypes2['default'].any,
  showAction: _propTypes2['default'].arrayOf(_propTypes2['default'].string)
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.setDropdownWidth = function () {
    var width = _reactDom2['default'].findDOMNode(_this2).offsetWidth;
    if (width !== _this2.state.dropdownWidth) {
      _this2.setState({ dropdownWidth: width });
    }
  };

  this.getInnerMenu = function () {
    return _this2.dropdownMenuRef && _this2.dropdownMenuRef.menuRef;
  };

  this.getPopupDOMNode = function () {
    return _this2.triggerRef.getPopupDomNode();
  };

  this.getDropdownElement = function (newProps) {
    var props = _this2.props;
    return _react2['default'].createElement(_DropdownMenu2['default'], (0, _extends3['default'])({
      ref: _this2.saveDropdownMenuRef
    }, newProps, {
      prefixCls: _this2.getDropdownPrefixCls(),
      onMenuSelect: function onMenuSelect(_ref) {
        var p = (0, _objectWithoutProperties3['default'])(_ref, []);

        console.log(p);
        props.onMenuSelect((0, _extends3['default'])({}, p));
      },
      onMenuDeselect: props.onMenuDeselect,
      onPopupScroll: props.onPopupScroll,
      value: props.value,
      backfillValue: props.backfillValue,
      firstActiveValue: props.firstActiveValue,
      defaultActiveFirstOption: props.defaultActiveFirstOption,
      dropdownMenuStyle: props.dropdownMenuStyle
    }));
  };

  this.getDropdownTransitionName = function () {
    var props = _this2.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = _this2.getDropdownPrefixCls() + '-' + props.animation;
    }
    return transitionName;
  };

  this.getDropdownPrefixCls = function () {
    return _this2.props.prefixCls + '-dropdown';
  };
};

exports['default'] = SelectTrigger;


SelectTrigger.displayName = 'SelectTrigger';
module.exports = exports['default'];