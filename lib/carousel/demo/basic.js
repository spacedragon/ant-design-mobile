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

var BasicCarouselExample = function (_React$Component) {
  (0, _inherits3["default"])(BasicCarouselExample, _React$Component);

  function BasicCarouselExample() {
    (0, _classCallCheck3["default"])(this, BasicCarouselExample);
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
  }

  BasicCarouselExample.prototype.onselectedIndexChange = function onselectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('change to', index);
  };

  BasicCarouselExample.prototype.render = function render() {
    return _react2["default"].createElement(
      _reactNative.View,
      { style: { marginTop: 30 } },
      _react2["default"].createElement(
        _reactNative.View,
        { style: { paddingHorizontal: 15 } },
        _react2["default"].createElement(
          _antdMobile.Carousel,
          { style: styles.wrapper, autoplayTimeout: 2, selectedIndex: 2, autoplay: true, infinite: true, afterChange: this.onselectedIndexChange },
          _react2["default"].createElement(
            _reactNative.View,
            { style: [styles.container, { backgroundColor: 'red' }] },
            _react2["default"].createElement(
              _reactNative.Text,
              null,
              'Carousel 1'
            )
          ),
          _react2["default"].createElement(
            _reactNative.View,
            { style: [styles.container,, { backgroundColor: 'blue' }] },
            _react2["default"].createElement(
              _reactNative.Text,
              null,
              'Carousel 2'
            )
          ),
          _react2["default"].createElement(
            _reactNative.View,
            { style: [styles.container, { backgroundColor: 'yellow' }] },
            _react2["default"].createElement(
              _reactNative.Text,
              null,
              'Carousel 3'
            )
          ),
          _react2["default"].createElement(
            _reactNative.View,
            { style: [styles.container, { backgroundColor: 'black' }] },
            _react2["default"].createElement(
              _reactNative.Text,
              null,
              'Carousel 4'
            )
          ),
          _react2["default"].createElement(
            _reactNative.View,
            { style: [styles.container, { backgroundColor: '#ccc' }] },
            _react2["default"].createElement(
              _reactNative.Text,
              null,
              'Carousel 5'
            )
          )
        ),
        _react2["default"].createElement(
          _reactNative.Text,
          null,
          'Carousel \u6839\u636E\u5185\u5BB9\u81EA\u9002\u5E94\u9AD8\u5EA6'
        )
      )
    );
  };

  return BasicCarouselExample;
}(_react2["default"].Component);

exports["default"] = BasicCarouselExample;

var styles = _reactNative.StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  text: {
    color: '#fff',
    fontSize: 36
  }
});
module.exports = exports['default'];