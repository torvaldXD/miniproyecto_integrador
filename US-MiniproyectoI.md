# **Backlog del Mini proyecto 1**  {#backlog-del-mini-proyecto-1}

# **(US-01 a US-12) — con criterios de aceptación (Gherkin) e Historias técnicas habilitadoras (TS)**  {#(us-01-a-us-12)-—-con-criterios-de-aceptación-(gherkin)-e-historias-técnicas-habilitadoras-(ts)}

**Índice**

[**Backlog del Mini proyecto 1	1**](#backlog-del-mini-proyecto-1)

[**(US-01 a US-12) — con criterios de aceptación (Gherkin) e Historias técnicas habilitadoras (TS)	1**](#\(us-01-a-us-12\)-—-con-criterios-de-aceptación-\(gherkin\)-e-historias-técnicas-habilitadoras-\(ts\))

[Convenciones (aplican a todas las historias)	2](#convenciones-\(aplican-a-todas-las-historias\))

[US-01 — Crear actividad evaluativa (T1)	3](#us-01-—-crear-actividad-evaluativa-\(t1\))

[Criterios de aceptación (Gherkin)	3](#criterios-de-aceptación-\(gherkin\))

[US-02 — Crear plan inicial (subtareas) para una actividad (T1)	4](#us-02-—-crear-plan-inicial-\(subtareas\)-para-una-actividad-\(t1\))

[Criterios de aceptación (Gherkin)	4](#criterios-de-aceptación-\(gherkin\)-1)

[US-03 — Editar/eliminar actividad y subtareas	4](#us-03-—-editar/eliminar-actividad-y-subtareas-\(t1\))

[Criterios de aceptación (Gherkin)	4](#criterios-de-aceptación-\(gherkin\)-2)

[US-04 — Ver prioridades “Hoy” (T2)	5](#us-04-—-ver-prioridades-“hoy”-\(t2\))

[Criterios de aceptación (Gherkin)	5](#criterios-de-aceptación-\(gherkin\)-3)

[US-05 — Filtros básicos en “Hoy” (T2)	6](#us-05-—-filtros-básicos-en-“hoy”-\(t2\))

[Criterios de aceptación (Gherkin)	7](#criterios-de-aceptación-\(gherkin\)-4)

[US-06 — Reprogramar subtarea/actividad (T3)	7](#us-06-—-reprogramar-subtarea/actividad-\(t3\))

[Criterios de aceptación (Gherkin)	7](#criterios-de-aceptación-\(gherkin\)-5)

[US-07 — Detectar conflicto por sobrecarga diaria al reprogramar (T3)	7](#us-07-—-detectar-conflicto-por-sobrecarga-diaria-al-reprogramar-\(t3\))

[Criterios de aceptación (Gherkin)	8](#criterios-de-aceptación-\(gherkin\)-6)

[US-08 — Resolver conflicto (T3)	8](#us-08-—-resolver-conflicto-\(t3\))

[Criterios de aceptación (Gherkin)	8](#criterios-de-aceptación-\(gherkin\)-7)

[US-09 — Registrar avance (T4)	9](#us-09-—-registrar-avance-\(t4\))

[Criterios de aceptación (Gherkin)	9](#criterios-de-aceptación-\(gherkin\)-8)

[US-10 — Ver progreso por actividad (T4)	9](#us-10-—-ver-progreso-por-actividad-\(t4\))

[Criterios de aceptación (Gherkin)	10](#criterios-de-aceptación-\(gherkin\)-9)

[US-11 — Autenticación mínima (login local) — desde Sprint 2	10](#us-11-—-autenticación-mínima-\(login-local\)-—-desde-sprint-2)

[Criterios de aceptación (Gherkin)	10](#criterios-de-aceptación-\(gherkin\)-10)

[US-12 — Configurar límite diario (capacidad)	11](#us-12-—-configurar-límite-diario-\(capacidad\))

[Criterios de aceptación (Gherkin)	11](#criterios-de-aceptación-\(gherkin\)-11)

[**Historias técnicas habilitadoras (TS)	12**](#historias-técnicas-habilitadoras-\(ts\))

[TS-01 — Base técnica y estándares del repositorio (Sprint 0\)	12](#ts-01-—-base-técnica-y-estándares-del-repositorio-\(sprint-0\))

[TS-02 — Modelo de datos \+ migraciones/seed (Sprint 0–1)	13](#ts-02-—-modelo-de-datos-+-migraciones/seed-\(sprint-0–1\))

[TS-03 — Contrato API y manejo estándar de errores (Sprint 1–2)	13](#ts-03-—-contrato-api-y-manejo-estándar-de-errores-\(sprint-1–2\))

[TS-04 — Autenticación mínima y protección de rutas (Sprint 2\)	13](#ts-04-—-autenticación-mínima-y-protección-de-rutas-\(sprint-2\))

[TS-05 — Despliegue y reproducibilidad (Release) (Sprint 5\)	13](#ts-05-—-despliegue-y-reproducibilidad-\(release\)-\(sprint-5\))

[TS-06 — Accesibilidad mínima implementada como estándar transversal (Sprint 2–5)	14](#ts-06-—-accesibilidad-mínima-implementada-como-estándar-transversal-\(sprint-2–5\))

[**Reglas para que el equipo cree sus propias historias técnicas como forma de organización	14**](#reglas-para-que-el-equipo-cree-sus-propias-historias-técnicas-como-forma-de-organización)

[Reglas:	14](#reglas:)

[Ejemplos de TS que sí pueden crear	14](#ejemplos-de-ts-que-sí-pueden-crear)

## 

* **Historias de Usuario (US):**  describen funcionalidades del producto desde la  perspectiva del usuario final (“Como estudiante, quiero…, para…”). Son el “qué” del producto y se validan con criterios de aceptación (Gherkin) observables en la interfaz y el comportamiento del sistema.   
* **Historias Técnicas Habilitadoras (TS):**  describen trabajo técnico necesario para poder construir, integrar, asegurar calidad o entregar las historias de usuario (por ejemplo, autenticación, modelo de datos, contrato de API, despliegue). Las TS **no agregan valor directo al usuario por sí solas**, pero habilitan que las US funcionen end-to-end y cumplan el Definition of Done. 

En su tablero de gestión del proceso de desarrollo las US representan el valor funcional del MVP y las TS representan la infraestructura y calidad mínima para hacerlo posible; ambas se planifican por sprint y deben cerrar con evidencia verificable (PR, endpoints, capturas y/o enlaces) en el Documento Único de Evidencias.

## **Convenciones (aplican a todas las historias)** {#convenciones-(aplican-a-todas-las-historias)}

* **DoD del curso (obligatorio):** una historia está “Done” cuando:   
  1. funciona end-to-end (React ↔ API ↔ BD),   
  2. incluye estados y mensajes requeridos,   
  3. cumple mínimos de accesibilidad definidos, y   
  4. tiene evidencia publicada (link/captura/PR) en el Documento Único de Evidencias.  
* **Evidencia mínima por historia:** enlace a PR/commit \+ 1 captura de éxito \+ 1 captura de error controlado (cuando aplique).  
* **Sprints:**   
  1. Sprint 0–1 pueden operar con usuario demo;   
  2. desde Sprint 2 se exige login local (US-11) y datos por usuario.

## **US-01 — Crear actividad evaluativa (T1)** {#us-01-—-crear-actividad-evaluativa-(t1)}

**Como** estudiante, **quiero** crear una actividad evaluativa con información mínima, **para** poder planificarla.

**Campos mínimos sugeridos:** título, tipo (examen/quiz/taller/proyecto/otro), curso (texto), fecha/hora del evento (opcional si aplica), fecha límite (si aplica).

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)}

**Escenario 1: Creación exitosa**

* **Dado** que estoy en la vista de crear actividad  
* **Cuando** ingreso los campos mínimos válidos y confirmo “Guardar”  
* **Entonces** el sistema crea la actividad  
* **Y** muestra un mensaje de éxito claro y entendible para mi  
* **Y** la actividad queda visible en su lista o detalle

**Escenario 2: Validación de campos obligatorios**

* **Dado** que estoy creando una actividad  
* **Cuando** intento guardar con campos obligatorios vacíos  
* **Entonces** el sistema muestra mensajes de error comprensibles junto a los campos  
* **Y** no crea la actividad

## **US-02 — Crear plan inicial (subtareas) para una actividad (T1)** {#us-02-—-crear-plan-inicial-(subtareas)-para-una-actividad-(t1)}

**Como** estudiante, **quiero** descomponer una actividad en subtareas con fecha objetivo y estimación, **para** planificar mi trabajo.

**Campos mínimos por subtarea:** nombre, fecha objetivo, horas estimadas (entero o decimal simple).

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)-1}

**Escenario 1: Agregar subtareas**

* **Dado** que existe una actividad  
* **Cuando** agrego una subtarea con datos válidos  
* **Entonces** el sistema guarda la subtarea asociada a la actividad  
* **Y** la subtarea aparece listada en el detalle de la actividad

**Escenario 2: Validación**

* **Dado** que intento crear una subtarea  
* **Cuando** dejo el nombre vacío o las horas en 0  
* **Entonces** el sistema muestra un error claro  
* **Y** no guarda la subtarea

## **US-03 — Editar/eliminar actividad y subtareas (T1)** {#us-03-—-editar/eliminar-actividad-y-subtareas-(t1)}

**Como** estudiante, **quiero** editar o eliminar actividades/subtareas, **para** mantener mi plan actualizado.

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)-2}

**Escenario 1: Editar**

* **Dado** que existe una actividad o subtarea  
* **Cuando** edito un campo válido y guardo  
* **Entonces** el sistema actualiza el elemento  
* **Y** el cambio se refleja al recargar la vista

**Escenario 2: Eliminar con confirmación**

* **Dado** que deseo eliminar una actividad o subtarea  
* **Cuando** selecciono “Eliminar”  
* **Entonces** el sistema solicita confirmación  
* **Y** si confirmo, elimina el elemento y actualiza la vista

## **US-04 — Ver prioridades “Hoy” (T2)** {#us-04-—-ver-prioridades-“hoy”-(t2)}

**Como** estudiante, **quiero** ver una vista “Hoy” con lo urgente y lo próximo, con reglas claras, **para** decidir qué hacer primero.

**Regla base obligatoria:**

* Agrupar subtareas en **Vencidas / Para hoy / Próximas (N días)**.  
* Orden: **Vencidas primero (más antiguas arriba)**, luego **Para hoy**, luego **Próximas** por fecha más cercana.  
* Empate: **menor esfuerzo estimado primero**.  
* La regla debe estar **documentada y visible** en UI (2–4 líneas).

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)-3}

**Escenario 1: Agrupación por vencidas/hoy/próximas**

* **Dado** que tengo subtareas con fecha objetivo anterior a hoy, igual a hoy y posterior a hoy  
* **Cuando** ingreso a la vista **/hoy**  
* **Entonces** el sistema muestra primero **Vencidas**, luego **Para hoy**, y luego **Próximas**  
* **Y** cada subtarea aparece en el grupo correcto según su fecha objetivo

**Escenario 2: Orden dentro de Vencidas y Próximas**

* **Dado** que tengo dos subtareas vencidas con fechas distintas  
* **Cuando** ingreso a **/hoy**  
* **Entonces** la subtarea con fecha más antigua aparece primero en **Vencidas**  
* **Dado** que tengo dos subtareas próximas con fechas distintas  
* **Cuando** ingreso a **/hoy**  
* **Entonces** la subtarea con fecha más cercana aparece primero en **Próximas**

**Escenario 3: Desempate por esfuerzo**

* **Dado** que tengo dos subtareas con la misma fecha objetivo en el mismo grupo  
* **Y** una tiene menor esfuerzo estimado  
* **Cuando** ingreso a **/hoy**  
* **Entonces** el sistema muestra primero la subtarea de menor esfuerzo

**Escenario 4: Regla visible y coherente**

* **Dado** que estoy en **/hoy**  
* **Cuando** consulto “¿Cómo se ordena esto?” (texto/tooltip)  
* **Entonces** veo la regla en 2–4 líneas  
* **Y** esa regla coincide con el orden observado

**Escenario 5: Estados UX mínimos**

* **Dado** que no tengo subtareas  
* **Cuando** ingreso a **/hoy**  
* **Entonces** veo un estado **vacío** con una acción sugerida (“Crear actividad”)  
* **Dado** que ocurre un error al cargar  
* **Cuando** ingreso a **/hoy**  
* **Entonces** veo un estado **error** comprensible y opción de reintentar

## **US-05 — Filtros básicos en “Hoy” (T2)** {#us-05-—-filtros-básicos-en-“hoy”-(t2)}

**Como** estudiante, **quiero** filtrar la vista “Hoy” (por curso/estado), **para** enfocarme sin ruido.

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)-4}

**Escenario 1: Filtrar**

* **Dado** que estoy en **/hoy**  
* **Cuando** aplico un filtro por curso o estado  
* **Entonces** la lista se actualiza manteniendo la regla de prioridad  
* **Y** puedo limpiar el filtro y volver a ver todo

## **US-06 — Reprogramar subtarea/actividad (T3)** {#us-06-—-reprogramar-subtarea/actividad-(t3)}

**Como** estudiante, **quiero** reprogramar fechas, **para** adaptarme a imprevistos.

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)-5}

**Escenario 1: Reprogramación exitosa**

* **Dado** que existe una subtarea  
* **Cuando** cambio su fecha objetivo a una fecha válida y guardo  
* **Entonces** el sistema guarda el cambio  
* **Y** la subtarea aparece en el grupo correspondiente en **/hoy**

## **US-07 — Detectar conflicto por sobrecarga diaria al reprogramar (T3)** {#us-07-—-detectar-conflicto-por-sobrecarga-diaria-al-reprogramar-(t3)}

**Como** estudiante, **quiero** que el sistema detecte sobrecarga diaria al reprogramar, **para** evitar planes imposibles.

**Conflicto estándar:** ocurre cuando la suma de horas estimadas planificadas para un día supera el **límite diario configurable** (US-12).

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)-6}

**Escenario 1: Conflicto detectado**

* **Dado** que mi límite diario es **6 horas**  
* **Y** el día X ya tiene **5 horas** planificadas  
* **Cuando** reprogramo una subtarea de **2 horas** para el día X  
* **Entonces** el sistema detecta **conflicto de sobrecarga**  
* **Y** informa “Quedarías con 7h planificadas (límite 6h)”

**Escenario 2: Sin conflicto**

* **Dado** que mi límite diario es 6 horas  
* **Y** el día X tiene 4 horas planificadas  
* **Cuando** reprogramo una subtarea de 2 horas para el día X  
* **Entonces** el sistema permite guardar sin conflicto

**Escenario 3: Respuesta accionable**

* **Dado** que se detectó conflicto  
* **Cuando** el sistema muestra el conflicto  
* **Entonces** ofrece opciones claras para resolverlo (mover/reducir/posponer)  
* **Y** los textos son comprensibles y sin jerga

## 

## **US-08 — Resolver conflicto (T3)** {#us-08-—-resolver-conflicto-(t3)}

**Como** estudiante, **quiero** escoger una alternativa para resolver el conflicto, **para** recuperar un plan viable.

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)-7}

**Escenario 1: Resolver moviendo**

* **Dado** que hay un conflicto de sobrecarga  
* **Cuando** elijo mover la subtarea a otro día sugerido o seleccionado  
* **Entonces** el sistema guarda la reprogramación  
* **Y** el conflicto deja de existir para ese día

**Escenario 2: Resolver reduciendo horas**

* **Dado** que hay conflicto  
* **Cuando** reduzco horas estimadas (dentro de un rango válido) y confirmo  
* **Entonces** el sistema actualiza la estimación  
* **Y** recalcula el conflicto (resuelto o persiste si aún excede el límite)

## **US-09 — Registrar avance (T4)** {#us-09-—-registrar-avance-(t4)}

**Como** estudiante, **quiero** registrar una subtarea como hecha o pospuesta (nota opcional), **para** reflejar ejecución real.

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)-8}

**Escenario 1: Marcar hecho**

* **Dado** que tengo una subtarea pendiente  
* **Cuando** la marco como “Hecha”  
* **Entonces** el sistema guarda el estado  
* **Y** la subtarea cambia de estado en la UI

**Escenario 2: Posponer con nota**

* **Dado** una subtarea pendiente  
* **Cuando** la marco como “Pospuesta” e ingreso una nota opcional  
* **Entonces** el sistema guarda el estado y la nota

## **US-10 — Ver progreso por actividad (T4)** {#us-10-—-ver-progreso-por-actividad-(t4)}

**Como** estudiante, **quiero** ver el progreso por actividad, **para** saber cuánto falta.

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)-9}

**Escenario 1: Progreso visible**

* **Dado** que una actividad tiene subtareas en distintos estados  
* **Cuando** consulto el progreso de la actividad  
* **Entonces** el sistema muestra el avance (porcentaje o conteo)  
* **Y** es consistente con los estados reales de subtareas

## **US-11 — Autenticación mínima (login local) — desde Sprint 2** {#us-11-—-autenticación-mínima-(login-local)-—-desde-sprint-2}

**Como** estudiante, **quiero** iniciar sesión, **para** que mis datos sean privados y persistentes por usuario.

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)-10}

**Escenario 1: Login exitoso**

* **Dado** que tengo una cuenta válida  
* **Cuando** ingreso credenciales correctas y hago clic en “Iniciar sesión”  
* **Entonces** el sistema inicia sesión  
* **Y** puedo acceder a **/hoy**, **/crear**, **/actividad/:id**, **/progreso**

**Escenario 2: Credenciales inválidas**

* **Dado** que ingreso credenciales incorrectas  
* **Cuando** intento iniciar sesión  
* **Entonces** el sistema no inicia sesión  
* **Y** muestra un mensaje claro (“Credenciales inválidas”)  
* **Y** no revela información sensible (por ejemplo, si el usuario existe)

**Escenario 3: Rutas protegidas**

* **Dado** que no he iniciado sesión  
* **Cuando** intento entrar a **/hoy**  
* **Entonces** el sistema me redirige a **/login** o bloquea el acceso  
* **Y** no muestra datos privados

**Escenario 4: Aislamiento de datos por usuario**

* **Dado** que el usuario A tiene actividades  
* **Y** el usuario B no tiene  
* **Cuando** ingreso como usuario B  
* **Entonces** no puedo ver las actividades del usuario A

## **US-12 — Configurar límite diario (capacidad)** {#us-12-—-configurar-límite-diario-(capacidad)}

**Como** estudiante, **quiero** configurar mi límite de horas/día, **para** que el sistema detecte sobrecarga según mi realidad.

**Valor por defecto:** 6 horas/día (si el usuario no configura).

### **Criterios de aceptación (Gherkin)** {#criterios-de-aceptación-(gherkin)-11}

**Escenario 1: Ver límite actual**

* **Dado** que he iniciado sesión  
* **Cuando** entro a configuración de capacidad diaria  
* **Entonces** veo mi límite actual (por defecto 6h si no existe uno guardado)

**Escenario 2: Actualizar límite válido**

* **Dado** que mi límite actual es 6h  
* **Cuando** actualizo a 4h y guardo  
* **Entonces** el sistema guarda el nuevo límite  
* **Y** US-07 (conflicto) se evalúa con el nuevo valor

**Escenario 3: Validación de rango**

* **Dado** que intento guardar un límite menor que 1 o mayor que 16  
* **Cuando** guardo  
* **Entonces** el sistema no guarda  
* **Y** muestra un mensaje claro con el rango permitido

**Escenario 4: Persistencia por usuario**

* **Dado** que el usuario A tiene límite 6h y el usuario B tiene límite 4h  
* **Cuando** inicio sesión como usuario B  
* **Entonces** el sistema usa 4h como límite diario

# **Historias técnicas habilitadoras (TS)**  {#historias-técnicas-habilitadoras-(ts)}

A continuación se establece un **conjunto mínimo y suficiente** de **Historias Técnicas Habilitadoras (TS)** para este mini-proyecto y algunas reglas claras para el equipo de trabajo en caso que deseen definir sus propias TS como forma de organización del equipo.

**Principio:** una TS existe para **hacer posible** una o varias US (no para “agregar funciones nuevas”). Por eso cada TS incluye trazabilidad “habilita a: US-xx”.

### **TS-01 — Base técnica y estándares del repositorio (Sprint 0\)** {#ts-01-—-base-técnica-y-estándares-del-repositorio-(sprint-0)}

**Propósito:** arrancar con estructura profesional mínima para trabajar sin fricción.  
**Habilita:** todas las US.  
**Incluye:** estructura de repositorio; configuración básica; scripts; formato/lint; convenciones de ramas/PR; plantilla de issue/PR (si aplica).  
**Criterio Done:** proyecto corre local (front \+ API), README mínimo de arranque, y un PR inicial.

### **TS-02 — Modelo de datos \+ migraciones/seed (Sprint 0–1)** {#ts-02-—-modelo-de-datos-+-migraciones/seed-(sprint-0–1)}

**Propósito:** asegurar persistencia y coherencia de datos.  
**Habilita:** US-01, US-02, US-03, US-04, US-06, US-07, US-09, US-10, US-12.  
**Incluye:** entidades mínimas (usuario, actividad, subtarea, configuración de capacidad diaria), relaciones, migraciones; datos semilla opcionales.  
**Criterio Done:** BD creada y migrada; endpoints pueden persistir/leer; datos se mantienen entre reinicios.

### **TS-03 — Contrato API y manejo estándar de errores (Sprint 1–2)** {#ts-03-—-contrato-api-y-manejo-estándar-de-errores-(sprint-1–2)}

**Propósito:** evitar “cada endpoint responde distinto” y asegurar mensajes claros para FE.  
**Habilita:** todas las US con API.  
**Incluye:** convención de respuestas (status codes), payload de error consistente, endpoint de health, validaciones BE, y mensajes de error aptos para UI (sin jerga).  
**Criterio Done:** al menos 3 endpoints siguen el estándar; error 400/401/404 manejado de forma uniforme; evidencia en Documento Único.

### 

### **TS-04 — Autenticación mínima y protección de rutas (Sprint 2\)** {#ts-04-—-autenticación-mínima-y-protección-de-rutas-(sprint-2)}

**Propósito:** privacidad y aislamiento por usuario.  
**Habilita:** US-11 (login) y “para el usuario registrado” (todas las US desde Sprint 2).  
**Incluye:** login local, sesión/token, middleware/guard de rutas, aislamiento de datos por usuario.  
**Criterio Done:** cumple los Gherkin de login y rutas protegidas; usuario A no ve datos de B.

### **TS-05 — Despliegue y reproducibilidad (Release) (Sprint 5\)** {#ts-05-—-despliegue-y-reproducibilidad-(release)-(sprint-5)}

**Propósito:** que el producto sea evaluable sin instalar.  
**Habilita:** evaluación final de todas las US.  
**Incluye:** deploy front \+ API (o integrado), variables de entorno, cuenta demo si aplica, README reproducible, endpoints accesibles.  
**Criterio Done:** URLs públicas \+ README con pasos claros \+ docentes puedan probar.

### **TS-06 — Accesibilidad mínima implementada como estándar transversal (Sprint 2–5)** {#ts-06-—-accesibilidad-mínima-implementada-como-estándar-transversal-(sprint-2–5)}

**Propósito:** asegurar mínimos de accesibilidad en UI desde temprano (no “al final si queda tiempo”).  
**Habilita:** calidad de US-01..US-10 (especialmente formularios y “Hoy”).  
**Incluye:** foco visible y navegación por teclado, labels y mensajes, contraste razonable, errores comprensibles.  
**Criterio Done:** evidencia (capturas/gif) y checklist mínimo aplicado en pantallas núcleo.

## **Reglas para que el equipo cree sus propias historias técnicas como forma de organización** {#reglas-para-que-el-equipo-cree-sus-propias-historias-técnicas-como-forma-de-organización}

### **Reglas:** {#reglas:}

1. Toda TS nueva debe indicar: **“Habilita a: US-\_\_”** (al menos una).  
2. Una TS **no reemplaza** una US: no vale como “ya trabajamos” si no habilita entrega funcional.  
3. TS nuevas deben ser **pequeñas y cerrables en 1 sprint** (o partirse).  
4. TS no debe introducir funcionalidades fuera del alcance (p. ej., “IA de recomendaciones”, “calendario con sincronización Google”, etc.).  
5. TS debe cumplir DoD: evidencia verificable (PR/links/capturas) y efecto demostrable (por ejemplo, endpoint funcionando, deploy accesible).

### **Ejemplos de TS que sí pueden crear** {#ejemplos-de-ts-que-sí-pueden-crear}

* “TS: Logging básico de errores en API para depurar integración” (habilita US-04/06).  
* “TS: Script de seed de datos para demo consistente” (habilita evaluación de US-01..US-04).  
* “TS: Pruebas mínimas de endpoints críticos” (habilita estabilidad Sprint 5).

