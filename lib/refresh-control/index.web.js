'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rmcListView = require('rmc-list-view');

var _rmcListView2 = _interopRequireDefault(_rmcListView);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function dpr() {
    if (typeof window === 'undefined') {
        return 2;
    } else {
        return window.devicePixelRatio;
    }
}
_rmcListView2["default"].RefreshControl.defaultProps = (0, _objectAssign2["default"])({}, _rmcListView2["default"].RefreshControl.defaultProps, {
    prefixCls: 'am-refresh-control',
    icon: [_react2["default"].createElement(
        'div',
        { key: '0', className: 'am-refresh-control-pull' },
        _react2["default"].createElement(_icon2["default"], { type: 'down' }),
        _react2["default"].createElement(
            'span',
            null,
            '\u4E0B\u62C9'
        )
    ), _react2["default"].createElement(
        'div',
        { key: '1', className: 'am-refresh-control-release' },
        _react2["default"].createElement(_icon2["default"], { type: 'left', style: { transform: 'rotate(90deg)' } }),
        _react2["default"].createElement(
            'span',
            null,
            '\u91CA\u653E'
        )
    )],
    loading: _react2["default"].createElement(_icon2["default"], { type: 'loading' }),
    refreshing: false,
    distanceToRefresh: 50 / 2 * (dpr() || 2)
});
exports["default"] = _rmcListView2["default"].RefreshControl;
module.exports = exports['default'];