(function() {
    $(window).ready(function() {
        resizeMainBlock();
    });

    $(window).resize(function() {
        resizeMainBlock();
    });

    /**
     * Adjusts the size of the main-block div to fill the remaining
     *      space below the nav.
     */
    function resizeMainBlock() {
        var navHeight = $("nav").height();
        var navPadding = $(".navbar").css("padding-bottom").replace('px', '');
        var viewportHeight = $(window).height();
        var mainBlockHeight = viewportHeight - navHeight - (navPadding * 2);
        $(".main-block").css('height', mainBlockHeight);
        if (mainBlockHeight < 400) {
            $(".product-image").css('display', 'none');
        }
        else {
            $(".product-image").css('display', 'block');
        }
    }

})();