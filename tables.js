create table clientes (
	id serial primary key,
	nombres text not null,
	apellidos text not null,
	contacto text not null,
	fecha date not null
)

create table usuario (
	id serial primary key,
	nombres text not null,
	apellidos text not null,
	correo text not null,
	celular text not null,
	empresa text not null,
	genero text not null
)