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

var ActivityIndicatorExample = function (_React$Component) {
  (0, _inherits3["default"])(ActivityIndicatorExample, _React$Component);

  function ActivityIndicatorExample(props) {
    (0, _classCallCheck3["default"])(this, ActivityIndicatorExample);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

    _this.state = {
      animating: false
    };
    _this.loadingToast = _this.loadingToast.bind(_this);
    return _this;
  }

  ActivityIndicatorExample.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.closeTimer);
  };

  ActivityIndicatorExample.prototype.loadingToast = function loadingToast() {
    var _this2 = this;

    this.setState({ animating: !this.state.animating });
    this.closeTimer = setTimeout(function () {
      _this2.setState({ animating: !_this2.state.animating });
    }, 2000);
  };

  ActivityIndicatorExample.prototype.render = function render() {
    return _react2["default"].createElement(
      _reactNative.View,
      { style: [styles.demo] },
      _react2["default"].createElement(
        _antdMobile.WingBlank,
        null,
        _react2["default"].createElement(
          _antdMobile.Flex,
          null,
          _react2["default"].createElement(
            _antdMobile.Flex.Item,
            null,
            _react2["default"].createElement(
              _reactNative.Text,
              null,
              'Icon\u65E0\u6587\u6848'
            )
          ),
          _react2["default"].createElement(
            _antdMobile.Flex.Item,
            null,
            _react2["default"].createElement(_antdMobile.ActivityIndicator, null)
          )
        )
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
      _react2["default"].createElement(
        _antdMobile.WingBlank,
        null,
        _react2["default"].createElement(
          _antdMobile.Flex,
          null,
          _react2["default"].createElement(
            _antdMobile.Flex.Item,
            null,
            _react2["default"].createElement(
              _reactNative.Text,
              null,
              'Icon\u5E26\u6587\u6848'
            )
          ),
          _react2["default"].createElement(
            _antdMobile.Flex.Item,
            null,
            _react2["default"].createElement(_antdMobile.ActivityIndicator, { text: '\u6B63\u5728\u52A0\u8F7D...' })
          )
        )
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
      _react2["default"].createElement(
        _antdMobile.WingBlank,
        null,
        _react2["default"].createElement(
          _antdMobile.Flex,
          null,
          _react2["default"].createElement(
            _antdMobile.Flex.Item,
            null,
            _react2["default"].createElement(
              _reactNative.Text,
              null,
              '\u6DF1\u8272\u80CC\u666F'
            )
          ),
          _react2["default"].createElement(
            _antdMobile.Flex.Item,
            null,
            _react2["default"].createElement(
              _reactNative.View,
              { style: [styles.darkBg] },
              _react2["default"].createElement(_antdMobile.ActivityIndicator, { color: '#fff' })
            )
          )
        )
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
      _react2["default"].createElement(
        _antdMobile.WingBlank,
        null,
        _react2["default"].createElement(
          _antdMobile.Flex,
          null,
          _react2["default"].createElement(
            _antdMobile.Flex.Item,
            null,
            _react2["default"].createElement(
              _reactNative.Text,
              null,
              '\u5927\u53F7icon'
            )
          ),
          _react2["default"].createElement(
            _antdMobile.Flex.Item,
            null,
            _react2["default"].createElement(_antdMobile.ActivityIndicator, { size: 'large' })
          )
        )
      ),
      _react2["default"].createElement(_antdMobile.WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
      _react2["default"].createElement(
        _antdMobile.WingBlank,
        null,
        _react2["default"].createElement(
          _antdMobile.Button,
          { type: 'ghost', onClick: this.loadingToast },
          '\u70B9\u51FB\u663E\u793A Toast'
        )
      ),
      _react2["default"].createElement(_antdMobile.ActivityIndicator, { animating: this.state.animating, toast: true, size: 'large', text: '\u6B63\u5728\u52A0\u8F7D' })
    );
  };

  return ActivityIndicatorExample;
}(_react2["default"].Component);

exports["default"] = ActivityIndicatorExample;

var styles = _reactNative.StyleSheet.create({
  demo: {
    marginTop: 20
  },
  darkBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    backgroundColor: '#2B2F42'
  },
  gray: {
    backgroundColor: '#CCC'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8
  }
});
module.exports = exports['default'];