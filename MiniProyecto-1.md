# **Mini-proyecto 1: Planificador de estudio para actividades evaluativas**

## **1\. Contexto y problema**

Los estudiantes universitarios necesitan **planificar, ejecutar y reprogramar** el trabajo asociado a actividades evaluativas[^1], así como **visualizar su progreso y prioridades sin fricción**, especialmente cuando surgen imprevistos (cambios de fechas, acumulación de tareas, sobrecarga semanal).

Este mini-proyecto propone construir un producto digital que permita gestionar ese proceso de forma clara, eficiente y **centrada en las personas usuarias**.

## **2\. Objetivo del producto**

Construir una **aplicación web** que permita:

1. **Crear actividades evaluativas y su plan de trabajo inicial**.  
2. **Registrar la ejecución** (avance real).  
3. **Reprogramar ante imprevistos**, detectando y resolviendo conflictos.  
4. **Visualizar progreso y prioridades para el momento presente, “hoy”**, con criterios comprensibles.

## **3\. Tareas núcleo (trazabilidad UX/HCI)**

El producto debe soportar estas tareas núcleo (se evaluará con trazabilidad explícita):

* **T1. Crear actividad \+ plan inicial:** Crear una actividad evaluativa e ingresar un plan inicial de trabajo (subtareas / hitos).  
* **T2. Ver prioridades “hoy”:** Visualizar qué debe hacerse hoy y qué requiere atención inmediata, con reglas de priorización claras.  
* **T3. Reprogramar y resolver conflicto:** Cambiar fechas del plan o actividad y **resolver un conflicto** generado por la reprogramación.  
* **T4. Registrar avance y ver progreso:** Registrar ejecución real (hecho/pospuesto) y visualizar el progreso del trabajo.

## **4\. Alcance funcional mínimo (MVP)**

El producto final debe incluir como mínimo, para el usuario registrado:

* Gestión de **actividades evaluativas** (crear, editar y eliminar).  
* Gestión de **plan de trabajo** por actividad (subtareas con fecha objetivo y estimación simple).  
* Vista **“Hoy”** con prioridades (reglas de prioridad documentadas).  
* **Reprogramación** de subtareas/actividad con detección y resolución de **al menos un tipo de conflicto**.  
* Registro de avance (hecho/pospuesto \+ nota opcional) y vista de **progreso** por actividad.

### **Definición de conflicto (estándar mínimo del mini-proyecto)**

Para estandarizar evaluación entre equipos, se usará el siguiente conflicto:

* **Conflicto por sobrecarga diaria**: ocurre cuando la suma de las horas estimadas planificadas para un día, supera un límite por defecto definido por el usuario (p. ej. 6 horas/día) .

El sistema debe:

1. detectar el conflicto,  
2. comunicarlo con claridad, y  
3. ofrecer alternativas para resolverlo (mover, reducir estimación, posponer, etc.).

## **5\. Requerimientos no funcionales (calidad UX/HCI)**

Se evaluarán explícitamente los siguientes aspectos:

