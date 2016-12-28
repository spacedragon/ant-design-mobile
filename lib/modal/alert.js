'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports["default"] = function () {
    var title = arguments.length <= 0 ? undefined : arguments[0];
    var content = arguments.length <= 1 ? undefined : arguments[1];
    var actions = (arguments.length <= 2 ? undefined : arguments[2]) || [{ text: '确定' }];
    _rnTopview2["default"].set(_react2["default"].createElement(Alert, { title: title, content: content, actions: actions }));
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rnTopview = require('rn-topview');

var _rnTopview2 = _interopRequireDefault(_rnTopview);

var _reactNative = require('react-native');

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Alert = function (_React$Component) {
    (0, _inherits3["default"])(Alert, _React$Component);

    function Alert(props) {
        (0, _classCallCheck3["default"])(this, Alert);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onAnimationEnd = function (visible) {
            if (!visible) {
                _rnTopview2["default"].remove();
            }
        };
        _this.onClose = function () {
            _this.setState({
                visible: false
            });
        };
        _this.state = {
            visible: true
        };
        return _this;
    }

    Alert.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            title = _props.title,
            actions = _props.actions,
            content = _props.content;

        var footer = actions.map(function (button) {
            var orginPress = button.onPress || function () {};
            button.onPress = function () {
                orginPress();
                _this2.onClose();
            };
            return button;
        });
        return _react2["default"].createElement(
            _Modal2["default"],
            { transparent: true, title: title, visible: this.state.visible, onClose: this.onClose, footer: footer, onAnimationEnd: this.onAnimationEnd },
            _react2["default"].createElement(
                _reactNative.Text,
                null,
                content
            )
        );
    };

    return Alert;
}(_react2["default"].Component);

module.exports = exports['default'];