'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _Marquee = require('./Marquee');

var _Marquee2 = _interopRequireDefault(_Marquee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NoticeBar = function (_React$Component) {
    (0, _inherits3["default"])(NoticeBar, _React$Component);

    function NoticeBar(props) {
        (0, _classCallCheck3["default"])(this, NoticeBar);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                mode = _this$props.mode,
                onClick = _this$props.onClick;

            if (onClick) {
                onClick();
            }
            if (mode === 'closable') {
                _this.setState({
                    show: false
                });
            }
        };
        _this.state = {
            show: true
        };
        return _this;
    }

    NoticeBar.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['mode', 'icon', 'onClick', 'children', 'className', 'prefixCls', 'marqueeProps']),
            _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2),
            _splitObject2$ = _splitObject2[0],
            mode = _splitObject2$.mode,
            icon = _splitObject2$.icon,
            onClick = _splitObject2$.onClick,
            children = _splitObject2$.children,
            className = _splitObject2$.className,
            prefixCls = _splitObject2$.prefixCls,
            marqueeProps = _splitObject2$.marqueeProps,
            restProps = _splitObject2[1];

        var extraProps = {};
        var operationDom = null;
        if (mode === 'closable') {
            operationDom = _react2["default"].createElement(
                'div',
                { className: prefixCls + '-operation', onClick: this.onClick },
                _react2["default"].createElement(_icon2["default"], { type: 'cross', size: 'md' })
            );
        } else {
            if (mode === 'link') {
                operationDom = _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-operation' },
                    _react2["default"].createElement(_icon2["default"], { type: 'right', size: 'md' })
                );
            }
            extraProps.onClick = onClick;
        }
        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        var marquee = (0, _objectAssign2["default"])({}, {
            loop: false,
            leading: 500,
            trailing: 800,
            fps: 40,
            style: {}
        }, marqueeProps);
        return this.state.show ? _react2["default"].createElement(
            'div',
            (0, _extends3["default"])({ className: wrapCls }, restProps, extraProps),
            icon ? _react2["default"].createElement(
                'div',
                { className: prefixCls + '-icon' },
                ' ',
                icon,
                ' '
            ) : null,
            _react2["default"].createElement(
                'div',
                { className: prefixCls + '-content' },
                _react2["default"].createElement(_Marquee2["default"], (0, _extends3["default"])({ prefixCls: prefixCls, text: children }, marquee))
            ),
            operationDom
        ) : null;
    };

    return NoticeBar;
}(_react2["default"].Component);

exports["default"] = NoticeBar;

NoticeBar.defaultProps = {
    prefixCls: 'am-notice-bar',
    mode: '',
    icon: _react2["default"].createElement(_icon2["default"], { type: require('./style/assets/trips.svg'), size: 'xxs' }),
    onClick: function onClick() {}
};
module.exports = exports['default'];