* **Usabilidad**: aplicación de heurísticas [(Nielsen, 2024\)](https://www.zotero.org/google-docs/?QrWgBn).  
* **Estados del sistema**: pantallas con estados mínimos (vacío, cargando, error, éxito) donde aplique.  
* **Accesibilidad e inclusión (mínimo)**: navegación por teclado en flujos principales, foco visible, labels en formularios, contraste suficiente y mensajes de error claros.  
* **UX Writing**: microtextos claros en confirmaciones, errores, vacíos y estados; no es componente evaluativo autónomo, pero se revisa como parte de la calidad.

## **6\. Alcance técnico mínimo**

### **Arquitectura**

* **Front-end:** React (SPA) con rutas mínimas:  
  `/hoy`, `/crear`, `/actividad/:id`, `/progreso, /auth`  
* **Back-end:** API (Django REST Framework)  
* **Persistencia:** base de datos (según stack del equipo, SQL \- [Supabase](https://supabase.com/) o NoSQL \- [MongoDB](https://www.mongodb.com/))

### **Autenticación (por sprints)**

* **Sprint 0–1:** se permite trabajar con **usuario demo** (sin login) para acelerar el MVP.  
* **A partir de Sprint 2:** se requiere **login** (autenticación mínima) y protección de rutas; los datos deben asociarse al usuario autenticado.

### **Despliegue**

* El producto debe quedar desplegado con **URL accesible** (front en [**Vercel**](https://vercel.com/)) y API accesible (en [**Render**](https://render.com/)).

## **7\. Entregables y evidencias (por equipo)**

Cada equipo debe mantener un **Documento Único de Evidencias** (enlace compartido) que contenga:

* Links a: repositorio, tablero, prototipo en despliegue.  
* Evidencia por sprint: capturas, PRs, endpoints, decisiones UX/HCI, bitácora de iteración.  
* Reportes de evaluación (heurística y prueba con usuarios, según sprint).

## **8\. Organización y coordinación del equipo**

Dado que el trabajo independiente es de **8 horas por estudiante por semana**, el equipo debe:

* Mantener un **tablero Kanban** actualizado (To do / Doing / Done / Blocked).  
* Publicar un **plan semanal por estudiante** (3–5 tareas máximo, con definición de terminado y evidencia).

## **9\. Cronograma (6 sprints \+ semana de depuración)**

El mini-proyecto se desarrolla en **6 sprints (6 clases)**:

* **Sprint 0:** equipos \+ reglas \+ requisitos base \+ backlog refinado \+ prototipo “Hoy” v1 \+ setup técnico.  
* **Sprint 1:** T1 Crear actividad \+ plan inicial (usuario demo).  
* **Sprint 2:** T2 “Hoy” \+ **login del usuario**.  
* **Sprint 3:** T3 Reprogramar \+ conflicto/resolución.  
* **Sprint 4:** T4 Registrar avance \+ Progreso.  
* **Sprint 5:** Evaluación UX \+ accesibilidad mínima \+ estabilización \+ despliegue.

**Notas:**

* **(usuario demo vs usuario registrado):** Aunque la entrega final opera con usuario autenticado (usuario registrado), en **Sprint 0–1** se permite un **usuario demo** para acelerar el avance del MVP. Desde **Sprint 2** es obligatorio implementar autenticación y asociar los datos al usuario.  
* **Semana Santa:** semana dedicada a **depuración y mejora final**, sin introducir funcionalidades nuevas.

## **10\. Criterio general de “Definition of Done” (DoD)**

Una historia/tarea se considera “terminada” cuando:

1. Funciona **end-to-end** (React ↔ API ↔ BD).  
2. Incluye estados y mensajes requeridos (según corresponda).  
3. Cumple mínimos de accesibilidad definidos.  
4. Tiene evidencia publicada (link/captura/PR) en el Documento Único de Evidencias por equipo.

## **11\. Especificación de Roles**

A continuación, se presenta la especificación de los roles que deben ser asignados a cada miembro del equipo.  Estos roles son de liderazgo y foco, no de exclusión. Asumir un rol NO implica dejar de programar. Todas las personas deben aportar evidencia verificable; el rol define el tipo de liderazgo y las responsabilidades principales.

| Rol | Responsabilidades principales | Evidencia típica | Lo que NO se espera / Aclaraciones |
| ----- | ----- | ----- | ----- |
| **Coordinación / (rotativo)** | Asegura claridad del sprint: objetivo, alcance, prioridades; distribuye trabajo; controla tablero; gestiona bloqueos; convoca acuerdos breves | Acta breve (5 bullets), backlog refinado (Gherkin), tablero actualizado con dueños/DoD | **No** es “jefe” ni hace todo.  **No** reemplaza al equipo en decisiones técnicas.  **Sí debe aportar** al producto (p. ej., PR pequeño, documentación útil o QA). |
| **UX Lead (rotativo)** | Lidera comprensión de usuario, flujos, estados, mensajes; asegura trazabilidad T1–T4; coordina evidencia UX (decisiones, bitácora); impulsa accesibilidad mínima en UI | Prototipo iterado, decisiones UX/HCI justificadas, criterios de aceptación UX, hallazgos de evaluación. | **No** es “solo diseñador/a”.  **No** implica “no programar”. Debe colaborar con FE y puede hacer PRs de UI/microcopy/estados. |
| **FE Lead (rotativo)** | Implementa rutas SPA, componentes, formularios, estados; integra API; maneja errores en UI; apoya accesibilidad (foco/teclado/labels); variables de entorno | PR UI \+ integración, capturas de estados, verificación Accesibilidad. | **No** significa “no toca backend”. Debe entender el contrato API y puede apoyar en endpoints o pruebas. |
| **BE Lead (rotativo)** | Implementa modelos, endpoints, validaciones, auth (cuando aplique), manejo de errores; documenta contrato API; asegura consistencia de datos; variables de entorno | PR endpoints \+ ejemplos request/response, validaciones, auth, docs API | **No** significa “no toca front”. Debe probar flujos completos y puede corregir UI mínima para integrar. |
| **QA / Accesibilidad (rotativo)** | Diseña casos de prueba, detecta bugs reproducibles, controla regresión; lidera checklist accesibilidad mínimo; verifica before/after | Issues reproducibles con severidad, checklist accesibilidad y con evidencia, verificación de correcciones | **No** es “policía” ni solo reporta; también debe contribuir a correcciones o PRs pequeños.  **No** reemplaza la responsabilidad de calidad del resto. |

### 

### 

### **Reglas complementarias:**

* **Rotación semanal**: nadie se “queda” con un rol todo el proyecto.  
* **Mínimo de contribución cruzada:** cada estudiante, además de su foco, debe hacer al menos una de estas por sprint: PR review, bugfix, mejora de mensaje/estado, documentación de endpoint, prueba reproducible.

[Ver Historias de Usuario e Historias Técnicas habilitadoras](https://docs.google.com/document/u/0/d/1IJtP8BrNXhKJYZdjDi9u-TMM8LHJzKxKUqA-n_DEgJ8/edit)  
[Ver Bitácora Sprints](https://docs.google.com/document/u/0/d/16lm3krA_-TTWkGzH_oTKXqCcIrWDc4MIqFHuID-6bkI/edit)

[^1]:  Una actividad evaluativa puede ser: exámen, quiz, tarea, taller, entrega, exposición, etc.), es decir, todo aquello que será evaluado en el contexto de un curso. 