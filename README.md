# 🚀 API de Gestión de Proyectos y Tareas

Una API RESTful completa para la gestión colaborativa de proyectos y tareas con funcionalidades de inteligencia artificial integradas.

## 📋 Descripción del Proyecto

**ProjectManager API** es una solución backend robusta diseñada para equipos que necesitan gestionar proyectos de forma eficiente y colaborativa. La plataforma permite crear, organizar y supervisar proyectos con diferentes niveles de acceso, roles personalizados y funcionalidades inteligentes potenciadas por IA.

### 🎯 Características Principales

- **Gestión Completa de Proyectos**: Creación, organización y seguimiento de proyectos con estados dinámicos
- **Sistema de Tareas Avanzado**: Asignación, seguimiento y gestión de tareas con dependencias
- **Control de Acceso por Roles**: Sistema granular de permisos (Admin, Project Manager, Developer, Viewer)
- **Colaboración en Tiempo Real**: Sistema de comentarios y comunicación en proyectos
- **Inteligencia Artificial Integrada**: Generación automática de tareas, estimación de tiempos y análisis de progreso
- **Categorización Inteligente**: Organización por categorías personalizables
- **Autenticación Segura**: Sistema JWT con roles y permisos avanzados

## 🏗️ Arquitectura del Sistema

### Modelos de Datos

```
Users → Projects → Tasks
  ↓        ↓        ↓
Roles   Categories  States
  ↓        ↓        ↓
Auth    Comments    AI
```

**Entidades Principales:**
- **Users**: Gestión de usuarios con roles globales
- **Projects**: Proyectos con miembros y configuraciones específicas
- **Tasks**: Tareas asignables con estados y seguimiento
- **Comments**: Sistema de comunicación por proyecto
- **Categories**: Clasificación y organización
- **States**: Control de flujo de trabajo
- **Roles**: Sistema de permisos granular

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v16 o superior)
- MongoDB (v5.0 o superior)
- npm o yarn
- Cuenta en Google Gemini (para funcionalidades de IA)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-equipo/project-manager-api.git
cd project-manager-api

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones

# Ejecutar migraciones/seeders (si aplica)
npm run seed

# Iniciar el servidor de desarrollo
npm run dev
```

### Variables de Entorno Requeridas

```env
# Base de Datos
MONGODB_URI=mongodb://localhost:27017/project_manager

# JWT
JWT_SECRET=tu_jwt_secret_super_seguro
JWT_EXPIRE=24h
JWT_REFRESH_EXPIRE=7d

# API Key para IA
GEMINI_API_KEY=tu_gemini_api_key

# Configuración del Servidor
PORT=3000
NODE_ENV=development

# Email (para recuperación de contraseña)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_password
```

## 📖 Documentación de la API

### Autenticación

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh
POST /api/auth/logout
```

### Gestión de Proyectos

```http
GET    /api/projects              # Listar proyectos del usuario
POST   /api/projects              # Crear proyecto
GET    /api/projects/:id          # Obtener proyecto específico
PUT    /api/projects/:id          # Actualizar proyecto
DELETE /api/projects/:id          # Eliminar proyecto
```

### Gestión de Tareas

```http
GET    /api/projects/:projectId/tasks    # Tareas del proyecto
POST   /api/projects/:projectId/tasks    # Crear tarea
PUT    /api/tasks/:id                    # Actualizar tarea
DELETE /api/tasks/:id                    # Eliminar tarea
```

### Funcionalidades de IA

```http
POST /api/ai/generate-tasks        # Generar tareas automáticamente
POST /api/ai/analyze-project       # Análisis del proyecto
POST /api/ai/estimate-time         # Estimación de tiempos
POST /api/ai/generate-summary      # Resumen de progreso
```

**📋 [Ver documentación completa de endpoints](./docs/API.md)**

## 👥 Organización del Equipo

### Estructura de Desarrollo

**Miembro 1 - Backend Core & Auth** 🔧
- Configuración inicial del proyecto
- Sistema de autenticación y autorización
- Modelos de Users, Roles y States
- Middleware de seguridad

**Miembro 2 - Gestión de Proyectos & Tareas** 📊
- Modelos de Projects, Tasks y Categories
- CRUD completo de proyectos y tareas
- Sistema de comentarios
- Validaciones y permisos específicos

**Miembro 3 - IA & Funcionalidades Avanzadas** 🤖
- Integración con APIs de IA (OpenAI/Gemini)
- Funcionalidades inteligentes
- Análisis y reportes
- Optimizaciones y mejoras de rendimiento

### Flujo de Trabajo

