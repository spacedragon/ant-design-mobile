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

var NoticeBarExample = function (_React$Component) {
  (0, _inherits3["default"])(NoticeBarExample, _React$Component);

  function NoticeBarExample() {
    (0, _classCallCheck3["default"])(this, NoticeBarExample);
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
  }

  NoticeBarExample.prototype.render = function render() {
    return _react2["default"].createElement(
      _reactNative.View,
      { style: { marginTop: 10 } },
      _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
      _react2["default"].createElement(
        _antdMobile.NoticeBar,
        { onClick: function onClick() {
            return alert('click');
          } },
        '\u56FD\u5E86\u671F\u95F4\u4F59\u989D\u5B9D\u6536\u76CA\u548C\u8F6C\u51FA\u5230\u8D26\u65F6\u95F4'
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
      _react2["default"].createElement(
        _antdMobile.NoticeBar,
        { mode: 'closable', onClick: function onClick() {
            return alert('will close');
          } },
        '\u56FD\u5E86\u671F\u95F4\u4F59\u989D\u5B9D\u6536\u76CA\u548C\u8F6C\u51FA\u5230\u8D26\u65F6\u95F41'
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
      _react2["default"].createElement(
        _antdMobile.NoticeBar,
        { mode: 'closable', icon: _react2["default"].createElement(_reactNative.Image, { source: { uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png' }, style: { width: 12, height: 12 } }) },
        '\u81EA\u5B9A\u4E49 NoticeBar \u524D\u9762\u7684\u56FE\u6807'
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
      _react2["default"].createElement(
        _antdMobile.NoticeBar,
        { mode: 'link', onClick: function onClick() {
            return alert('link');
          } },
        '\u56FD\u5E86\u671F\u95F4\u4F59\u989D\u5B9D\u6536\u76CA\u548C\u8F6C\u51FA\u5230\u8D26\u65F6\u95F4'
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
      _react2["default"].createElement(
        _antdMobile.NoticeBar,
        { mode: 'link' },
        '\u56FD\u5E86\u671F\u95F4\u4F59\u989D\u5B9D\u6536\u76CA\u548C\u8F6C\u51FA\u5230\u8D26\u65F6\u95F4'
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
      _react2["default"].createElement(
        _antdMobile.NoticeBar,
        { mode: 'closable', icon: null },
        '\u53BB\u9664 NoticeBar \u9ED8\u8BA4\u7684\u5587\u53ED\u56FE\u6807'
      )
    );
  };

  return NoticeBarExample;
}(_react2["default"].Component);

exports["default"] = NoticeBarExample;
module.exports = exports['default'];