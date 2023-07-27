// Inicio de comentarios
function agregarComentario() {
  var comentarioInput = document.getElementById("comentario").value;

  // Verificar si el campo de comentario está vacío
  if (comentarioInput === "") {
    return;
  }

  // Crear un objeto de comentario
  var comentario = {
    contenido: comentarioInput,
  };

  // Agregar el comentario a de comentarios
  comentarios.push(comentario);

  // Actualizar la visualización de los comentarios
  actualizarComentarios();

  // Limpiar el campo de comentario después de agregar el comentario
  document.getElementById("comentario").value = "";
}

// Actualizar la visualización de los comentarios
function actualizarComentarios() {
  var contenedorComentarios = document.getElementById("contenedor-comentarios");

  // Limpiar el contenedor de comentarios antes de actualizar
  contenedorComentarios.innerHTML = "";

  // Recorrer todos los comentarios y agregarlos al contenedor
  comentarios.forEach(function(comentario, index) {
    // Crear un nuevo elemento div para el comentario
    var nuevoComentario = document.createElement("div");

    // Agregar la clase "comentario" al nuevo comentario
    nuevoComentario.classList.add("comentario");

    // Crear elementos para mostrar el contenido del comentario y el botón de eliminar
    var contenidoComentario = document.createElement("p");
    contenidoComentario.textContent = comentario.contenido;

    var eliminarBoton = document.createElement("button");
    eliminarBoton.textContent = "Eliminar";
    eliminarBoton.addEventListener("click", function() {
    eliminarComentario(index);
    });

    // Agregar los elementos al nuevo comentario
    nuevoComentario.appendChild(contenidoComentario);
    nuevoComentario.appendChild(eliminarBoton);

    // Agregar el nuevo comentario al contenedor de comentarios
    contenedorComentarios.appendChild(nuevoComentario);
  });
}

// Eliminar un comentario
function eliminarComentario(index) {
  // Eliminar el comentario de la  caja de comentarios
  comentarios.splice(index, 1);

  // Actualizar la visualización de los comentarios
  actualizarComentarios();
}

// Caja que contiene todos los comentarios
var comentarios = [];

// Fin caja de comentarios
