"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecodeProtobuf = DecodeProtobuf;

var _protobufjs = require("protobufjs");

var _base = _interopRequireDefault(require("../protocol/base.proto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import proto from "../protocol/base.proto";
function DecodeProtobuf(buffer) {
  console.log();
  (0, _protobufjs.load)("./src/protocol/protocol/base.proto", function (err, root) {
    if (err) throw err;
    var Message = root.lookupType("../protocol/base.proto");
    var decoded = Message.decode(buffer);
    console.log("decoded = ".concat(JSON.stringify(decoded)));
  });
}