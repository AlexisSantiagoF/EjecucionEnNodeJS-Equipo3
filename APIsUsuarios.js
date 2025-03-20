const axios = require('axios');

let url = 'https://api-usuarios-perfiles.onrender.com/apiV1/users';
let datos = {
    "nombre": "Alexis Santiago",
    "correo": "Alexis@example.com",
    "edad": 22,
    "esAdministrador": true,
    "intereses": ["Programación", "IA", "Seguridad Informática"],
    "direccion": {
      "calle": "Av. Principal 123",
      "ciudad": "Tepic",
      "pais": "México"
    },
    "actividad": []
};

// Métodos separados

// Obtener todos los usuarios
function getAllUsers() {
    axios.get(url).then((response) => {
        console.log(response.data);
    });
}

// Obtener un usuario por ID
function getOneUser() {
    const userUrl = 'https://api-usuarios-perfiles.onrender.com/apiV1/users/wxdCRMSDFd1olEHB8IKv';
    axios.get(userUrl).then((response) => {
        console.log(response.data);
    });
}

// Crear un nuevo usuario
function createUser() {
    axios.post(url, datos).then((response) => {
        console.log(response.data);
    });
}

// Actualizar un usuario completamente (PUT)
function updateUser() {
    const userUrl = 'https://api-usuarios-perfiles.onrender.com/apiV1/users/NTs70Ex6m3OJ6dtYPI6x';
    const updatedData = {
        "nombre": "Santiago",
        "correo": "santiago@example.com"
    };
    axios.put(userUrl, updatedData).then((response) => {
        console.log(response.data);
    });
}

// Actualizar parcialmente un usuario (PATCH)
function patchUser() {
    const userUrl = 'https://api-usuarios-perfiles.onrender.com/apiV1/users/NTs70Ex6m3OJ6dtYPI6x';
    const updatedData = {
        "edad": 26,
        "intereses": ["Nothing", "Nada", "Niet"]
    };
    axios.patch(userUrl, updatedData).then((response) => {
        console.log(response.data);
    });
}

// Eliminar un usuario
function deleteUser() {
    const userUrl = 'https://api-usuarios-perfiles.onrender.com/apiV1/users/NTs70Ex6m3OJ6dtYPI6x';
    axios.delete(userUrl).then((response) => {
        console.log(response.data);
    });
}

// Agregar una actividad a un usuario
function addActivity() {
    const activityUrl = 'https://api-usuarios-perfiles.onrender.com/apiV1/users/tv6mTQIMWj94wxUvgJA0/activity';
    const activityData = {
        "accion": "Inició sesión"
    };
    axios.post(activityUrl, activityData).then((response) => {
        console.log(response.data);
    });
}

// Obtener la reputación de un usuario
function getUserReputation() {
    const reputationUrl = 'https://api-usuarios-perfiles.onrender.com/apiV1/users/reputation/tv6mTQIMWj94wxUvgJA0';
    axios.get(reputationUrl).then((response) => {
        console.log(response.data);
    });
}

// Obtener recomendaciones de contactos por usuario
function getUserRecommendations() {
    const recommendationsUrl = 'https://api-usuarios-perfiles.onrender.com/apiV1/users/recommend/tv6mTQIMWj94wxUvgJA0';
    axios.get(recommendationsUrl).then((response) => {
        console.log(response.data);
    });
}

// Ejemplo de cómo llamar un método
 getAllUsers();
// getOneUser();
// createUser();
// updateUser();
// patchUser();
// deleteUser();
// addActivity();
// getUserReputation();
// getUserRecommendations();