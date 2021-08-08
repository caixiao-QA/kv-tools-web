"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _MenuBar = _interopRequireDefault(require("./MenuBar"));

require("./index.css");

var _KVQRcodeAnalysis = _interopRequireDefault(require(".KVQRcodeAnalysis/KVQRcodeAnalysis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render( // <KVQRcodeAnalysis/>,
document.getElementById('root'));