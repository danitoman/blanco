// Seleccionamos el formulario y la lista de comentarios
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

// Función para agregar un comentario
function addComment(name, comment) {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.innerHTML = `
    <p>${name}</p>
    
  `;
  commentsList.appendChild(commentElement);
}

// Escuchamos el evento "submit" del formulario
commentForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que la página se recargue

  // Obtenemos los valores del formulario

  const comment = document.getElementById('comment').value;

  // Agregamos el comentario a la lista
  addComment(comment);

  // Limpiamos el formulario
  commentForm.reset();
});



