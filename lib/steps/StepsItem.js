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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StepsItem = function (_React$Component) {
    (0, _inherits3["default"])(StepsItem, _React$Component);

    function StepsItem() {
        (0, _classCallCheck3["default"])(this, StepsItem);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    StepsItem.prototype.render = function render() {
        var _props = this.props,
            size = _props.size,
            current = _props.current,
            index = _props.index,
            last = _props.last,
            title = _props.title,
            description = _props.description,
            status = _props.status,
            errorTail = _props.errorTail,
            icon = _props.icon,
            styles = _props.styles;

        var headCls = '';
        var tailTopCls = '';
        var tailBottomCls = '';
        var sizeCls = size === 'small' ? '_s' : '_l';
        if (index < current || status === 'finish') {
            headCls = 'head_blue' + sizeCls;
            tailTopCls = 'tail_blue';
            tailBottomCls = 'tail_blue';
        } else if (index === current || status === 'process') {
            headCls = 'head_blue' + sizeCls;
            tailTopCls = 'tail_blue';
            tailBottomCls = 'tail_gray';
        } else if (index > current || status === 'wait') {
            headCls = 'head_gray' + sizeCls;
            tailTopCls = 'tail_gray';
            tailBottomCls = 'tail_gray';
        } else if (status === 'error') {
            headCls = 'head_red' + sizeCls;
            tailTopCls = 'tail_gray';
            tailBottomCls = 'tail_gray';
        }
        if (last) {
            tailTopCls = 'tail_last';
            tailBottomCls = 'tail_last';
        }
        if (errorTail > -1) {
            tailBottomCls = 'tail_error';
        }
        var iconSource = void 0;
        if (size === 'small') {
            if (index < current || status === 'finish' || index === current || status === 'process') {
                iconSource = require('../style/images/check.png');
            } else if (index > current || status === 'wait') {
                iconSource = require('../style/images/more.png');
            } else if (status === 'error') {
                iconSource = require('../style/images/cross.png');
            }
        } else {
            if (index < current || status === 'finish' || index === current || status === 'process') {
                iconSource = require('../style/images/check_w.png');
            } else if (index > current || status === 'wait') {
                iconSource = require('../style/images/more_w.png');
                if (!!icon) {
                    iconSource = icon;
                }
            } else if (status === 'error') {
                iconSource = require('../style/images/cross_w.png');
            }
        }
        return _react2["default"].createElement(
            _reactNative.View,
            { style: { flex: 1, flexDirection: 'row' } },
            _react2["default"].createElement(
                _reactNative.View,
                { style: { flexDirection: 'column' } },
                _react2["default"].createElement(
                    _reactNative.View,
                    { style: [styles['head_default' + sizeCls], styles[headCls]] },
                    _react2["default"].createElement(_reactNative.Image, { source: iconSource, style: styles['icon' + sizeCls] })
                ),
                _react2["default"].createElement(_reactNative.View, { style: [styles['tail_default' + sizeCls], styles[tailTopCls]] }),
                _react2["default"].createElement(_reactNative.View, { style: [styles['tail_default' + sizeCls], styles[tailBottomCls]] })
            ),
            _react2["default"].createElement(
                _reactNative.View,
                { style: styles['content' + sizeCls] },
                _react2["default"].createElement(
                    _reactNative.Text,
                    { style: [styles['title' + sizeCls]] },
                    title
                ),
                _react2["default"].createElement(
                    _reactNative.Text,
                    { style: [styles['description' + sizeCls]] },
                    description
                )
            )
        );
    };

    return StepsItem;
}(_react2["default"].Component);

exports["default"] = StepsItem;
module.exports = exports['default'];