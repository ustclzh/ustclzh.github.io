$(document).ready(function() {
  // Smooth scrolling for navbar links
  $('.navbar a').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();

      const hash = this.hash;
      const offset = $('.navbar').outerHeight(); // Get the height of the navbar

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - offset // Add an offset to the scroll position
        },
        800
      );
    }
  });
});