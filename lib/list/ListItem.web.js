'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Brief = undefined;

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _rcTouchable = require('rc-touchable');

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Brief = exports.Brief = function (_React$Component) {
    (0, _inherits3["default"])(Brief, _React$Component);

    function Brief() {
        (0, _classCallCheck3["default"])(this, Brief);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Brief.prototype.render = function render() {
        return _react2["default"].createElement(
            'div',
            { className: 'am-list-brief', style: this.props.style },
            this.props.children
        );
    };

    return Brief;
}(_react2["default"].Component);

var ListItem = function (_React$Component2) {
    (0, _inherits3["default"])(ListItem, _React$Component2);

    function ListItem() {
        (0, _classCallCheck3["default"])(this, ListItem);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component2.apply(this, arguments));
    }

    ListItem.prototype.render = function render() {
        var _wrapCls, _classNames, _classNames2;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'className', 'activeStyle', 'error', 'align', 'wrap', 'children', 'multipleLine', 'thumb', 'disabled', 'extra', 'arrow']),
            _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2),
            _splitObject2$ = _splitObject2[0],
            prefixCls = _splitObject2$.prefixCls,
            className = _splitObject2$.className,
            activeStyle = _splitObject2$.activeStyle,
            error = _splitObject2$.error,
            align = _splitObject2$.align,
            wrap = _splitObject2$.wrap,
            disabled = _splitObject2$.disabled,
            children = _splitObject2$.children,
            multipleLine = _splitObject2$.multipleLine,
            thumb = _splitObject2$.thumb,
            extra = _splitObject2$.extra,
            _splitObject2$$arrow = _splitObject2$.arrow,
            arrow = _splitObject2$$arrow === undefined ? '' : _splitObject2$$arrow,
            restProps = _splitObject2[1];

        var wrapCls = (_wrapCls = {}, (0, _defineProperty3["default"])(_wrapCls, className, className), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-item', true), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-item-error', error), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-item-top', align === 'top'), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-item-middle', align === 'middle'), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-item-bottom', align === 'bottom'), _wrapCls);
        var lineCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-line', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-line-multiple', multipleLine), (0, _defineProperty3["default"])(_classNames, prefixCls + '-line-wrap', wrap), _classNames));
        var arrowCls = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-arrow', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-arrow-horizontal', arrow === 'horizontal'), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-arrow-vertical', arrow === 'down' || arrow === 'up'), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-arrow-vertical-up', arrow === 'up'), _classNames2));
        var content = _react2["default"].createElement(
            'div',
            (0, _extends3["default"])({}, restProps, { className: (0, _classnames2["default"])(wrapCls) }),
            thumb ? _react2["default"].createElement(
                'div',
                { className: prefixCls + '-thumb' },
                typeof thumb === 'string' ? _react2["default"].createElement('img', { src: thumb }) : thumb
            ) : null,
            _react2["default"].createElement(
                'div',
                { className: lineCls },
                children ? _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    children
                ) : null,
                extra ? _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-extra' },
                    extra
                ) : null,
                arrow ? _react2["default"].createElement('div', { className: arrowCls }) : null
            )
        );
        return _react2["default"].createElement(
            _rcTouchable2["default"],
            { disabled: disabled || !restProps.onClick, activeStyle: activeStyle, activeClassName: prefixCls + '-item-active' },
            content
        );
    };

    return ListItem;
}(_react2["default"].Component);

ListItem.defaultProps = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false
};
ListItem.Brief = Brief;
exports["default"] = ListItem;