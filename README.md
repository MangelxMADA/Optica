# 🔭 Portal Interactivo de Óptica Geométrica — Física 3 (UTP)

Este repositorio contiene el código fuente completo, simulaciones interactivas de alta fidelidad, material académico y un asistente con Inteligencia Artificial del **Portal Interactivo de Óptica Geométrica**. Este portal fue desarrollado como un proyecto educativo interactivo y de alta rigurosidad científica para el curso de **Física 3** de la **Universidad Tecnológica de Pereira (UTP)**.

El portal combina un diseño web ultra-moderno con simulaciones físicas en tiempo real basadas en la API de HTML5 Canvas, permitiendo a los estudiantes visualizar, interactuar y comprender a profundidad los fenómenos ópticos más complejos abordados en la teoría.

---

## 👥 Autores y Créditos

*   **Docente Supervisor:** Msc. Néstor Fabio Montoya Palacios (Profesor Titular, UTP).
*   **Desarrollo y Programación:** Miguel Ángel Delgado Acevedo (Estudiante de Ingeniería / Desarrollador).
*   **Organización Teórica e Investigación:** Andrés Felipe Bernal Torres (Estudiante de Ingeniería / Investigador).
*   **Institución:** Universidad Tecnológica de Pereira (UTP) — 2026.

---

## 📁 Estructura del Proyecto

A continuación se detalla la organización de los archivos y directorios del proyecto:

```text
c:\Estudio\Optica\
├── index.html                   # Punto de entrada principal (Aplicación de una Sola Página - SPA)
├── styles.css                   # Hoja de estilos del portal (Diseño Glassmorphism, temas claro/oscuro)
├── app.js                       # Lógica de navegación SPA, buscador rápido, canvas del fondo de partículas
├── chatbot.js                   # Lógica e integración de OptiBot con la API de Google Gemini (2.5-flash)
├── chatbot.css                  # Estilos interactivos, burbujas y animaciones flotantes de OptiBot
├── README.md                    # Esta guía completa del proyecto (Léame)
├── LICENSE.md                   # Términos de licencia, propiedad intelectual y derechos de autor
│
├── Simulaciones/                # Directorio que aloja todas las simulaciones interactivas (iframes)
│   ├── logo_interactivo.html    # Logo dinámico del header (Prisma con refracción y dispersión cromática)
│   ├── espectroscopia.html      # Simulación del espectro electromagnético e irisaciones
│   ├── romer.html               # Simulación orbital del experimento de medición de 'c' de Ole Rømer
│   ├── snell.html               # Simulación interactiva de la Ley de Snell (Ángulo crítico e índice de refracción)
│   ├── difraccion.html          # Simulación del patrón de difracción de una y doble rendija
│   ├── espejos.html             # Simulador de trazado de rayos en espejos planos, cóncavos y convexos
│   └── dioptrio.html            # Simulador de refracción en superficies esféricas (Dioptrio esférico/plano)
│
├── Teoria Optica/               # Material académico de consulta y estudio
│   ├── Latex/                   # Código fuente original de las guías de estudio escritas en LaTeX
│   │   ├── optica_geometrica.tex
│   │   ├── espejos_optica_geometrica.tex
│   │   └── dioptrios.tex
│   └── PDF/                     # Documentos académicos listos para lectura e impresión (compilados a PDF)
        ├── optica_geometrica.pdf
        ├── espejos_optica_geometrica.pdf
        └── dioptrios.pdf
```

---

## 🌟 Características Destacadas del Portal

### 1. Interfaz y Experiencia de Usuario (UI/UX) Premium
*   **Estética Glassmorphism:** Menús flotantes, tarjetas y diálogos semitransparentes con desenfoque de fondo (`backdrop-filter`) y sombras sutiles que generan profundidad visual.
*   **Fondo de Partículas Dinámico (`#bg-canvas`):** Un canvas que corre en segundo plano renderizando una red de nodos y enlaces moleculares interactivos. El comportamiento cambia según el tema visual del portal.
*   **Temas Oscuro y Claro:** Transición suave de colores (`data-theme`) adaptada a la comodidad del estudiante.
*   **Buscador Inteligente e Instantáneo:** Un índice de búsqueda integrado que permite a los estudiantes saltar directamente a ecuaciones, secciones teóricas o simulaciones específicas con resaltar visual automático de la sección de destino.

### 2. Simulaciones Científicas Interactivas de Alta Fidelidad
Todas las simulaciones están construidas usando HTML puro y JavaScript utilizando la API nativa de **HTML5 Canvas**, garantizando una óptima aceleración por hardware (GPU) y renderizado ultra-fluido a 60 FPS:
*   **Precisión Física:** Las simulaciones no son meras animaciones; resuelven matemáticamente las ecuaciones físicas reales (trazado de rayos paraxiales, Ley de Snell, refracción cromática dispersiva) en tiempo real en respuesta a las manipulaciones del usuario.
*   **Modo Inmersivo:** Cada simulación cuenta con un botón para expandirla a pantalla completa mediante una superposición inteligente (`sim-fullscreen`), facilitando su visualización en proyectores de clase.

