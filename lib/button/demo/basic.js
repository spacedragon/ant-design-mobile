'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = function () {
  return _react2["default"].createElement(
    _reactNative.View,
    null,
    _react2["default"].createElement(_antdMobile.WhiteSpace, null),
    _react2["default"].createElement(
      _antdMobile.WingBlank,
      null,
      _react2["default"].createElement(
        _antdMobile.Button,
        { onClick: function onClick() {
            _reactNative.Alert.alert('Button', 'button clicked');
          } },
        'default button'
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, null),
      _react2["default"].createElement(
        _antdMobile.Button,
        { type: 'primary' },
        'primary button'
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, null),
      _react2["default"].createElement(
        _antdMobile.Button,
        { type: 'warning' },
        'warning button'
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, null),
      _react2["default"].createElement(
        _antdMobile.Button,
        { disabled: true },
        'disable button'
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, null),
      _react2["default"].createElement(
        _antdMobile.Button,
        { activeStyle: false },
        '\u65E0\u70B9\u51FB\u53CD\u9988'
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, null),
      _react2["default"].createElement(
        _antdMobile.Button,
        { activeStyle: { backgroundColor: 'red' } },
        '\u81EA\u5B9A\u4E49\u70B9\u51FB\u53CD\u9988 style'
      )
    ),
    _react2["default"].createElement(
      _antdMobile.WingBlank,
      { style: {
          marginTop: 20,
          flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
        } },
      _react2["default"].createElement(
        _reactNative.Text,
        null,
        '\u5C0F\u6309\u94AE'
      ),
      _react2["default"].createElement(
        _antdMobile.Button,
        { type: 'ghost', size: 'small' },
        'ghost small button'
      )
    )
  );
};

module.exports = exports['default'];