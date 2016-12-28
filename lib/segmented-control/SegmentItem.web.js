'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _rcTouchable = require('rc-touchable');

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SegmentItem = function (_React$Component) {
    (0, _inherits3["default"])(SegmentItem, _React$Component);

    function SegmentItem() {
        (0, _classCallCheck3["default"])(this, SegmentItem);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    SegmentItem.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            label = _props.label,
            prefixCls = _props.prefixCls,
            selected = _props.selected,
            disabled = _props.disabled,
            tintColor = _props.tintColor,
            activeStyle = _props.activeStyle;

        var restProps = (0, _objectAssign2["default"])({}, this.props);
        ['prefixCls', 'label', 'selected', 'tintColor', 'disabled', 'activeStyle'].forEach(function (prop) {
            if (restProps.hasOwnProperty(prop)) {
                delete restProps[prop];
            }
        });
        var itemCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-item', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-item-selected', selected), _classNames));
        return _react2["default"].createElement(
            _rcTouchable2["default"],
            { disabled: disabled, activeClassName: prefixCls + '-item-active', activeStyle: activeStyle },
            _react2["default"].createElement(
                'div',
                (0, _extends3["default"])({ className: itemCls, style: {
                        color: selected ? '#fff' : tintColor,
                        backgroundColor: selected ? tintColor : '#fff',
                        borderColor: tintColor
                    } }, restProps),
                _react2["default"].createElement('div', { className: prefixCls + '-item-inner' }),
                label
            )
        );
    };

    return SegmentItem;
}(_react2["default"].Component);

SegmentItem.defaultProps = {
    onClick: function onClick() {},

    selected: false
};
exports["default"] = SegmentItem;
module.exports = exports['default'];