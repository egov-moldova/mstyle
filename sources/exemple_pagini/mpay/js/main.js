/***************************************************************************
  Aici vor fi funcțiile folosite doar pentru MPay, 
****************************************************************************/

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
	$('select.demo-select').select2();
}
$('.category-select').select2({
    placeholder: "Filtrează după categorie",
})

/* tooltips and popovers */
$('[data-toggle="tooltip"]').tooltip({
    animated: 'fade',
    html: true,
});
$(function () {
  $('[data-toggle="popover"]').popover()
});

/* check value of telephone input on login form */
if ($('#telPhone').width() > 0) {
	$('#telPhone').on('keyup', function() {
	    var maxlength = $(this).attr('maxlength');
		var val = $(this).val();
		if (val.length == maxlength) {
			$('.mob_sign>.btn').removeClass('disabled').addClass('btn-primary');
	        $(this).parent().addClass('succes-state');
	    }
	});
}

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

/* loading Service pay result DEMO - preview !!! */
  $('#codeInput, #verify-code').on('keyup', function() {
    var maxlength = $(this).attr('maxlength');
    var val = $(this).val();
      if (val.length == maxlength) {
        $('#searchDc').removeClass('disabled').addClass('btn-primary');
        $(this).parent().addClass('succes-state');
      } else{
        $('#searchDc').removeClass('btn-primary').addClass('disabled');
        $(this).parent().removeClass('succes-state');
      }
  });
  $('#searchDc').on('click', function(){
      $('.loading-img').fadeIn().delay(1000).fadeOut();
      $('.service-pay-result').delay(1500).fadeIn();
      $('.select-block').fadeOut();
      setTimeout(function(){
        $('#searchDc').addClass('disabled');
      }, 1400);
  });

  /* change active state of pay block (pay_method.html) */
  $('.pay-method .btn[data-target=#banksRow]').on('click', function(){
    $(this).parent().addClass('active');
    $(this).addClass('disabled');
    $('#e-banksRow').removeClass('in');
    $('.pay-method .btn[data-target=#e-banksRow]').removeClass('disabled');
    $('.pay-method .btn[data-target=#e-banksRow]').parent().removeClass('active');
  });
  $('.pay-method .btn[data-target=#e-banksRow]').on('click', function(){
    $(this).parent().toggleClass('active');
    $(this).addClass('disabled');
    $('#banksRow').removeClass('in');
    $('.pay-method .btn[data-target=#banksRow]').removeClass('disabled');
    $('.pay-method .btn[data-target=#banksRow]').parent().removeClass('active');
  });

  /* send mail functionality */
   $('#sendEmail').on('click', function(){
     $('input, textarea').val('');
     $('.respond-alert').fadeIn('slow');
   });

  /* loading bill payment DEMO - preview !!! */
  $('#billNr, #verify-code').on('keyup', function() {
    var maxlength = $(this).attr('maxlength');
    var val = $(this).val();
      if (val.length == maxlength) {
        $('.bill-section>.btn').removeClass('disabled').addClass('btn-primary');
        $(this).parent().addClass('has-success');
      } else{
        $('.bill-section>.btn').removeClass('btn-primary').addClass('disabled');
        $(this).parent().removeClass('has-success');
      }
  });
  $('#verifyNote').on('click', function(){
      $('.loading-img').fadeIn().delay(1000).fadeOut();
      $('.bill-status').delay(1500).fadeIn();
  });

/* refresh page on resize window */
$(window).on('orientationchange', function(){location.reload();});