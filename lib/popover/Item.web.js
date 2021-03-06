'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _rcTouchable = require('rc-touchable');

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Item = function (_React$Component) {
    (0, _inherits3["default"])(Item, _React$Component);

    function Item() {
        (0, _classCallCheck3["default"])(this, Item);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Item.prototype.render = function render() {
        var _cls;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['children', 'className', 'prefixCls', 'icon', 'disabled', 'firstItem', 'activeStyle']),
            _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2),
            _splitObject2$ = _splitObject2[0],
            children = _splitObject2$.children,
            className = _splitObject2$.className,
            prefixCls = _splitObject2$.prefixCls,
            icon = _splitObject2$.icon,
            disabled = _splitObject2$.disabled,
            firstItem = _splitObject2$.firstItem,
            activeStyle = _splitObject2$.activeStyle,
            restProps = _splitObject2[1];

        var cls = (_cls = {}, (0, _defineProperty3["default"])(_cls, className, !!className), (0, _defineProperty3["default"])(_cls, prefixCls + '-item', true), (0, _defineProperty3["default"])(_cls, prefixCls + '-item-disabled', disabled), _cls);
        var activeClass = prefixCls + '-item-active ';
        if (firstItem) {
            activeClass += prefixCls + '-item-fix-active-arrow';
        }
        return _react2["default"].createElement(
            _rcTouchable2["default"],
            { disabled: disabled, activeClassName: activeClass, activeStyle: activeStyle },
            _react2["default"].createElement(
                'div',
                (0, _extends3["default"])({ className: (0, _classnames2["default"])(cls) }, restProps),
                icon ? _react2["default"].createElement(
                    'span',
                    { className: prefixCls + '-item-icon' },
                    icon
                ) : null,
                _react2["default"].createElement(
                    'span',
                    { className: prefixCls + '-item-content' },
                    children
                )
            )
        );
    };

    return Item;
}(_react2["default"].Component);

Item.defaultProps = {
    prefixCls: 'am-popover',
    disabled: false
};
Item.myName = 'PopoverItem';
exports["default"] = Item;
module.exports = exports['default'];