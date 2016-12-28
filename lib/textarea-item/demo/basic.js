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

var BasicTextAreaItemExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicTextAreaItemExample, _React$Component);

    function BasicTextAreaItemExample(props) {
        (0, _classCallCheck3["default"])(this, BasicTextAreaItemExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onChange = function (_e) {
            // console.log('onChange');
            // console.log(e.text);
        };
        _this.onFocus = function () {
            // console.log('onFocus');
        };
        _this.onBlur = function () {
            // console.log('onBlur');
        };
        _this.handleError = function () {
            // console.log('onErrorClick')
        };
        _this.state = {
            value1: '默认带value',
            text: '',
            height: 0
        };
        return _this;
    }

    BasicTextAreaItemExample.prototype.render = function render() {
        var _this2 = this;

        return _react2["default"].createElement(
            _reactNative.ScrollView,
            { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
            _react2["default"].createElement(
                _antdMobile.List,
                { renderHeader: function renderHeader() {
                        return '基本';
                    } },
                _react2["default"].createElement(_antdMobile.TextAreaItem, { rows: 4, placeholder: '\u56FA\u5B9A\u884C\u6570', onChange: function onChange(e) {
                        return _this2.onChange(e);
                    }, onFocus: function onFocus() {
                        return _this2.onFocus();
                    } }),
                _react2["default"].createElement(_antdMobile.TextAreaItem, { rows: 5, count: 100, placeholder: '\u591A\u884C\u5E26\u8BA1\u6570', onChange: function onChange(e) {
                        return _this2.onChange(e);
                    }, onFocus: function onFocus() {
                        return _this2.onFocus();
                    } }),
                _react2["default"].createElement(_antdMobile.TextAreaItem, { keyboardType: 'email-address', value: this.state.value1, onChange: function onChange(e) {
                        return _this2.onChange(e);
                    } }),
                _react2["default"].createElement(_antdMobile.TextAreaItem, { placeholder: '\u9AD8\u5EA6\u81EA\u9002\u5E94', autoHeight: true, onChange: function onChange(e) {
                        return _this2.onChange(e);
                    } }),
                _react2["default"].createElement(_antdMobile.TextAreaItem, { value: '\u4E0D\u53EF\u7F16\u8F91 editable = {false}', editable: false }),
                _react2["default"].createElement(_antdMobile.TextAreaItem, { clear: false, placeholder: '\u6700\u5927\u957F\u5EA610\uFF0C\u4E0D\u5E26\u6E05\u9664clear={false}', count: 10, title: '\u6807\u9898' }),
                _react2["default"].createElement(_antdMobile.TextAreaItem, { error: true, value: '\u62A5\u9519\u6837\u5F0F error={true}', count: 200, onErrorClick: this.handleError })
            )
        );
    };

    return BasicTextAreaItemExample;
}(_react2["default"].Component);

exports["default"] = BasicTextAreaItemExample;
module.exports = exports['default'];