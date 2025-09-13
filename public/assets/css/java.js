
  // Selecciona la cabecera por su ID
  const header = document.getElementById('main-header');

  // Define un umbral pequeño para el scroll (ej. 10 píxeles)
  const scrollThreshold = 10;

  // Función que se ejecuta al hacer scroll
  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      // Si el scroll es mayor que el umbral, añade la clase
      header.classList.add('header-scrolled');
    } else {
      // Si no, quítala
      header.classList.remove('header-scrolled');
    }
  };

  // Escucha el evento de scroll en la ventana
  window.addEventListener('scroll', handleScroll);
