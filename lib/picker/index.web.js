'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Popup = require('rmc-cascader/lib/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _Cascader = require('rmc-cascader/lib/Cascader');

var _Cascader2 = _interopRequireDefault(_Cascader);

var _arrayTreeFilter = require('array-tree-filter');

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getDefaultProps() {
    var defaultFormat = function defaultFormat(values) {
        return values.join(',');
    };
    return {
        prefixCls: 'am-picker',
        pickerPrefixCls: 'am-picker-col',
        popupPrefixCls: 'am-picker-popup',
        format: defaultFormat,
        style: { left: 0, bottom: 0 },
        cols: 3,
        value: [],
        extra: '请选择',
        okText: '确定',
        dismissText: '取消',
        title: ''
    };
}

var Picker = function (_React$Component) {
    (0, _inherits3["default"])(Picker, _React$Component);

    function Picker() {
        (0, _classCallCheck3["default"])(this, Picker);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.getSel = function () {
            var value = _this.props.value || [];
            var treeChildren = (0, _arrayTreeFilter2["default"])(_this.props.data, function (c, level) {
                return c.value === value[level];
            });
            return _this.props.format && _this.props.format(treeChildren.map(function (v) {
                return v.label;
            }));
        };
        return _this;
    }

    Picker.prototype.render = function render() {
        var props = this.props;
        var children = props.children,
            value = props.value,
            extra = props.extra,
            okText = props.okText,
            dismissText = props.dismissText,
            popupPrefixCls = props.popupPrefixCls;

        var cascader = _react2["default"].createElement(_Cascader2["default"], { prefixCls: props.prefixCls, pickerPrefixCls: props.pickerPrefixCls, data: props.data, cols: props.cols, onChange: props.onPickerChange });
        return _react2["default"].createElement(
            _Popup2["default"],
            (0, _extends3["default"])({ cascader: cascader, WrapComponent: 'div', transitionName: 'am-slide-up', maskTransitionName: 'am-fade' }, props, { prefixCls: popupPrefixCls, value: value, dismissText: dismissText, okText: okText }),
            _react2["default"].cloneElement(children, { extra: this.getSel() || extra })
        );
    };

    return Picker;
}(_react2["default"].Component);

exports["default"] = Picker;

Picker.defaultProps = getDefaultProps();
module.exports = exports['default'];