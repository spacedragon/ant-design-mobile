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

var _Popup = require('rmc-date-picker/lib/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _index = require('../picker/style/index');

var _index2 = _interopRequireDefault(_index);

var _utils = require('./utils');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _DatePicker = require('rmc-date-picker/lib/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DatePicker = function (_React$Component) {
    (0, _inherits3["default"])(DatePicker, _React$Component);

    function DatePicker() {
        (0, _classCallCheck3["default"])(this, DatePicker);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    DatePicker.prototype.render = function render() {
        var props = this.props;
        var children = props.children,
            extra = props.extra,
            value = props.value,
            defaultDate = props.defaultDate,
            styles = props.styles;

        var extraProps = {
            extra: value ? (0, _utils.formatFn)(this, value) : extra
        };
        var dataPicker = _react2["default"].createElement(_DatePicker2["default"], { locale: props.locale, mode: props.mode, minDate: props.minDate, maxDate: props.maxDate, defaultDate: value || defaultDate });
        return _react2["default"].createElement(
            _Popup2["default"],
            (0, _extends3["default"])({ datePicker: dataPicker, styles: styles }, props, { date: value || defaultDate }),
            _react2["default"].cloneElement(children, extraProps)
        );
    };

    return DatePicker;
}(_react2["default"].Component);

exports["default"] = DatePicker;

DatePicker.defaultProps = (0, _objectAssign2["default"])({
    triggerType: 'onClick',
    styles: _index2["default"]
}, (0, _utils.getProps)());
module.exports = exports['default'];