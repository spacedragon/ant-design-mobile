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

var alert = _antdMobile.Modal.alert;

var BasicModalExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicModalExample, _React$Component);

    function BasicModalExample(props) {
        (0, _classCallCheck3["default"])(this, BasicModalExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.showModal = function () {
            _this.setState({
                visible: true
            });
        };
        _this.showModal2 = function () {
            _this.setState({
                visible2: true
            });
        };
        _this.onClose = function () {
            _this.setState({
                visible: false
            });
        };
        _this.onClose2 = function () {
            _this.setState({
                visible2: false
            });
        };
        _this.state = {
            visible: false,
            visible2: false
        };
        return _this;
    }

    BasicModalExample.prototype.render = function render() {
        return _react2["default"].createElement(
            _reactNative.View,
            { style: { paddingTop: 30, marginTop: 64 } },
            _react2["default"].createElement(
                _antdMobile.WingBlank,
                null,
                _react2["default"].createElement(
                    _antdMobile.Button,
                    { type: 'ghost', onClick: this.showModal },
                    '\u663E\u793A\u5BF9\u8BDD\u6846'
                )
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, null),
            _react2["default"].createElement(
                _antdMobile.WingBlank,
                null,
                _react2["default"].createElement(
                    _antdMobile.Button,
                    { type: 'ghost', onClick: this.showModal2 },
                    '\u663E\u793A\u5168\u5C4F\u5BF9\u8BDD\u6846'
                )
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, null),
            _react2["default"].createElement(
                _antdMobile.WingBlank,
                null,
                _react2["default"].createElement(
                    _antdMobile.Button,
                    { type: 'ghost', onClick: function onClick() {
                            alert('标题', 'alert 内容', [{ text: 'Cancel', onPress: function onPress() {
                                    return console.log('cancel');
                                }, style: 'cancel' }, { text: 'OK', onPress: function onPress() {
                                    return console.log('ok');
                                } }]);
                        } },
                    '\u663E\u793A Modal.alert'
                )
            ),
            _react2["default"].createElement(
                _antdMobile.Modal,
                { transparent: false, visible: this.state.visible2, animationType: 'slide-up' },
                _react2["default"].createElement(
                    _reactNative.View,
                    { style: { paddingVertical: 220 } },
                    _react2["default"].createElement(
                        _reactNative.Text,
                        { style: { textAlign: 'center' } },
                        '\u8FD9\u662F\u5185\u5BB9...'
                    ),
                    _react2["default"].createElement(
                        _reactNative.Text,
                        { style: { textAlign: 'center' } },
                        '\u8FD9\u662F\u5185\u5BB9...'
                    )
                ),
                _react2["default"].createElement(
                    _antdMobile.Button,
                    { type: 'primary', inline: true, onClick: this.onClose2 },
                    'close modal'
                )
            ),
            _react2["default"].createElement(
                _antdMobile.Modal,
                { title: '\u6D4B\u8BD5', transparent: true, onClose: this.onClose, maskClosable: true, visible: this.state.visible, closable: true, footer: [{ text: 'Cancel', onPress: function onPress() {
                            return console.log('cancel');
                        } }, { text: 'Ok', onPress: function onPress() {
                            return console.log('ok');
                        } }] },
                _react2["default"].createElement(
                    _reactNative.View,
                    { style: { paddingVertical: 20 } },
                    _react2["default"].createElement(
                        _reactNative.Text,
                        { style: { textAlign: 'center' } },
                        '\u8FD9\u662F\u5185\u5BB9...'
                    ),
                    _react2["default"].createElement(
                        _reactNative.Text,
                        { style: { textAlign: 'center' } },
                        '\u8FD9\u662F\u5185\u5BB9...'
                    )
                ),
                _react2["default"].createElement(
                    _antdMobile.Button,
                    { type: 'primary', inline: true, onClick: this.onClose },
                    'close modal'
                )
            )
        );
    };

    return BasicModalExample;
}(_react2["default"].Component);

exports["default"] = BasicModalExample;
module.exports = exports['default'];