### 3. OptiBot: Tutor Virtual Integrado con Inteligencia Artificial
*   **OptiBot** es un asistente virtual con IA (ubicado en `chatbot.js` y `chatbot.css`) desarrollado específicamente para acompañar al estudiante.
*   **Integración API de Google Gemini:** Se conecta directamente con la API de Gemini (soportando modelos avanzados como `gemini-2.5-flash`) mediante una interfaz segura donde el alumno introduce su API key gratuita.
*   **Personalidad Temática:** Está configurado para responder con entusiasmo científico, gran precisión conceptual y lenguaje accesible.
*   **Soporte de Fórmulas:** Renderiza ecuaciones matemáticas sofisticadas en tiempo real gracias a la biblioteca **KaTeX**.
*   **Burbuja de Datos Curiosos:** Periódicamente, OptiBot lanza pequeñas burbujas flotantes sobre el botón de chat con datos históricos de la óptica, retos de física y recordatorios conceptuales interactivos.

---

## 🔬 Detalle de las Simulaciones Incluidas

A continuación se describe qué hace cada una de las 7 simulaciones interactivas del portal:

### 1. Logo del Prisma Interactivo (`logo_interactivo.html`)
*   **Qué hace:** Funciona como el icono de identidad visual en la parte superior izquierda de la página.
*   **Interactividad:** Al pasar el cursor por encima, la fuente de luz se mueve verticalmente.
*   **Física:** Implementa refracción de vector incidente y dispersión de color (desviación diferencial del haz para los colores Rojo, Verde y Azul) dentro de un prisma de cristal triangular equilátero, usando la **Ley de Snell** con índices de refracción específicos para cada longitud de onda.

### 2. Espectroscopía (`espectroscopia.html`)
*   **Qué hace:** Explora la descomposición de la luz blanca y los espectros característicos de emisión y absorción de diferentes elementos químicos.
*   **Interactividad:** Permite cambiar la fuente de excitación y el material dispersivo para observar cómo cambia el espectro visible resultante.

### 3. Velocidad de la Luz de Ole Römer (`romer.html`)
*   **Qué hace:** Ilustra de manera animada cómo el astrónomo danés Ole Römer midió por primera vez la velocidad de la luz en 1676 observando los retrasos temporales en los eclipses del satélite Ío de Júpiter.
*   **Interactividad:** Modifica la posición orbital de la Tierra (oposición vs conjunción), altera la velocidad de la animación y ajusta el diámetro de la órbita de la Tierra.
*   **Física:** Calcula matemáticamente el tiempo adicional que tarda la luz en viajar la distancia extra en el espacio y estima la velocidad resultante de la luz en tiempo real, contrastándola con la constante exacta $c = 299\,792\,458\text{ m/s}$.

### 4. Ley de Snell y Refracción (`snell.html`)
*   **Qué hace:** Demuestra de forma interactiva el cambio de ángulo de un rayo de luz que atraviesa la frontera entre dos medios transparentes.
*   **Interactividad:** Sliders para controlar el ángulo de incidencia y los índices de refracción ($n_1$ y $n_2$) de ambos medios.
*   **Física:** Calcula en tiempo real el ángulo refractado, detecta el **ángulo crítico** y visualiza con total fidelidad el fenómeno de la **Reflexión Total Interna** (el principio físico que rige a las fibras ópticas).

### 5. Difracción (`difraccion.html`)
*   **Qué hace:** Simula el experimento de Young y los fenómenos de difracción por rendija simple y doble rendija.
*   **Interactividad:** Permite variar el ancho de la rendija, la separación entre rendijas y la longitud de onda de la luz incidente.
*   **Física:** Grafica en vivo la curva de distribución de la intensidad lumínica y proyecta el patrón físico de interferencia (franjas brillantes y oscuras) en una pantalla virtual.

### 6. Espejos Esféricos y Planos (`espejos.html`)
*   **Qué hace:** Permite simular el trazado geométrico de rayos y la formación de imágenes en espejos planos, cóncavos y convexos.
*   **Interactividad:** Permite arrastrar el objeto a lo largo del eje óptico, cambiar la altura del objeto y modificar la distancia focal o el radio de curvatura del espejo.
*   **Física:** Resuelve en tiempo real la fórmula de Descartes-Gauss ($1/p + 1/q = 1/f$), dibuja los 3 rayos notables (paralelo, focal y radial), indica si la imagen resultante es real o virtual, derecha o invertida, y calcula el aumento lateral exacto ($A = -q/p$).

