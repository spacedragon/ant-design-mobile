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

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AgreeItem = _antdMobile.Checkbox.AgreeItem;
var CheckboxItem = _antdMobile.Checkbox.CheckboxItem;

var BasicCheckboxExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicCheckboxExample, _React$Component);

    function BasicCheckboxExample(props, context) {
        (0, _classCallCheck3["default"])(this, BasicCheckboxExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props, context));

        _this.state = {
            checkBox1: true,
            agreeItem1: true,
            checkboxItem1: true
        };
        return _this;
    }

    BasicCheckboxExample.prototype.render = function render() {
        var _this2 = this;

        return _react2["default"].createElement(
            _reactNative.View,
            null,
            _react2["default"].createElement(
                _reactNative.View,
                { style: { padding: 10 } },
                _react2["default"].createElement(_antdMobile.Checkbox, { checked: this.state.checkBox1, style: { tintColor: '#f00' }, onChange: function onChange(event) {
                        _this2.setState({
                            checkBox1: event.target.checked
                        });
                    } }),
                _react2["default"].createElement(_antdMobile.WhiteSpace, null),
                _react2["default"].createElement(
                    _antdMobile.Checkbox,
                    null,
                    'Checkbox'
                ),
                _react2["default"].createElement(_antdMobile.WhiteSpace, null),
                _react2["default"].createElement(_antdMobile.Checkbox, { checked: true, disabled: true }),
                _react2["default"].createElement(_antdMobile.WhiteSpace, null),
                _react2["default"].createElement(_antdMobile.Checkbox, { disabled: true })
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, null),
            _react2["default"].createElement(
                AgreeItem,
                null,
                '\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F\u540C\u610F'
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, null),
            _react2["default"].createElement(
                AgreeItem,
                { checked: this.state.agreeItem1, checkboxStyle: { tintColor: '#f00' }, onChange: function onChange(event) {
                        _this2.setState({
                            agreeItem1: event.target.checked
                        });
                    } },
                '\u540C\u610F \u300A\u4FE1\u7528\u652F\u4ED8\u670D\u52A1\u5408\u540C\u300B'
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, null),
            _react2["default"].createElement(
                AgreeItem,
                { disabled: true },
                '\u672A\u9009\u4E2D\uFF0C\u4E0D\u53EF\u7F16\u8F91 \u300A\u4FE1\u7528\u652F\u4ED8\u670D\u52A1\u5408\u540C\u300B'
            ),
            _react2["default"].createElement(_antdMobile.WhiteSpace, null),
            _react2["default"].createElement(
                AgreeItem,
                { checked: true, disabled: true },
                '\u5F3A\u5236\u9009\u4E2D,\u4E0D\u53EF\u7F16\u8F91 \u300A\u4FE1\u7528\u652F\u4ED8\u670D\u52A1\u5408\u540C\u4FE1\u7528\u652F\u4ED8\u670D\u52A1\u5408\u540C\u4FE1\u7528\u652F\u4ED8\u670D\u52A1\u5408\u540C\u300B'
            ),
            _react2["default"].createElement(
                _antdMobile.List,
                { style: { marginTop: 12 } },
                _react2["default"].createElement(
                    _reactNative.Text,
                    { style: { marginTop: 12 } },
                    '\u8868\u5355\u591A\u9009\u9879\uFF0C\u666E\u901A\u5217\u8868\u4E2D\u591A\u9009\u9879'
                ),
                _react2["default"].createElement(
                    CheckboxItem,
                    { checked: this.state.checkboxItem1, onChange: function onChange(event) {
                            _this2.setState({
                                checkboxItem1: event.target.checked
                            });
                        } },
                    '\u7B7E\u7EA6'
                ),
                _react2["default"].createElement(
                    CheckboxItem,
                    null,
                    '\u7269\u6599\u94FA\u8BBE'
                ),
                _react2["default"].createElement(
                    CheckboxItem,
                    { disabled: true },
                    '\u673A\u5177\u7EF4\u62A4\uFF08\u4E0D\u80FD\u9009\uFF09'
                ),
                _react2["default"].createElement(
                    CheckboxItem,
                    { disabled: true, checked: true },
                    '\u4EA7\u54C1\u95EE\u9898\u89E3\u51B3\uFF08\u5FC5\u9009\uFF09'
                )
            )
        );
    };

    return BasicCheckboxExample;
}(_react2["default"].Component);

exports["default"] = BasicCheckboxExample;
module.exports = exports['default'];