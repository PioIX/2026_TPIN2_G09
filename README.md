# Pio Chat

Trabajo Práctico Integrador de Desarrollo de Aplicaciones Informáticas (DAI).

Pio Chat es una aplicación de chat en tiempo real desarrollada con Next.js, React, Node.js, MySQL y Socket.IO.

La aplicación permite a los usuarios registrarse e iniciar sesión, visualizar sus conversaciones, crear nuevos chats individuales o grupales, consultar el historial de mensajes y comunicarse en tiempo real con sus contactos.

Tecnologías utilizadas

* Next.js
* React
* Node.js
* MySQL
* Socket.IO
* WebSockets

## Funcionalidades

* Registro de usuarios.
* Inicio de sesión.
* Visualización de chats y contactos.
* Creación de chats individuales.
* Creación de chats grupales.
* Visualización de fotos de perfil.
* Historial de mensajes.
* Envío y recepción de mensajes en tiempo real.
* Persistencia de los mensajes en la base de datos.

## Estructura del proyecto

text
2026_TPIN2_G09/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── ...
│
├── backend/
│   ├── docs/
│   │   ├── script.sql
│   │   ├── DER.drawio
│   │   └── DER.png
│   │
│   ├── index.js
│   ├── package.json
│   └── ...
│
├── README.md
└── .gitignore
```

## Base de datos

El proyecto utiliza una base de datos MySQL para almacenar los usuarios, chats y mensajes.

El script SQL para crear las tablas y cargar los datos de ejemplo se encuentra en:

```text
backend/docs/script.sql
```

El Diagrama Entidad-Relación se encuentra en:

```text
backend/docs/
```

## Backend

El backend está desarrollado con Node.js y funciona en el puerto 4000.

```text
http://localhost:4000
```

El backend se encarga de gestionar la comunicación con la base de datos, los usuarios, los chats, los mensajes y la comunicación en tiempo real mediante Socket.IO.

## Frontend

El frontend está desarrollado con Next.js y funciona en el puerto 3000.

```text
http://localhost:3000
```

El frontend obtiene los datos dinámicamente desde el backend y permite al usuario interactuar con el sistema de chat.

## Usuario de prueba

Se proporciona el siguiente usuario para ingresar al sistema:

Email: [docente@piochat.com](mailto:docente@piochat.com)

Password: PioChat2026

Estas credenciales corresponden a un usuario creado previamente en la base de datos para permitir el acceso al sistema.

## Integrantes

* Franco Viggiano
* Lorenzo Beccaria
* Lucio Rosenthal
* Thiago Robles

## Información del proyecto

Materia: Desarrollo de Aplicaciones Informáticas (DAI)

Trabajo: Trabajo Práctico Integrador - Segundo Cuatrimestre

Proyecto: Pio Chat - Chat en tiempo real

Grupo: 09

Año: 2026
