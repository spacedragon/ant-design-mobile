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

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function onChange(selected) {
    console.log('tag selected: ' + selected);
}

var BasicTagExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicTagExample, _React$Component);

    function BasicTagExample() {
        (0, _classCallCheck3["default"])(this, BasicTagExample);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    BasicTagExample.prototype.render = function render() {
        return _react2["default"].createElement(
            _reactNative.View,
            { style: { padding: 10 } },
            _react2["default"].createElement(
                _antdMobile.Tag,
                null,
                '\u901A\u7528\u6807\u7B7E'
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, null),
            _react2["default"].createElement(
                _antdMobile.Tag,
                { selected: true },
                '\u9ED8\u8BA4\u9009\u4E2D\u6807\u7B7E'
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, null),
            _react2["default"].createElement(
                _antdMobile.Tag,
                { disabled: true },
                '\u5931\u6548\u6807\u7B7E'
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, null),
            _react2["default"].createElement(
                _antdMobile.Tag,
                { onChange: onChange },
                '\u4E8B\u4EF6\u56DE\u8C03'
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, null),
            _react2["default"].createElement(
                _antdMobile.Tag,
                { closable: true, onClose: function onClose() {
                        console.log('onClose');
                    }, afterClose: function afterClose() {
                        console.log('afterClose');
                    } },
                '\u53EF\u5173\u95ED\u6807\u7B7E'
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, null),
            _react2["default"].createElement(
                _antdMobile.Tag,
                { small: true },
                '\u5C0F\u53F7\u6807\u7B7E'
            )
        );
    };

    return BasicTagExample;
}(_react2["default"].Component);

exports["default"] = BasicTagExample;
module.exports = exports['default'];