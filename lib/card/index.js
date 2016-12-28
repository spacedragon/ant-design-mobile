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

var _CardBody = require('./CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardFooter = require('./CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function (_React$Component) {
    (0, _inherits3["default"])(Card, _React$Component);

    function Card() {
        (0, _classCallCheck3["default"])(this, Card);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Card.prototype.render = function render() {
        var styles = this.props.styles;
        var cardStyle = this.props.full ? styles.full : {};
        return _react2["default"].createElement(
            _reactNative.View,
            { style: [styles.card, cardStyle, this.props.style] },
            _react2["default"].Children.map(this.props.children, function (child) {
                return _react2["default"].cloneElement(child, { styles: styles });
            })
        );
    };

    return Card;
}(_react2["default"].Component);

exports["default"] = Card;

Card.defaultProps = {
    style: {},
    full: false,
    styles: _index2["default"]
};
Card.Header = _CardHeader2["default"];
Card.Body = _CardBody2["default"];
Card.Footer = _CardFooter2["default"];
module.exports = exports['default'];