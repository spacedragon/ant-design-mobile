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

var FooterButton = function (_React$Component) {
    (0, _inherits3["default"])(FooterButton, _React$Component);

    function FooterButton() {
        (0, _classCallCheck3["default"])(this, FooterButton);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    FooterButton.prototype.render = function render() {
        var _props = this.props,
            button = _props.button,
            prefixCls = _props.prefixCls,
            activeStyle = _props.activeStyle;

        var restProps = (0, _objectAssign2["default"])({}, this.props);
        ['button', 'prefixCls', 'activeStyle'].forEach(function (prop) {
            if (restProps.hasOwnProperty(prop)) {
                delete restProps[prop];
            }
        });
        var wrapCls = (0, _classnames2["default"])((0, _defineProperty3["default"])({}, prefixCls + '-button', true));
        var buttonStyle = {};
        if (button.style) {
            buttonStyle = button.style;
            if (typeof buttonStyle === 'string') {
                var styleMap = {
                    'cancel': { fontWeight: 'bold' },
                    'default': {},
                    'destructive': { color: 'red' }
                };
                buttonStyle = styleMap[buttonStyle] || {};
            }
        }
        return _react2["default"].createElement(
            _rcTouchable2["default"],
            { activeClassName: prefixCls + '-button-active', activeStyle: activeStyle },
            _react2["default"].createElement(
                'a',
                (0, _extends3["default"])({ className: wrapCls, style: buttonStyle, href: '#', onClick: function onClick(e) {
                        e.preventDefault();
                        if (button.onPress) {
                            button.onPress();
                        }
                    } }, restProps),
                button.text || 'Button'
            )
        );
    };

    return FooterButton;
}(_react2["default"].Component);

exports["default"] = FooterButton;
module.exports = exports['default'];