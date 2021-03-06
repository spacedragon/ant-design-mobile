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

var BasicSwipeActionExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicSwipeActionExample, _React$Component);

    function BasicSwipeActionExample() {
        (0, _classCallCheck3["default"])(this, BasicSwipeActionExample);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    BasicSwipeActionExample.prototype.render = function render() {
        return _react2["default"].createElement(
            _reactNative.View,
            { style: { paddingTop: 30 } },
            _react2["default"].createElement(
                _antdMobile.List,
                null,
                _react2["default"].createElement(
                    _antdMobile.SwipeAction,
                    { autoClose: true, style: { backgroundColor: 'transparent' }, right: [{
                            text: 'more',
                            onPress: function onPress() {
                                return console.log('more');
                            },
                            style: _reactNative.Platform.OS === 'ios' ? { backgroundColor: 'orange', color: 'white' } : {}
                        }, {
                            text: 'delete',
                            onPress: function onPress() {
                                return console.log('删除');
                            },
                            style: _reactNative.Platform.OS === 'ios' ? { backgroundColor: 'red', color: 'white' } : {}
                        }], left: [{
                            text: '阅读',
                            onPress: function onPress() {
                                return console.log('阅读');
                            },
                            style: _reactNative.Platform.OS === 'ios' ? { backgroundColor: 'blue', color: 'white' } : {}
                        }, {
                            text: '回复',
                            onPress: function onPress() {
                                return console.log('回复');
                            },
                            style: _reactNative.Platform.OS === 'ios' ? { backgroundColor: 'green', color: 'white' } : {}
                        }], onOpen: function onOpen() {
                            return console.log('open');
                        }, onClose: function onClose() {
                            return console.log('close');
                        } },
                    _react2["default"].createElement(
                        _antdMobile.List.Item,
                        { extra: '\u989D\u5916\u53C2\u6570' },
                        '\u7B80\u5355\u4F8B\u5B50 - \u5DE6\u53F3\u90FD\u53EF\u64CD\u4F5C'
                    )
                )
            )
        );
    };

    return BasicSwipeActionExample;
}(_react2["default"].Component);

exports["default"] = BasicSwipeActionExample;
module.exports = exports['default'];