1. **Sprint Planning**: Reunión semanal para asignar tareas
2. **Code Review**: Revisión obligatoria antes de merge
3. **Testing**: Pruebas unitarias e integración
4. **Documentation**: Mantener documentación actualizada

## 🛠️ Stack Tecnológico

**Backend**
- Node.js + Express.js
- MongoDB + Mongoose
- JWT para autenticación
- bcryptjs para encriptación
- express-validator para validaciones

**Inteligencia Artificial**
- Google Gemini API
- Procesamiento de lenguaje natural

**DevOps & Testing**
- Jest para testing
- ESLint + Prettier
- Nodemon para desarrollo
- Morgan para logging

## 📁 Estructura del Proyecto

```
project-manager-api/
├── src/
│   ├── controllers/        # Controladores de rutas
│   ├── models/            # Modelos de Mongoose
│   ├── routes/            # Definición de rutas
│   ├── middleware/        # Middleware personalizado
│   ├── services/          # Lógica de negocio
│   ├── utils/             # Utilidades generales
│   ├── config/            # Configuraciones
│   └── validators/        # Validaciones de entrada
├── tests/                 # Pruebas unitarias e integración
├── docs/                  # Documentación adicional
├── scripts/               # Scripts de utilidad
└── package.json
```

## 🧪 Testing

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo watch
npm run test:watch

# Generar reporte de cobertura
npm run test:coverage

# Pruebas específicas
npm test -- --grep "Auth"
```

## 🚀 Despliegue

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm run build
npm start
```

### Docker (Opcional)
```bash
docker build -t project-manager-api .
docker run -p 3000:3000 project-manager-api
```

## 📊 Funcionalidades de IA

### 🤖 Generación Automática
- **Tareas**: Crear tareas basadas en descripción del proyecto
- **Estimaciones**: Predicción inteligente de duración
- **Resúmenes**: Reportes automáticos de progreso

### 📈 Análisis Inteligente
- **Sugerencias de Mejora**: Basadas en comentarios y estados
- **Análisis de Rendimiento**: Métricas de equipo y proyecto
- **Predicciones**: Fechas de finalización y recursos necesarios

## 🔒 Seguridad

- **Autenticación JWT** con refresh tokens
- **Encriptación** de contraseñas con bcrypt
- **Validación** de entrada en todos los endpoints
- **Rate limiting** para prevenir abusos
- **CORS** configurado apropiadamente
- **Helmet** para headers de seguridad

## 📈 Roadmap

### Fase 1 - MVP (4 semanas)
- [x] Configuración inicial
- [ ] Sistema de autenticación
- [ ] CRUD básico de proyectos y tareas
- [ ] Roles y permisos básicos

### Fase 2 - Funcionalidades Core (3 semanas)
- [ ] Sistema de comentarios
- [ ] Estados avanzados
- [ ] Integración básica de IA
- [ ] Testing completo

### Fase 3 - IA y Optimizaciones (3 semanas)
- [ ] Funcionalidades avanzadas de IA
- [ ] Análisis y reportes
- [ ] Optimización de rendimiento
- [ ] Documentación completa

## 🤝 Contribución

### Guías de Desarrollo

1. **Fork** el repositorio
2. **Crear** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a tu rama (`git push origin feature/AmazingFeature`)
5. **Abrir** un Pull Request

### Convenciones de Código

```javascript
// Usar camelCase para variables y funciones
const userName = 'john_doe';

// Usar PascalCase para clases y constructores
class UserService {
  constructor() {}
}

// Usar UPPER_SNAKE_CASE para constantes
const MAX_RETRY_ATTEMPTS = 3;
```

## 📞 Contacto y Soporte

**Equipo de Desarrollo:**
- **Tech Lead**: [Nombre] - email@example.com
- **Backend Developer**: [Nombre] - email@example.com  
- **AI Specialist**: [Nombre] - email@example.com

**Links Útiles:**
- [Documentación API](./docs/API.md)
- [Guía de Instalación](./docs/INSTALLATION.md)
- [Casos de Uso](./docs/USE_CASES.md)
- [FAQ](./docs/FAQ.md)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

---

## 🎯 Objetivos del Proyecto

**Objetivos Técnicos:**
- Crear una API escalable y mantenible
- Implementar mejores prácticas de desarrollo
- Integrar IA de forma efectiva y útil
- Lograr 90%+ de cobertura de testing

**Objetivos de Negocio:**
- Mejorar la productividad de equipos de desarrollo
- Reducir tiempo de gestión de proyectos en 40%
- Proporcionar insights inteligentes para toma de decisiones
- Crear una base sólida para futuras expansiones

**¡Comencemos a construir algo increíble juntos! 🚀**
