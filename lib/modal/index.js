'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Modal2["default"].alert = _alert2["default"];
_Modal2["default"].prompt = function () {
    console.warn('Modal.prompt is on the road, use react native "AlertIOS" temporarily');
};
exports["default"] = _Modal2["default"];
module.exports = exports['default'];