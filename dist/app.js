"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _usuario = _interopRequireDefault(require("./routes/usuario"));

var _evento = _interopRequireDefault(require("./routes/evento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* se importa express, json y morgan */

/* se importan las rutas */
var app = (0, _express["default"])();
/* middlewares */

app.use((0, _morgan["default"])('dev')); //para ver las petiociones que llegan al servidor

app.use((0, _bodyParser.json)()); // para procesar datos en formato json
//Rutas

app.use('/api/usuario', _usuario["default"]);
app.use('/api/evento', _evento["default"]);
var _default = app;
exports["default"] = _default;