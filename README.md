# Study Planner - Gestor de Actividades Evaluativas

Un planificador de estudio inteligente diseñado para ayudar a estudiantes universitarios a organizar sus actividades evaluativas, descomponerlas en subtareas y gestionar su carga de trabajo diaria de manera eficiente.

## 🚀 Características

- **Gestión de Actividades**: Crea exámenes, quizzes, talleres y proyectos con fechas límite claras.
- **Descomposición de Tareas**: Divide cada actividad en subtareas manejables con estimación de horas.
- **Vista de Hoy (Próximamente)**: Visualización priorizada de tareas pendientes basadas en la fecha de entrega y capacidad diaria.
- **Seguimiento de Progreso**: Control visual del avance de cada actividad.

## 🛠️ Tech Stack

- **Frontend**: [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/) + CSS Vanilla (Premium Design system)
- **Backend**: [Django](https://www.djangoproject.com/) + [Django REST Framework](https://www.django-rest-framework.org/)
- **Base de Datos**: [PostgreSQL](https://www.postgresql.org/) (alojada en [Supabase](https://supabase.com/))
- **Despliegue**:
    - Backend: [Render](https://render.com/)
    - Frontend: [Vercel](https://vercel.com/)

## 📂 Estructura del Proyecto

```text
├── backend/            # API de Django
│   ├── api/            # Lógica de la aplicación (Modelos, Vistas, Serializers)
│   ├── core/           # Configuración del proyecto Django
│   ├── build.sh        # Script de construcción para Render
│   └── requirements.txt
├── frontend/           # Aplicación React
│   ├── src/
│   │   ├── components/ # Componentes reutilizables
│   │   ├── styles/     # Sistema de diseño CSS
│   │   └── App.jsx     # Enrutamiento y estructura principal
│   └── vercel.json     # Configuración de despliegue
└── render.yaml         # Configuración de Blueprint para Render
```

## ⚙️ Instalación Local

### Backend

1. Navega a la carpeta backend:
   ```bash
   cd backend
   ```
2. Crea y activa un entorno virtual:
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```
3. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```
4. Configura el archivo `.env` (usa `.env.example` como guía).
5. Ejecuta las migraciones:
   ```bash
   python manage.py migrate
   ```
6. Inicia el servidor:
   ```bash
   python manage.py runserver
   ```

### Frontend

1. Navega a la carpeta frontend:
   ```bash
   cd frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🌐 Despliegue

La aplicación se encuentra desplegada en:
- **Frontend**: [Vercel URL]
- **Backend**: [Render URL]

## 📄 Licencia

Este proyecto fue desarrollado como parte del Proyecto Integrador I.
