const $Foto = document.querySelector("#fotoInput"),

  $foto1 = document.querySelector("#foto");

// Escuchar cuando cambie
$Foto.addEventListener("change", () => {
  // Los archivos seleccionados, pueden ser muchos o uno
  const archivos = $Foto.files;
  // Si no hay archivos salimos de la función y quitamos la imagen
  if (archivos || archivos.length) {
  // Ahora tomamos el primer archivo, el cual vamos a previsualizar
  const primerArchivo = archivos[0];
  // Lo convertimos a un objeto de tipo objectURL
  const objectURL = URL.createObjectURL(primerArchivo);
  // Y a la fuente de la imagen le ponemos el objectURL
  $foto1.src = objectURL;
  }

});