'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom2["default"].render(_react2["default"].createElement(
  _antdMobile.List,
  { style: { margin: '0.1rem 0', backgroundColor: 'white' } },
  _react2["default"].createElement(
    _antdMobile.List.Item,
    { extra: _react2["default"].createElement(
        _antdMobile.Button,
        { type: 'ghost', size: 'small', inline: true },
        'small'
      ), multipleLine: true },
    '\u533A\u57DF\u7ECF\u7406',
    _react2["default"].createElement(
      _antdMobile.List.Item.Brief,
      null,
      '\u53EF\u8FDB\u884C\u6536\u6B3E\u3001\u9000\u6B3E\u3001\u6298\u6263\u7BA1\u7406\u3001\u67E5\u770B\u6570\u636E\u7B49\u64CD\u4F5C'
    )
  ),
  _react2["default"].createElement(
    _antdMobile.List.Item,
    { extra: _react2["default"].createElement(
        _antdMobile.Button,
        { size: 'small', inline: true },
        'small'
      ), multipleLine: true },
    '\u533A\u57DF\u7ECF\u7406',
    _react2["default"].createElement(
      _antdMobile.List.Item.Brief,
      null,
      '\u53EF\u8FDB\u884C\u6536\u6B3E\u3001\u9000\u6B3E\u3001\u6298\u6263\u7BA1\u7406\u3001\u67E5\u770B\u6570\u636E\u7B49\u64CD\u4F5C'
    )
  )
), mountNode);