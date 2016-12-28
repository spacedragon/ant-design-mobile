'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var messageInstance = void 0;
var prefixCls = 'am-toast';
function getMessageInstance() {
    messageInstance = _rcNotification2["default"].newInstance({
        prefixCls: prefixCls,
        style: { top: 0 },
        transitionName: 'am-fade'
    });
    return messageInstance;
}
function notice(content, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var _onClose = arguments[3];

    var iconType = {
        info: '',
        success: require('./style/assets/success.svg'),
        fail: require('./style/assets/fail.svg'),
        offline: require('./style/assets/dislike.svg'),
        loading: 'loading'
    }[type];
    if (typeof duration === 'function') {
        _onClose = duration;
        duration = 3;
    }
    var instance = getMessageInstance();
    instance.notice({
        duration: duration,
        style: {},
        content: !!iconType ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-text ' + prefixCls + '-text-icon' },
            _react2["default"].createElement(_icon2["default"], { type: iconType, size: 'lg' }),
            _react2["default"].createElement(
                'div',
                { className: prefixCls + '-text-info' },
                content
            )
        ) : _react2["default"].createElement(
            'div',
            { className: prefixCls + '-text' },
            _react2["default"].createElement(
                'div',
                null,
                content
            )
        ),
        onClose: function onClose() {
            if (_onClose) {
                _onClose();
            }
            instance.destroy();
            instance = null;
            messageInstance = null;
        }
    });
}
exports["default"] = {
    SHORT: 3,
    LONG: 8,
    show: function show(content, duration) {
        return notice(content, 'info', duration, function () {});
    },
    info: function info(content, duration, onClose) {
        return notice(content, 'info', duration, onClose);
    },
    success: function success(content, duration, onClose) {
        return notice(content, 'success', duration, onClose);
    },
    fail: function fail(content, duration, onClose) {
        return notice(content, 'fail', duration, onClose);
    },
    offline: function offline(content, duration, onClose) {
        return notice(content, 'offline', duration, onClose);
    },
    loading: function loading(content, duration, onClose) {
        return notice(content, 'loading', duration, onClose);
    },
    hide: function hide() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};
module.exports = exports['default'];