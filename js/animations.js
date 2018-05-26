(function() {

    $(window).ready(function() {
       
        // Create instance of scroll reveal
        window.sr = ScrollReveal({reset: true});
        
        // Navigation
        sr.reveal('.navbar', {
            duration: 1000,
            origin: 'top'
        });

        // Product image
        sr.reveal('.product-image', {
            duration: 1000,
            origin: 'bottom'
        });

        // Product description
        sr.reveal('.product-description', {
            duraiton: 1000,
            origin: 'bottom'
        });

        sr.reveal('.in-between-content', {
            duration: 1000,
            origin: 'bottom'
        });

    });
    
})();