document.addEventListener('DOMContentLoaded', function() {
    console.log('Carrusel iniciado');

    const carousel = document.getElementById('carousel');
    const slides = carousel.querySelectorAll('.slide'); // Detecta .slide en card-img-ind
    const indicators = carousel.querySelectorAll('.indicator');
    let currentSlide = 0;
    const totalSlides = slides.length; // 10
    let autoSlideInterval;

    // Función para mostrar un slide específico
    function showSlide(index) {
        console.log(`Mostrando slide ${index + 1}`);

        // Oculta todos los slides e indicadores
        slides.forEach((slide) => {
            slide.classList.add('opacity-0', 'z-0');
            slide.classList.remove('opacity-100', 'z-10');
        });
        indicators.forEach((ind) => {
            ind.classList.remove('active');
        });

        // Muestra el slide actual (agrega clases Tailwind dinámicamente)
        if (slides[index]) {
            slides[index].classList.remove('opacity-0', 'z-0');
            slides[index].classList.add('opacity-100', 'z-10');
        }
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }

        currentSlide = index;
    }

    // Función para siguiente slide (cíclico)
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % totalSlides;
        showSlide(nextIndex);
    }

    // Inicia el carrusel automático
    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 3000);
        console.log('Auto-slide iniciado');
    }

    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            currentSlide = index;
        });
    });

    // Inicia
    showSlide(0);
    startAutoSlide();
});
