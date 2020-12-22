"use strict";

var _usuario = _interopRequireDefault(require("../models/usuario"));

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* obtener todos usuarios */
var obtenerUsuarios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res) {
    var usuarios;
    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _usuario["default"].findAll();

          case 2:
            usuarios = _context.sent;
            res.status(200).json({
              datos: usuarios
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function obtenerUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* obtener usuarios por el id */


var obtenerUsuariosId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee2(req, res) {
    var id, usuario;
    return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _usuario["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            usuario = _context2.sent;
            res.status(200).json({
              datos: usuario
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function obtenerUsuariosId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/* crear usuarios */


var CrearUsuario = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee3(req, res) {
    var _req$body, id, nombres, apellidos, correo, celular, empresa, genero, nuevo;

    return _regeneratorRuntime["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            /* obtenemos los parametros para insertar o a insertar */
            _req$body = req.body, id = _req$body.id, nombres = _req$body.nombres, apellidos = _req$body.apellidos, correo = _req$body.correo, celular = _req$body.celular, empresa = _req$body.empresa, genero = _req$body.genero;
            _context3.prev = 1;

            if (!req.body.isEmpty()) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              message: "Digite todos los campos por favor!!"
            }));

          case 6:
            _context3.next = 8;
            return _usuario["default"].create({
              id: id,
              nombres: nombres,
              apellidos: apellidos,
              correo: correo,
              celular: celular,
              empresa: empresa,
              genero: genero
            });

          case 8:
            nuevo = _context3.sent;

          case 9:
            if (!nuevo) {
              _context3.next = 11;
              break;
            }

            return _context3.abrupt("return", res.status(201).json({
              message: "Usuario creado!!",
              data: nuevo
            }));

          case 11:
            _context3.next = 16;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(400).json({
              err: _context3.t0
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 13]]);
  }));

  return function CrearUsuario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var eliminarUsuario = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee4(req, res) {
    var id, fila;
    return _regeneratorRuntime["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _usuario["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            fila = _context4.sent;
            res.status(200).json({
              message: "Eliminado el usuario con id",
              fila: fila
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function eliminarUsuario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var actualizarUsuario = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee5(req, res) {
    var id, _req$body2, nombres, apellidos, correo, celular, empresa, genero, usuario;

    return _regeneratorRuntime["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombres = _req$body2.nombres, apellidos = _req$body2.apellidos, correo = _req$body2.correo, celular = _req$body2.celular, empresa = _req$body2.empresa, genero = _req$body2.genero;
            _context5.prev = 2;
            _context5.next = 5;
            return _usuario["default"].findOne({
              where: {
                id: id
              }
            });

          case 5:
            usuario = _context5.sent;
            _context5.next = 8;
            return usuario.update({
              nombres: nombres,
              apellidos: apellidos,
              correo: correo,
              celular: celular,
              empresa: empresa,
              genero: genero
            });

          case 8:
            if (usuario) {
              res.status(200).json({
                message: "Usuario actualiado"
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

  return function actualizarUsuario(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  obtenerUsuarios: obtenerUsuarios,
  obtenerUsuariosId: obtenerUsuariosId,
  CrearUsuario: CrearUsuario,
  eliminarUsuario: eliminarUsuario,
  actualizarUsuario: actualizarUsuario
};