(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


    // ABOUT SLIDER
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items: 1,
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    });


    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);


// Update service price dynamically when dropdown changes
document.querySelectorAll('.service-select').forEach(select => {
    select.addEventListener('change', function() {
        // Get selected price
        const price = this.options[this.selectedIndex].dataset.price;

        // Update the price in the corresponding card
        this.closest('.pricing-item').querySelector('.service-price').textContent = price;
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    const cookieBox = document.getElementById("cookieConsent");
    const acceptBtn = document.getElementById("acceptCookies");

    // Show only if not accepted before
    if (!localStorage.getItem("cookiesAccepted")) {
      cookieBox.style.display = "block";
    }

    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBox.style.display = "none";
    });
  });

  // Manual reopen (Cookie Settings)
  function openCookieSettings() {
    document.getElementById("cookieConsent").style.display = "block";
  }


function toggleADRContent() {
  const content = document.getElementById("adr-content");
  const button = document.getElementById("adr-toggle-btn");

  if (!content.classList.contains("expanded")) {
    content.classList.add("expanded");
    button.textContent = "Show Less";
  } else {
    content.classList.remove("expanded");
    button.textContent = "Read More";
  }
}

document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    // Toggle current item
    item.classList.toggle('active');

    // Close other items
    document.querySelectorAll('.faq-item').forEach(other => {
      if(other !== item) {
        other.classList.remove('active');
      }
    });
  });
});
