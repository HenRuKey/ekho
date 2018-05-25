(function() {

    $(window).ready(function() {
       
        // Create instance of scroll reveal
        window.sr = ScrollReveal({reset: true});
        
        //  Navigation
        sr.reveal('.navbar', {
            duration: 1000,
            origin: 'top'
        });
    });
    
})();