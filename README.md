# README.md

# 📚 Documentación del Proyecto Astro - Sistema de Reservas Web

## 🌟 Descripción General

Este proyecto está diseñado para mostrar una lista de bancos utilizando la API desarrollada en el backend. Utiliza Astro como framework para construir una aplicación web rápida y eficiente.

## 🔗 URL Base de la API

```
https://bsrw-api4.onrender.com
```

## 🛠️ Tecnologías Implementadas

* **Astro** para el desarrollo del frontend
* **Fetch API** para realizar solicitudes a la API
* **CSS** para el estilo de la aplicación

## 🎯 Estructura del Proyecto

```
astro-project
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   └── BancoList.astro
│   ├── layouts
│   │   └── MainLayout.astro
│   ├── pages
│   │   ├── index.astro
│   │   └── bancos.astro
│   └── styles
│       └── global.css
├── package.json
├── astro.config.mjs
└── README.md
```

## 🚀 Instrucciones de Configuración

1. **Clonar el Repositorio**
   - Clona este repositorio en tu máquina local.

2. **Instalar Dependencias**
   - Navega a la carpeta del proyecto y ejecuta:
     ```
     npm install
     ```

3. **Ejecutar la Aplicación**
   - Para iniciar el servidor de desarrollo, ejecuta:
     ```
     npm run dev
     ```
   - Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en acción.

## 📄 Endpoints de la API

### Obtener todos los bancos

```http
GET /obtenerBancos
```

## ⚠️ Consideraciones Importantes

* Asegúrate de que la API esté en funcionamiento antes de intentar acceder a los datos desde la aplicación Astro.
* Se recomienda revisar la consola del navegador para cualquier error relacionado con las solicitudes a la API.

## 📞 Soporte

Para consultas o reportar problemas, contactar al equipo de desarrollo a través del canal de comunicación establecido.

---
*Última actualización: Febrero 2025*