document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const quoteCategory = document.getElementById('quote-category');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const shareTwitterBtn = document.getElementById('share-twitter-btn');
    const shareFacebookBtn = document.getElementById('share-facebook-btn');
    const copyBtn = document.getElementById('copy-btn');
    const currentYearSpan = document.getElementById('current-year');
    
    // Establecer el año actual en el footer
    currentYearSpan.textContent = new Date().getFullYear();
    
    // Función para obtener una cita basada en la fecha (cita diaria) o aleatoria
    function getQuote(random = false) {
        let quoteIndex;
        
        if (random) {
            // Cita aleatoria
            quoteIndex = Math.floor(Math.random() * quotes.length);
        } else {
            // Cita diaria basada en la fecha
            const today = new Date();
            const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
            quoteIndex = dayOfYear % quotes.length;
        }
        
        return quotes[quoteIndex];
    }
    
    // Función para mostrar la cita
    function displayQuote(quote) {
        // Ocultar elementos para la animación
        quoteText.style.opacity = 0;
        quoteAuthor.style.opacity = 0;
        quoteCategory.style.opacity = 0;
        
        // Actualizar los elementos después de un breve delay para la animación
        setTimeout(() => {
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = quote.author;
            quoteCategory.textContent = quote.category;
            
            // Mostrar con animación
            quoteText.classList.add('fade-in');
            quoteAuthor.classList.add('fade-in');
            quoteCategory.classList.add('fade-in');
            
            // Restablecer la opacidad
            quoteText.style.opacity = 1;
            quoteAuthor.style.opacity = 1;
            quoteCategory.style.opacity = 1;
        }, 300);
    }
    
    // Función para compartir en Twitter
    function shareOnTwitter() {
        const quote = quoteText.textContent;
        const author = quoteAuthor.textContent;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
        window.open(twitterUrl, '_blank');
    }
    
    // Función para compartir en Facebook
    function shareOnFacebook() {
        const url = window.location.href;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(facebookUrl, '_blank');
    }
    
    // Función para copiar la cita al portapapeles
    function copyToClipboard() {
        const quote = quoteText.textContent;
        const author = quoteAuthor.textContent;
        const category = quoteCategory.textContent;
        const textToCopy = `"${quote}" - ${author} (${category})`;
        
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Indicador visual de que se ha copiado
                copyBtn.classList.add('copied');
                setTimeout(() => copyBtn.classList.remove('copied'), 2000);
            })
            .catch(err => {
                console.error('Error al copiar: ', err);
            });
    }
    
    // Mostrar la cita del día al cargar la página
    displayQuote(getQuote());
    
    // Event listeners
    newQuoteBtn.addEventListener('click', () => {
        displayQuote(getQuote(true)); // Obtener cita aleatoria
    });
    
    shareTwitterBtn.addEventListener('click', shareOnTwitter);
    shareFacebookBtn.addEventListener('click', shareOnFacebook);
    copyBtn.addEventListener('click', copyToClipboard);
    
    // Cambiar la cita automáticamente a la medianoche para mostrar la nueva cita del día
    function scheduleQuoteUpdate() {
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const timeUntilMidnight = tomorrow - now;
        
        setTimeout(() => {
            displayQuote(getQuote());
            scheduleQuoteUpdate(); // Programar la próxima actualización
        }, timeUntilMidnight);
    }
    
    // Iniciar el programador
    scheduleQuoteUpdate();
});

