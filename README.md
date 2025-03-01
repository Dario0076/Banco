# 📚 Documentación API - Grupo 4 - Sistema de Reservas Web

## 🌟 Descripción General

Esta API fue desarrollada para el sistema de reservas web utilizando Firebase/Firestore como base de datos y desplegada en Render. Proporciona endpoints para la gestión de reservas según los requerimientos del proyecto integrador.

## 🔗 URL Base

```
https://bsrw-api4.onrender.com
```

## 🛠️ Tecnologías Implementadas

* Node.js para el desarrollo del backend robusto y eficiente

* Express como framework web para crear los endpoints de manera organizada

* Firebase/Firestore como base de datos NoSQL para gestión de datos

* Render para el despliegue de la API en producción

## 🎯 Endpoints Principales

### 📅 Reservas

#### Obtener todas las reservas

```http
GET /api/reservas
```

#### Crear nueva reserva

```http
POST /api/reservas
```

**Cuerpo de la petición:**

```json
{
  "userId": "string",
  "fecha": "YYYY-MM-DD",
  "hora": "HH:mm",
  "servicio": "string",
  "estado": "pendiente"
}
```

#### Obtener reserva por ID

```http
GET /api/reservas/:id
```

#### Actualizar estado de reserva

```http
PUT /api/reservas/:id
```

**Cuerpo de la petición:**

```json
{
  "estado": "confirmada"
}
```

### 👥 Usuarios

#### Registrar usuario

```http
POST /api/usuarios
```

**Cuerpo de la petición:**

```json
{
  "nombre": "string",
  "email": "string",
  "telefono": "string"
}
```

## 🔧 Guía de Integración para Grupo 5

### Pasos para la Integración

1. **Configuración Inicial** 🚀
   - Utilizar la URL base proporcionada
   - Asegurar el envío de headers correctos:

```javascript
headers: {
  'Content-Type': 'application/json'
}
```

2. **Manejo de Respuestas** ✨
   - Códigos de estado HTTP estándar
   - Formato de respuesta consistente:

```json
{
  "success": true/false,
  "data": {},
  "message": "string"
}
```

3. **Ejemplos de Uso** 💻

```javascript
// Ejemplo de creación de reserva
const crearReserva = async (datosReserva) => {
  const response = await fetch('https://bsrw-api4.onrender.com/api/reservas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosReserva)
  });
  return await response.json();
};
```

## ⚠️ Consideraciones Importantes

* La API está optimizada para manejar las operaciones CRUD básicas del proyecto

* Se implementan validaciones de datos en cada endpoint

* Las respuestas incluyen mensajes descriptivos para facilitar el debugging

* Se recomienda implementar manejo de errores en el cliente

## 🧪 Pruebas

Para probar los endpoints, pueden utilizar herramientas como:

* Postman para pruebas completas de API

* cURL para pruebas rápidas desde terminal

* Thunder Client como extensión de VS Code

## 📞 Soporte

Para consultas o reportar problemas, contactar al equipo 4 a través del canal de comunicación establecido en el proyecto integrador.

---
*Última actualización: Febrero 2025*