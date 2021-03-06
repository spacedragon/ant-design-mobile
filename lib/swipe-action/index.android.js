'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _modal = require('../modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SwipeAction = function (_React$Component) {
    (0, _inherits3["default"])(SwipeAction, _React$Component);

    function SwipeAction(props) {
        (0, _classCallCheck3["default"])(this, SwipeAction);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.hide = function () {
            _this.setState({
                showModal: false
            });
        };
        _this.onLongPress = function () {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onOpen = _this$props.onOpen;

            if (disabled) {
                return;
            }
            if (onOpen) {
                onOpen();
            }
            _this.setState({
                showModal: true
            });
        };
        _this.state = {
            showModal: false
        };
        return _this;
    }

    SwipeAction.prototype.onClose = function onClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
        this.setState({
            showModal: false
        });
    };

    SwipeAction.prototype._renderAndroidModal = function _renderAndroidModal() {
        var _this2 = this;

        var _props = this.props,
            _props$left = _props.left,
            left = _props$left === undefined ? [] : _props$left,
            _props$right = _props.right,
            right = _props$right === undefined ? [] : _props$right,
            autoClose = _props.autoClose;

        var actions = [].concat((0, _toConsumableArray3["default"])(left), (0, _toConsumableArray3["default"])(right)).map(function (button) {
            var orginPress = button.onPress || function () {};
            return {
                text: button.text,
                style: button.style,
                onPress: function onPress() {
                    orginPress();
                    if (autoClose) {
                        _this2.onClose();
                    }
                }
            };
        });
        return _react2["default"].createElement(_modal2["default"], { visible: this.state.showModal, transparent: true, title: this.props.title, onClose: this.hide, footer: actions });
    };

    SwipeAction.prototype.render = function render() {
        var _props2 = this.props,
            style = _props2.style,
            children = _props2.children;

        return _react2["default"].createElement(
            _reactNative.View,
            { style: style },
            _react2["default"].createElement(
                _reactNative.TouchableOpacity,
                { onLongPress: this.onLongPress },
                _react2["default"].createElement(
                    _reactNative.View,
                    null,
                    children
                )
            ),
            this.state.showModal ? this._renderAndroidModal() : null
        );
    };

    return SwipeAction;
}(_react2["default"].Component);

SwipeAction.propTypes = {
    autoClose: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    title: _react.PropTypes.string,
    left: _react.PropTypes.arrayOf(_react.PropTypes.object),
    right: _react.PropTypes.arrayOf(_react.PropTypes.object),
    onOpen: _react.PropTypes.func,
    onClose: _react.PropTypes.func,
    children: _react.PropTypes.any
};
SwipeAction.defaultProps = {
    title: '请确认操作',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen: function onOpen() {},
    onClose: function onClose() {}
};
exports["default"] = SwipeAction;
module.exports = exports['default'];