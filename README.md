<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
</p>

<h1 align="center">Names API - Curso NestJS</h1>

<p align="center">
  Proyecto de ejemplo desarrollado durante el curso de NestJS.<br>
  API RESTful para gestionar una lista de nombres utilizando <a href="http://nestjs.com/" target="_blank">NestJS</a> y <a href="http://nodejs.org" target="_blank">Node.js</a>.
</p>

## Descripción

Este proyecto es una API construida con [NestJS](https://github.com/nestjs/nest) que permite realizar operaciones CRUD sobre una colección de nombres. Es ideal para aprender los conceptos básicos y buenas prácticas de NestJS.

## Instalación

```bash
npm install
```

## Ejecución de la aplicación

```bash
# modo desarrollo
npm run start

# modo watch (recarga automática)
npm run start:dev

# modo producción
npm run start:prod
```

## Pruebas

```bash
# pruebas unitarias
npm run test

# pruebas end-to-end
npm run test:e2e

# cobertura de pruebas
npm run test:cov
```

## Endpoints principales

- `POST /api/v1/names` - Crear un nuevo nombre
- `GET /api/v1/names` - Listar todos los nombres o filtrar por inicio (`?start=`)
- `PUT /api/v1/names/:name/:newName` - Actualizar un nombre existente
- `DELETE /api/v1/names/:name` - Eliminar un nombre
- `DELETE /api/v1/names/clear` - Eliminar todos los nombres

## Recursos

- [Documentación oficial de NestJS](https://docs.nestjs.com/)
- [Curso de NestJS](https://www.udemy.com/course/aprende-nestjs-desde-0)

## Autor

- Sandor Cáceres

## Licencia

MIT
