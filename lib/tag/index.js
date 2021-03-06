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

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Modal = function (_React$Component) {
    (0, _inherits3["default"])(Modal, _React$Component);

    function Modal(props) {
        (0, _classCallCheck3["default"])(this, Modal);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onChange = _this$props.onChange;

            if (disabled) {
                return;
            }
            var isSelect = _this.state.selected;
            _this.setState({
                selected: !isSelect
            }, function () {
                if (onChange) {
                    onChange(!isSelect);
                }
            });
        };
        _this.onTagClose = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
            _this.setState({
                closed: true
            }, _this.props.afterClose);
        };
        _this.onPressIn = function () {
            var styles = _this.props.styles;
            _this.closeDom.setNativeProps({
                style: [styles.close, _reactNative.Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid, {
                    backgroundColor: '#888'
                }]
            });
        };
        _this.onPressOut = function () {
            var styles = _this.props.styles;
            _this.closeDom.setNativeProps({
                style: [styles.close, _reactNative.Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid]
            });
        };
        _this.state = {
            selected: props.selected,
            closed: false
        };
        return _this;
    }

    Modal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.selected !== nextProps.selected) {
            this.setState({
                selected: nextProps.selected
            });
        }
    };

    Modal.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            disabled = _props.disabled,
            small = _props.small,
            closable = _props.closable,
            styles = _props.styles,
            style = _props.style;

        var selected = this.state.selected;
        var wrapStyle = void 0;
        var textStyle = void 0;
        if (!selected && !disabled) {
            wrapStyle = styles.normalWrap;
            textStyle = styles.normalText;
        }
        if (selected && !disabled) {
            wrapStyle = styles.activeWrap;
            textStyle = styles.activeText;
        }
        if (disabled) {
            wrapStyle = styles.disabledWrap;
            textStyle = styles.disabledText;
        }
        var sizeWrapStyle = small ? styles.wrapSmall : {};
        var sizeTextStyle = small ? styles.textSmall : {};
        return !this.state.closed ? _react2["default"].createElement(
            _reactNative.View,
            { style: [styles.tag, style] },
            _react2["default"].createElement(
                _reactNative.TouchableWithoutFeedback,
                { onPress: this.onClick },
                _react2["default"].createElement(
                    _reactNative.View,
                    { style: [styles.wrap, sizeWrapStyle, wrapStyle] },
                    _react2["default"].createElement(
                        _reactNative.Text,
                        { style: [styles.text, sizeTextStyle, textStyle] },
                        children,
                        ' '
                    )
                )
            ),
            closable && !small && !disabled && _react2["default"].createElement(
                _reactNative.TouchableWithoutFeedback,
                { onPressIn: this.onPressIn, onPressOut: this.onPressOut, onPress: this.onTagClose },
                _react2["default"].createElement(
                    _reactNative.View,
                    { ref: function ref(component) {
                            return _this2.closeDom = component;
                        }, style: [styles.close, _reactNative.Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid] },
                    _react2["default"].createElement(
                        _reactNative.Text,
                        { style: [styles.closeText, _reactNative.Platform.OS === 'android' ? styles.closeTransform : {}] },
                        '\xD7'
                    )
                )
            )
        ) : null;
    };

    return Modal;
}(_react2["default"].Component);

exports["default"] = Modal;

Modal.defaultProps = {
    disabled: false,
    small: false,
    selected: false,
    closable: false,
    onClose: function onClose() {},
    afterClose: function afterClose() {},
    onChange: function onChange() {},

    styles: _index2["default"]
};
module.exports = exports['default'];