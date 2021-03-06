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

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require('./CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardFooter = require('./CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function (_React$Component) {
    (0, _inherits3["default"])(Card, _React$Component);

    function Card() {
        (0, _classCallCheck3["default"])(this, Card);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Card.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            full = _props.full,
            children = _props.children,
            className = _props.className;

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-full', full), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        return _react2["default"].createElement(
            'div',
            { className: wrapCls },
            children
        );
    };

    return Card;
}(_react2["default"].Component);

exports["default"] = Card;

Card.defaultProps = {
    prefixCls: 'am-card',
    full: false
};
Card.Header = _CardHeader2["default"];
Card.Body = _CardBody2["default"];
Card.Footer = _CardFooter2["default"];
module.exports = exports['default'];