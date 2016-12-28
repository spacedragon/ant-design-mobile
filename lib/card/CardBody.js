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

var CardBody = function (_React$Component) {
    (0, _inherits3["default"])(CardBody, _React$Component);

    function CardBody() {
        (0, _classCallCheck3["default"])(this, CardBody);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    CardBody.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            style = _props.style,
            styles = _props.styles;

        return _react2["default"].createElement(
            _reactNative.View,
            { style: [styles.body, style] },
            children
        );
    };

    return CardBody;
}(_react2["default"].Component);

exports["default"] = CardBody;

CardBody.defaultProps = {
    style: {}
};
module.exports = exports['default'];