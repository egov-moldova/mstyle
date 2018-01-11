/* Hide Header on on scroll down */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar-fixed-top').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar-fixed-top').removeClass('scrolled-up').addClass('scrolled-down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar-fixed-top').removeClass('scrolled-down').addClass('scrolled-up');
        }
    }
    
    lastScrollTop = st;
}

/* dinamically add background from html */
  $.each($('[data-bg]'), function(){
      if ($(this).attr('data-bg').length > 0){
        $(this).css('background-image', 'url('+ $(this).attr('data-bg') +')');
      }
  });

/* initializing demo-select (select2.js) in forms.html */
if ($('select.demo-select').width() > 0) {
	$('select.demo-select').select2({
		minimumResultsForSearch: Infinity  //hiding the searchbox !!!
	});

  $("select.demo-select.multiple-select").select2({
    placeholder: "Alege opțiunea",
  });
}

/* tooltips an popovers */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
$(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
  })
});

/* smooth scroll to div (faq.html && terms_condiitons.html) */
    $(function() {
      $('.terms-menu a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 130
            }, 1000);
            return false;
          }
        }
      });
    });

//*refresh page on resize window */
$(window).on('orientationchange', function(){location.reload();});

/* checkboxes styling clases */
function changeState(el) {
  if (el.readOnly) el.checked=el.readOnly=false;
  else if (!el.checked) el.readOnly=el.indeterminate=true;
}

/* showing modal window on hover */
$( "#hoverModal" ).hover(function() {
  $('.bs-example-modal-sm').modal({
    show: true
  });
});  

