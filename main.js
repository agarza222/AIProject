// main.js

// Smooth scrolling for anchor links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Scroll to the target section
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500); // 500ms for smooth scroll
    });
});

// Back to top button functionality
$(document).ready(function() {
    // Create back-to-top button dynamically
    $('body').append('<a href="#top" id="backToTop" class="back-to-top">↑ Back to Top</a>');
    
    // Show/Hide the back-to-top button on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) { // 200px from the top
            $('#backToTop').fadeIn(); // Show button
        } else {
            $('#backToTop').fadeOut(); // Hide button
        }
    });
    
    // Scroll to the top when the button is clicked
    $('#backToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500); // 500ms for smooth scroll
        return false; // Prevent default anchor click behavior
    });
});