(function($) {

    $(document).ready(function() {

        $("#typed2").typed({
            strings: ["Student", "Software Engineer", "Web Developer."],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){},
            resetCallback: function() { newTyped(); }
        });

        $(window).on("reload resize", function() {
            $("#circle1").hide();
        });
    })
})(jQuery)