### 7. Dioptrios y Sistemas Ópticos (`dioptrio.html`)
*   **Qué hace:** Modela la refracción paraxial de rayos a través de superficies esféricas y planas que separan dos medios de diferentes índices.
*   **Interactividad:** Modificación del radio de curvatura de la superficie (cóncava, convexa o plana), posición del objeto y los índices de refracción de ambos lados.
*   **Física:** Calcula la posición de la imagen refractada basándose en la **Ecuación Fundamental del Dioptrio Esférico** ($n_1/p + n_2/q = (n_2 - n_1)/r$), localiza los focos objeto e imagen, y dibuja geométricamente el trazado paraxial del rayo.

---

## 📚 Teoría Académica e Integración Científica

El portal no solo ofrece interactividad visual, sino que proporciona rigurosidad científica mediante materiales de estudio listos para descargar:
1.  **PDFs Listos para Lectura:** Ubicados en `Teoria Optica/PDF/`, son apuntes académicos con formato profesional que explican en detalle el marco histórico, las deducciones matemáticas de las ecuaciones y problemas resueltos tipo examen.
2.  **Visualizador de Código LaTeX:** El portal incorpora un visualizador integrado que permite al estudiante leer en pantalla el código fuente original (`.tex`) de cada guía en LaTeX, promoviendo el aprendizaje de la escritura científica entre los estudiantes de ciencias exactas e ingeniería.

---

## 🚀 Cómo Ejecutar el Portal Localmente

El portal ha sido diseñado bajo arquitectura frontend pura (sin frameworks pesados ni dependencias complejas de compilación), por lo cual es sumamente ligero y portátil:

1.  **Opción Directa (Recomendada):** 
    Simplemente abre el archivo [index.html](file:///c:/Estudio/Optica/index.html) en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).
2.  **Opción Servidor Local (Para simulaciones y OptiBot con soporte CORS estricto):**
    Para asegurar que todas las solicitudes internas (como la carga de archivos LaTeX locales mediante `fetch`) y las solicitudes a la API de Gemini funcionen de forma óptima sin bloqueos de seguridad del navegador, puedes iniciar un servidor web estático local:
    *   **Si usas Node.js (npm):**
        ```bash
        npx http-server c:\Estudio\Optica
        ```
    *   **Si usas Python:**
        ```bash
        python -m http.server 8000 --directory c:\Estudio\Optica
        ```
    Luego, abre en tu navegador: `http://localhost:8080` (para npm) o `http://localhost:8000` (para Python).

---

## 🛠️ Tecnologías Utilizadas

*   **Estructura y Contenido:** HTML5 Semántico.
*   **Estilo y Presentación:** CSS3 Vanilla con variables dinámicas, Flexbox, Bento/Grid responsive, efectos de filtro de desenfoque e interpolaciones de aceleración por GPU.
*   **Comportamiento e Interactividad:** JavaScript moderno (ES6+), programación nativa orientada a objetos para los motores de trazado de rayos.
*   **Motor de Ecuaciones Matemáticas:** [KaTeX v0.16.9](https://katex.org/) para un renderizado ultra-rápido de matemáticas complejas.
*   **Bibliotecas de Iconografía:** [FontAwesome v6.5.1](https://fontawesome.com/).
*   **Procesamiento de Lenguaje Natural:** API de Google Gemini (SDK HTTP REST).

---

## ⚖️ Licencia y Propiedad Intelectual

Este proyecto académico y científico está protegido bajo las normativas nacionales e internacionales de **Derechos de Autor (Copyright)**:
*   **Leyes de la República de Colombia:** Constitución Política (Art. 61), Ley 23 de 1982 (Derecho de Autor), Ley 1915 de 2018, y las Decisiones Andinas 351 y 486.
*   **Tratados Internacionales:** Convenio de Berna, Tratado de la OMPI sobre Derecho de Autor (WCT) y el Acuerdo ADPIC (TRIPS) de la OMC.

Los derechos morales y patrimoniales exclusivos de la Obra pertenecen a los autores principales: **Miguel Ángel Delgado Acevedo** y **Andrés Felipe Bernal Torres**, bajo la tutoría de **Msc. Néstor Fabio Montoya Palacios** y el respaldo de la **Universidad Tecnológica de Pereira (UTP)**. 

Se otorga una licencia de uso de carácter estrictamente educativo, académico y no comercial. Cualquier tipo de explotación lucrativa, plagio o distribución no autorizada sin créditos está estrictamente prohibida. Para consultar las condiciones completas, restricciones y el régimen legal aplicable, por favor revise el archivo [LICENSE.md](file:///c:/Estudio/Optica/LICENSE.md).

