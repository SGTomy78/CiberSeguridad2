// Función para mostrar una sola sección con transición suave
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");

  secciones.forEach(seccion => {
    if (seccion.id !== id) {
      // Si la sección está activa, la oculta con transición
      if (seccion.classList.contains("activa")) {
        seccion.classList.remove("activa");
        seccion.style.opacity = 0;
        setTimeout(() => {
          seccion.style.display = "none";
        }, 300);
      }
    }
  });

  const 
  activa = document.getElementById(id);
  // Si la sección a mostrar no está activa, la muestra con transición
  if (!activa.classList.contains("activa")) {
    activa.style.display = "block";
    setTimeout(() => {
      activa.classList.add("activa");
      activa.style.opacity = 1;
    }, 10);
  }
}

/**
 * Marca la respuesta elegida (botón o perfil), pintándola en verde o rojo según sea correcta,
 * y deshabilita las demás opciones para evitar cambios posteriores.
 * @param {HTMLElement} elemento - Botón o div .perfil clickeado
 * @param {boolean} esCorrecta - true si la respuesta es correcta, false si no.
 */
function marcarRespuesta(elemento, esCorrecta) {
  const contenedor = elemento.closest(".juego");
  if (!contenedor) return;

  // Deshabilita y pinta los botones dentro del contenedor
  const botones = contenedor.querySelectorAll("button");
  botones.forEach(btn => {
    btn.disabled = true;
    if (btn === elemento) {
      btn.style.backgroundColor = esCorrecta ? "lightgreen" : "lightcoral";
      btn.style.color = "black";
    }
  });

  // Deshabilita y pinta los perfiles dentro del contenedor
  const perfiles = contenedor.querySelectorAll(".perfil");
  perfiles.forEach(perf => {
    perf.style.pointerEvents = "none";
    if (perf === elemento) {
      perf.style.backgroundColor = esCorrecta ? "lightgreen" : "lightcoral";
      perf.style.color = "black";
    }
  });
}

/**
 * Marca todas las opciones dentro de un contenedor .juego,
 * pintando en verde las correctas y en rojo las incorrectas,
 * y deshabilita todas para evitar interacción.
 * @param {HTMLElement} contenedor - Elemento que contiene las opciones a marcar
 */
function marcarTodasLasRespuestas(contenedor) {
  // Marca y deshabilita botones según atributo data-correcta
  const botones = contenedor.querySelectorAll("button");
  botones.forEach(btn => {
    const esCorrecta = btn.getAttribute("data-correcta") === "true";
    btn.style.backgroundColor = esCorrecta ? "lightgreen" : "lightcoral";
    btn.style.color = "black";
    btn.disabled = true;
  });

  // Marca y deshabilita perfiles según atributo data-correcta
  const perfiles = contenedor.querySelectorAll(".perfil");
  perfiles.forEach(perf => {
    const esCorrecta = perf.getAttribute("data-correcta") === "true";
    perf.style.backgroundColor = esCorrecta ? "lightgreen" : "lightcoral";
    perf.style.color = "black";
    perf.style.pointerEvents = "none";
  });
}

  const slides = document.querySelectorAll("#carrusel img");
  let current = 0;

  function updateSlide() {
    slides.forEach((img, i) => img.classList.toggle("active", i === current));
    current = (current + 1) % slides.length;
  }

  updateSlide(); // muestra el primero
  setInterval(updateSlide, 3000); // cambia cada 3 segundos

