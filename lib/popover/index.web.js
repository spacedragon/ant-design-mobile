'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _Item = require('./Item.web');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function recursiveCloneChildren(children) {
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (ch, _i) {
        return ch;
    };

    return _react2["default"].Children.map(children, function (child, index) {
        var newChild = cb(child, index);
        if (newChild && newChild.props && newChild.props.children) {
            return _react2["default"].cloneElement(newChild, {}, recursiveCloneChildren(newChild.props.children, cb));
        }
        return newChild;
    });
}

var Popover = function (_React$Component) {
    (0, _inherits3["default"])(Popover, _React$Component);

    function Popover() {
        (0, _classCallCheck3["default"])(this, Popover);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Popover.prototype.render = function render() {
        var _props = this.props,
            overlay = _props.overlay,
            _props$onSelect = _props.onSelect,
            onSelect = _props$onSelect === undefined ? function () {} : _props$onSelect;

        var overlayNode = recursiveCloneChildren(overlay, function (child, index) {
            var extraProps = { firstItem: false };
            if (child && child.type && child.type.myName === 'PopoverItem' && !child.props.disabled) {
                extraProps.onClick = function () {
                    return onSelect(child, index);
                };
                extraProps.firstItem = index === 0;
                return _react2["default"].cloneElement(child, extraProps);
            }
            return child;
        });
        return _react2["default"].createElement(_rcTooltip2["default"], (0, _extends3["default"])({}, this.props, { overlay: overlayNode }));
    };

    return Popover;
}(_react2["default"].Component);

exports["default"] = Popover;

Popover.defaultProps = {
    prefixCls: 'am-popover',
    placement: 'bottomRight',
    popupAlign: { overflow: { adjustY: 0, adjustX: 0 } },
    trigger: ['click']
};
Popover.Item = _Item2["default"];
module.exports = exports['default'];