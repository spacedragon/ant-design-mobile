'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardFooter = function (_React$Component) {
    (0, _inherits3["default"])(CardFooter, _React$Component);

    function CardFooter() {
        (0, _classCallCheck3["default"])(this, CardFooter);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    CardFooter.prototype.render = function render() {
        var _props = this.props,
            content = _props.content,
            extra = _props.extra,
            styles = _props.styles,
            style = _props.style;

        var contentDom = _react2["default"].isValidElement(content) ? _react2["default"].createElement(
            _reactNative.View,
            { style: { flex: 1 } },
            content
        ) : _react2["default"].createElement(
            _reactNative.Text,
            { style: styles.footerContent },
            content
        );
        var extraDom = _react2["default"].isValidElement(extra) ? _react2["default"].createElement(
            _reactNative.View,
            { style: { flex: 1 } },
            content
        ) : _react2["default"].createElement(
            _reactNative.Text,
            { style: [styles.footerExtra] },
            extra
        );
        return _react2["default"].createElement(
            _reactNative.View,
            { style: [styles.footerWrap, style] },
            contentDom,
            extra ? extraDom : null
        );
    };

    return CardFooter;
}(_react2["default"].Component);

exports["default"] = CardFooter;

CardFooter.defaultProps = {
    style: {}
};
module.exports = exports['default'];