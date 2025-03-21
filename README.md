# API Usuarios - Ejecución en Node.js

Este proyecto es una demostración del consumo de la API REST hecha por el equipo 3. Utiliza la librería `axios` para realizar solicitudes HTTP y está diseñado para ejecutarse en un entorno Node.js.

## Descripción

El programa incluye métodos para interactuar con una API de usuarios alojada en [https://api-usuarios-perfiles.onrender.com/apiV1/users](https://api-usuarios-perfiles.onrender.com/apiV1/users). Cada método realiza una operación específica, como obtener usuarios, crear nuevos, actualizar información, eliminar usuarios, entre otros.

### Funcionalidades

1. **Obtener todos los usuarios**: Recupera la lista completa de usuarios registrados.
2. **Obtener un usuario por ID**: Recupera la información de un usuario específico.
3. **Crear un nuevo usuario**: Envía datos para registrar un nuevo usuario en la API.
4. **Actualizar un usuario (PUT)**: Reemplaza completamente la información de un usuario existente.
5. **Actualizar parcialmente un usuario (PATCH)**: Modifica solo algunos campos de un usuario.
6. **Eliminar un usuario**: Elimina un usuario específico de la base de datos.
7. **Agregar una actividad a un usuario**: Registra una nueva actividad para un usuario.
8. **Obtener la reputación de un usuario**: Recupera la reputación de un usuario específico.
9. **Obtener recomendaciones de contactos**: Obtiene una lista de contactos recomendados para un usuario.

## Requisitos

- **Node.js**: Asegúrate de tener instalado Node.js en tu sistema.
- **Librería Axios**: Este programa utiliza `axios` para realizar solicitudes HTTP. Instálalo ejecutando:
  ```bash
  npm install axios
