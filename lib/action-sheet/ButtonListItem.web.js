'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _rcTouchable = require('rc-touchable');

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ButtonListItem = function (_React$Component) {
  (0, _inherits3["default"])(ButtonListItem, _React$Component);

  function ButtonListItem() {
    (0, _classCallCheck3["default"])(this, ButtonListItem);
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
  }

  ButtonListItem.prototype.render = function render() {
    var _splitObject = (0, _splitObject4["default"])(this.props, ['children', 'prefixCls', 'activeStyle']),
        _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2),
        _splitObject2$ = _splitObject2[0],
        children = _splitObject2$.children,
        prefixCls = _splitObject2$.prefixCls,
        activeStyle = _splitObject2$.activeStyle,
        restProps = _splitObject2[1];

    return _react2["default"].createElement(
      _rcTouchable2["default"],
      { activeClassName: prefixCls + '-active', activeStyle: activeStyle },
      _react2["default"].createElement(
        'div',
        restProps,
        children
      )
    );
  };

  return ButtonListItem;
}(_react2["default"].Component);

exports["default"] = ButtonListItem;
module.exports = exports['default'];