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

var _index = require('../icon/index.web');

var _index2 = _interopRequireDefault(_index);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _rcTouchable = require('rc-touchable');

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    if (isString(child.type) && isTwoCNChar(child.props.children)) {
        return _react2["default"].cloneElement(child, {}, child.props.children.split('').join(' '));
    }
    if (isString(child)) {
        if (isTwoCNChar(child)) {
            child = child.split('').join(' ');
        }
        return _react2["default"].createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    (0, _inherits3["default"])(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3["default"])(this, Button);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Button.prototype.render = function render() {
        var _wrapCls;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['children', 'className', 'prefixCls', 'type', 'size', 'inline', 'across', 'disabled', 'icon', 'loading', 'activeStyle']),
            _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2),
            _splitObject2$ = _splitObject2[0],
            children = _splitObject2$.children,
            className = _splitObject2$.className,
            prefixCls = _splitObject2$.prefixCls,
            type = _splitObject2$.type,
            size = _splitObject2$.size,
            inline = _splitObject2$.inline,
            across = _splitObject2$.across,
            disabled = _splitObject2$.disabled,
            icon = _splitObject2$.icon,
            loading = _splitObject2$.loading,
            activeStyle = _splitObject2$.activeStyle,
            restProps = _splitObject2[1];

        var wrapCls = (_wrapCls = {}, (0, _defineProperty3["default"])(_wrapCls, className, className), (0, _defineProperty3["default"])(_wrapCls, prefixCls, true), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-primary', type === 'primary'), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-ghost', type === 'ghost'), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-warning', type === 'warning'), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-small', size === 'small'), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-inline', inline), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-across', across), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-disabled', disabled), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-loading', loading), _wrapCls);
        var style = this.props.style;
        var iconType = loading ? 'loading' : icon;
        var kids = _react2["default"].Children.map(children, insertSpace);
        if (iconType) {
            wrapCls[prefixCls + '-icon'] = true;
        }
        // use div, button native is buggy @yiminghe
        return _react2["default"].createElement(
            _rcTouchable2["default"],
            { activeClassName: prefixCls + '-active', disabled: disabled, activeStyle: activeStyle },
            _react2["default"].createElement(
                'a',
                (0, _extends3["default"])({}, restProps, { role: 'button', style: style, className: (0, _classnames2["default"])(wrapCls), disabled: disabled, onClick: disabled ? function () {} : this.props.onClick }),
                iconType ? _react2["default"].createElement(_index2["default"], { type: iconType }) : null,
                kids
            )
        );
    };

    return Button;
}(_react2["default"].Component);

Button.defaultProps = {
    prefixCls: 'am-button',
    size: 'large',
    inline: false,
    across: false,
    disabled: false,
    loading: false
};
exports["default"] = Button;
module.exports = exports['default'];