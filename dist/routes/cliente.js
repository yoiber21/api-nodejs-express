"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _cliente = _interopRequireDefault(require("../controllers/cliente.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* se instancia el modulo router */
var router = (0, _express.Router)();
router.post('/', _cliente["default"].crearCliente);
router.get('/', _cliente["default"].obtenerClientes);
router.get('/:id', _cliente["default"].obtenerClientesId);
router["delete"]('/:id', _cliente["default"].eliminarCliente);
router.put('/:id', _cliente["default"].actualizarCliente);
var _default = router;
exports["default"] = _default;