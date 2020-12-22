"use strict";

var _cliente = _interopRequireDefault(require("../models/cliente"));

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var crearCliente = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res) {
    var _req$body, id, nombres, apellidos, contacto, fecha, nuevo;

    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, nombres = _req$body.nombres, apellidos = _req$body.apellidos, contacto = _req$body.contacto, fecha = _req$body.fecha;
            _context.prev = 1;
            _context.next = 4;
            return _cliente["default"].create({
              id: id,
              nombres: nombres,
              apellidos: apellidos,
              contacto: contacto,
              fecha: fecha
            });

          case 4:
            nuevo = _context.sent;

            if (!nuevo) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(201).json({
              message: 'Dato registrado'
            }));

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              message: 'Error interno al registrar el dato'
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function crearCliente(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var obtenerClientes = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee2(req, res) {
    var clientes;
    return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _cliente["default"].findAll();

          case 2:
            clientes = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              data: clientes
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function obtenerClientes(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var obtenerClientesId = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee3(req, res) {
    var id, cliente;
    return _regeneratorRuntime["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _cliente["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            cliente = _context3.sent;

            if (!cliente) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.status(200).json({
              data: cliente
            }));

          case 6:
            res.status(204).json({
              message: 'No existe el cliente'
            });

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function obtenerClientesId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var eliminarCliente = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee4(req, res) {
    var id, cliente;
    return _regeneratorRuntime["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _cliente["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            cliente = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              message: 'Cliente eliminado',
              id: id
            }));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).json({
              err: _context4.t0
            }));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function eliminarCliente(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var actualizarCliente = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee5(req, res) {
    var id, _req$body2, nombres, apellidos, contacto, fecha, cliente;

    return _regeneratorRuntime["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombres = _req$body2.nombres, apellidos = _req$body2.apellidos, contacto = _req$body2.contacto, fecha = _req$body2.fecha;
            _context5.prev = 2;
            _context5.next = 5;
            return _cliente["default"].findOne({
              where: {
                id: id
              }
            });

          case 5:
            cliente = _context5.sent;
            _context5.next = 8;
            return cliente.update({
              nombres: nombres,
              apellidos: apellidos,
              contacto: contacto,
              fecha: fecha
            });

          case 8:
            if (cliente) {
              res.status(200).json({
                message: "Cliente actualizado"
              });
            }

            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              err: _context5.t0
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 11]]);
  }));

  return function actualizarCliente(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  crearCliente: crearCliente,
  obtenerClientes: obtenerClientes,
  obtenerClientesId: obtenerClientesId,
  eliminarCliente: eliminarCliente,
  actualizarCliente: actualizarCliente
};