(function() {

    $(window).ready(function() {
       
        // Create instance of scroll reveal
        window.sr = ScrollReveal({reset: true});
        
        // Navigation
        sr.reveal('.navbar', {
            duration: 1000,
            origin: 'top'
        });

        // Product 
        sr.reveal('.product', {
            duration: 1000,
            origin: 'bottom'
        });

        // In-between divs
        sr.reveal('.in-between-content', {
            duration: 1000,
            origin: 'bottom'
        });

    });
    
})();