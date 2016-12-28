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

var _antdMobile = require('antd-mobile');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BasicWhiteSpaceExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicWhiteSpaceExample, _React$Component);

    function BasicWhiteSpaceExample() {
        (0, _classCallCheck3["default"])(this, BasicWhiteSpaceExample);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    BasicWhiteSpaceExample.prototype.render = function render() {
        return _react2["default"].createElement(
            _reactNative.View,
            null,
            _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'xs' }),
            _react2["default"].createElement(
                _antdMobile.WingBlank,
                null,
                _react2["default"].createElement(
                    _antdMobile.Button,
                    { type: 'primary' },
                    '\u4E0A\u4E0B\u7559\u767Dxs'
                )
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'xs' }),
            _react2["default"].createElement(_reactNative.View, { style: {
                    borderBottomColor: '#108ee9',
                    borderBottomWidth: 0.5
                } }),
            _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'sm' }),
            _react2["default"].createElement(
                _antdMobile.WingBlank,
                null,
                _react2["default"].createElement(
                    _antdMobile.Button,
                    { type: 'primary' },
                    '\u4E0A\u4E0B\u7559\u767Dsm'
                )
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'sm' }),
            _react2["default"].createElement(_reactNative.View, { style: {
                    borderBottomColor: '#108ee9',
                    borderBottomWidth: 0.5
                } }),
            _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'md' }),
            _react2["default"].createElement(
                _antdMobile.WingBlank,
                null,
                _react2["default"].createElement(
                    _antdMobile.Button,
                    { type: 'primary' },
                    '\u4E0A\u4E0B\u7559\u767Dmd(\u9ED8\u8BA4)'
                )
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'md' }),
            _react2["default"].createElement(_reactNative.View, { style: {
                    borderBottomColor: '#108ee9',
                    borderBottomWidth: 0.5
                } }),
            _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
            _react2["default"].createElement(
                _antdMobile.WingBlank,
                null,
                _react2["default"].createElement(
                    _antdMobile.Button,
                    { type: 'primary' },
                    '\u4E0A\u4E0B\u7559\u767Dlg'
                )
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
            _react2["default"].createElement(_reactNative.View, { style: {
                    borderBottomColor: '#108ee9',
                    borderBottomWidth: 0.5
                } }),
            _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'xl' }),
            _react2["default"].createElement(
                _antdMobile.WingBlank,
                null,
                _react2["default"].createElement(
                    _antdMobile.Button,
                    { type: 'primary' },
                    '\u4E0A\u4E0B\u7559\u767Dxl'
                )
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'xl' }),
            _react2["default"].createElement(_reactNative.View, { style: {
                    borderBottomColor: '#108ee9',
                    borderBottomWidth: 0.5
                } })
        );
    };

    return BasicWhiteSpaceExample;
}(_react2["default"].Component);

exports["default"] = BasicWhiteSpaceExample;
module.exports = exports['default'];