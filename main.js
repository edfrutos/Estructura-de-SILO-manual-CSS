// Obtener el elemento con el id "parrafo"
let paragraph = document.getElementById("parrafo");

// Obtener el texto del párrafo
let text = paragraph.innerText;

// Dividir el texto en un arreglo de palabras
let words = text.split(" ");

// Inicializar una variable para almacenar el texto acortado
let shortenedText = "";

// Inicializar una variable para contar el número de caracteres
let characterCount = 0;

// Recorrer cada palabra del arreglo
for (let i = 0; i < words.length; i++) {
    // Añadir la palabra al texto acortado
    shortenedText += words[i] + " ";
    // Aumentar el contador de caracteres
    characterCount += words[i].length + 1;
    if (characterCount >= 100) {
        // Si se ha alcanzado el límite de caracteres, agregar un salto de línea y resetear el contador
        shortenedText += "\n";
        characterCount = 0;
    }
}
// Establecer el texto acortado en el elemento "parrafo"
paragraph.innerText = shortenedText;

//  flecha de subida al principio de la página flecha de subida al principio de la página
const scrollUpArrow = document.querySelector('#scroll-up-arrow');

scrollUpArrow.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollUpArrow.style.display = 'flex';
  } else {
    scrollUpArrow.style.display = 'none';
  }
});
