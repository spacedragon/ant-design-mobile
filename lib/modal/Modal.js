'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _Modal = require('rc-dialog/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AntmModal = function (_React$Component) {
    (0, _inherits3["default"])(AntmModal, _React$Component);

    function AntmModal() {
        (0, _classCallCheck3["default"])(this, AntmModal);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.onMaskClose = function () {
            if (_this.props.maskClosable && _this.props.onClose) {
                _this.props.onClose();
            }
        };
        return _this;
    }

    AntmModal.prototype.render = function render() {
        var _props = this.props,
            title = _props.title,
            closable = _props.closable,
            footer = _props.footer,
            children = _props.children,
            style = _props.style,
            animateAppear = _props.animateAppear,
            transparent = _props.transparent,
            visible = _props.visible,
            onClose = _props.onClose,
            bodyStyle = _props.bodyStyle,
            onAnimationEnd = _props.onAnimationEnd,
            styles = _props.styles;

        var btnGroupStyle = styles.buttonGroupV;
        var horizontalFlex = {};
        if (footer && footer.length === 2) {
            btnGroupStyle = styles.buttonGroupH;
            horizontalFlex = { flex: 1 };
        }
        var buttonWrapStyle = footer && footer.length === 2 ? styles.buttnWrapH : styles.buttnWrapV;
        var footerDom = footer && footer.length ? _react2["default"].createElement(
            _reactNative.View,
            { style: [btnGroupStyle, styles.footerRadius] },
            footer.map(function (button, i) {
                var buttonStyle = {};
                if (button.style) {
                    buttonStyle = button.style;
                    if (typeof buttonStyle === 'string') {
                        var styleMap = {
                            'cancel': { fontWeight: 'bold' },
                            'default': {},
                            'destructive': { color: 'red' }
                        };
                        buttonStyle = styleMap[buttonStyle] || {};
                    }
                }
                var noneBorder = footer && footer.length === 2 && i === 1 ? { borderRightWidth: 0 } : {};
                return _react2["default"].createElement(
                    _reactNative.TouchableHighlight,
                    { key: i, style: horizontalFlex, underlayColor: '#ddd', onPress: function onPress() {
                            if (button.onPress) {
                                button.onPress();
                            }
                            if (onClose) {
                                onClose();
                            }
                        } },
                    _react2["default"].createElement(
                        _reactNative.View,
                        { style: [buttonWrapStyle, noneBorder] },
                        _react2["default"].createElement(
                            _reactNative.Text,
                            { style: [styles.buttonText, buttonStyle] },
                            button.text || '\u6309\u94AE' + i
                        )
                    )
                );
            })
        ) : null;
        var animType = this.props.animationType;
        if (transparent) {
            if (animType === 'slide') {
                animType = 'slide-up';
            }
            return _react2["default"].createElement(
                _Modal2["default"],
                { onClose: this.onMaskClose, animationType: animType, wrapStyle: transparent ? styles.container : undefined, style: [styles.innerContainer, style], visible: visible, onAnimationEnd: onAnimationEnd, animateAppear: animateAppear },
                _react2["default"].createElement(
                    _reactNative.View,
                    null,
                    title ? _react2["default"].createElement(
                        _reactNative.Text,
                        { style: [styles.header] },
                        title
                    ) : null,
                    _react2["default"].createElement(
                        _reactNative.View,
                        { style: [styles.body, bodyStyle] },
                        children
                    ),
                    footer ? _react2["default"].createElement(
                        _reactNative.View,
                        null,
                        footerDom
                    ) : null,
                    closable ? _react2["default"].createElement(
                        _reactNative.View,
                        { style: [styles.closeWrap] },
                        _react2["default"].createElement(
                            _reactNative.TouchableWithoutFeedback,
                            { onPress: onClose },
                            _react2["default"].createElement(
                                _reactNative.View,
                                null,
                                _react2["default"].createElement(
                                    _reactNative.Text,
                                    { style: [styles.close] },
                                    '\xD7'
                                )
                            )
                        )
                    ) : null
                )
            );
        }
        if (animType === 'slide-up' || animType === 'slide-down' || animType === 'slide') {
            animType = 'slide';
        }
        return _react2["default"].createElement(
            _reactNative.Modal,
            { visible: visible, animationType: animType, onRequestClose: this.onMaskClose },
            _react2["default"].createElement(
                _reactNative.View,
                { style: style },
                children
            )
        );
    };

    return AntmModal;
}(_react2["default"].Component);

AntmModal.defaultProps = {
    visible: false,
    closable: false,
    maskClosable: false,
    style: {},
    bodyStyle: {},
    animationType: 'fade',
    onClose: function onClose() {},

    footer: [],
    transparent: false,
    animateAppear: true,
    styles: _index2["default"]
};
exports["default"] = AntmModal;
module.exports = exports['default'];