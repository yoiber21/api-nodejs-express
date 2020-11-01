"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = _interopRequireDefault(require("../database/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* se importa sequelize y la conexion */

/* modelamos los datos */
var Usuario = _database["default"].define('usuario', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    allowNull: null
  },
  nombres: {
    type: _sequelize["default"].TEXT
  },
  apellidos: {
    type: _sequelize["default"].TEXT
  },
  correo: {
    type: _sequelize["default"].TEXT
  },
  celular: {
    type: _sequelize["default"].TEXT
  },
  empresa: {
    type: _sequelize["default"].TEXT
  },
  genero: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

var _default = Usuario;
exports["default"] = _default;