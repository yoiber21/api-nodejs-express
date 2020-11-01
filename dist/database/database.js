"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* importamos sequelize */

/* se crea la conexion */
var sequelize = new _sequelize["default"]('express-nodejs', 'postgres', '1001032661', {
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false
});
var _default = sequelize;
exports["default"] = _default;