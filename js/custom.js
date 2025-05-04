
(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

  // CUSTOM LINK
  $('.custom-link').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

})(window.jQuery);

function openModal() {
  document.getElementById("resumeModal").style.display = "block";
}

function closeModal() {
  document.getElementById("resumeModal").style.display = "none";
}

// Optional: Close modal when clicking outside content
window.onclick = function (event) {
  const modal = document.getElementById("resumeModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


