'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SegmentItem = require('./SegmentItem.web');

var _SegmentItem2 = _interopRequireDefault(_SegmentItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SegmentedControl = function (_React$Component) {
    (0, _inherits3["default"])(SegmentedControl, _React$Component);

    function SegmentedControl(props) {
        (0, _classCallCheck3["default"])(this, SegmentedControl);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            selectedIndex: props.selectedIndex
        };
        return _this;
    }

    SegmentedControl.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.selectedIndex !== this.state.selectedIndex) {
            this.setState({
                selectedIndex: nextProps.selectedIndex
            });
        }
    };

    SegmentedControl.prototype.onClick = function onClick(e, index, value) {
        var _props = this.props,
            disabled = _props.disabled,
            onChange = _props.onChange,
            onValueChange = _props.onValueChange;

        if (!disabled && this.state.selectedIndex !== index) {
            e.nativeEvent.selectedSegmentIndex = index;
            e.nativeEvent.value = value;
            if (onChange) {
                onChange(e);
            }
            if (onValueChange) {
                onValueChange(value);
            }
            this.setState({
                selectedIndex: index
            });
        }
    };

    SegmentedControl.prototype.render = function render() {
        var _this2 = this,
            _classNames;

        var _props2 = this.props,
            prefixCls = _props2.prefixCls,
            style = _props2.style,
            disabled = _props2.disabled,
            _props2$values = _props2.values,
            values = _props2$values === undefined ? [] : _props2$values,
            className = _props2.className,
            tintColor = _props2.tintColor;

        var selectedIndex = this.state.selectedIndex;
        var items = values.map(function (value, idx) {
            return _react2["default"].createElement(_SegmentItem2["default"], { key: idx, prefixCls: prefixCls, label: value, disabled: disabled, tintColor: tintColor, selected: idx === selectedIndex, onClick: disabled ? undefined : function (e) {
                    return _this2.onClick(e, idx, value);
                } });
        });
        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, '' + prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-disabled', disabled), _classNames));
        return _react2["default"].createElement(
            'div',
            { className: wrapCls, style: style },
            items
        );
    };

    return SegmentedControl;
}(_react2["default"].Component);

exports["default"] = SegmentedControl;

SegmentedControl.defaultProps = {
    prefixCls: 'am-segment',
    selectedIndex: 0,
    disabled: false,
    values: [],
    onChange: function onChange() {},
    onValueChange: function onValueChange() {},

    style: {}
};
module.exports = exports['default'];