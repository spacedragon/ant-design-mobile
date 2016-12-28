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

var CardHeader = function (_React$Component) {
    (0, _inherits3["default"])(CardHeader, _React$Component);

    function CardHeader() {
        (0, _classCallCheck3["default"])(this, CardHeader);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    CardHeader.prototype.render = function render() {
        var _props = this.props,
            title = _props.title,
            thumb = _props.thumb,
            thumbStyle = _props.thumbStyle,
            extra = _props.extra,
            style = _props.style,
            styles = _props.styles;

        var titleDom = _react2["default"].isValidElement(title) ? _react2["default"].createElement(
            _reactNative.View,
            { style: { flex: 1 } },
            title
        ) : _react2["default"].createElement(
            _reactNative.Text,
            { style: styles.headerContent },
            title
        );
        var extraDom = _react2["default"].isValidElement(extra) ? _react2["default"].createElement(
            _reactNative.View,
            { style: { flex: 1 } },
            extra
        ) : _react2["default"].createElement(
            _reactNative.Text,
            { style: [styles.headerExtra] },
            extra
        );
        return _react2["default"].createElement(
            _reactNative.View,
            { style: [styles.headerWrap, style] },
            _react2["default"].createElement(
                _reactNative.View,
                { style: [styles.headerTitle] },
                thumb ? _react2["default"].createElement(_reactNative.Image, { source: { uri: thumb }, style: [styles.headerImage, thumbStyle] }) : null,
                titleDom
            ),
            extra ? extraDom : null
        );
    };

    return CardHeader;
}(_react2["default"].Component);

exports["default"] = CardHeader;

CardHeader.defaultProps = {
    thumbStyle: {},
    style: {}
};
module.exports = exports['default'];