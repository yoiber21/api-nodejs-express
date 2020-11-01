"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuario = _interopRequireDefault(require("../controllers/usuario.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* se instancia el modulo router */
var router = (0, _express.Router)();
router.get('/', _usuario["default"].obtenerUsuarios);
router.get('/:id', _usuario["default"].obtenerUsuariosId);
router["delete"]('/:id', _usuario["default"].eliminarUsuario);
router.put('/:id', _usuario["default"].actualizarUsuario);
router.post('/', _usuario["default"].CrearUsuario);
var _default = router;
exports["default"] = _default;