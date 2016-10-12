
var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})


$(document).ready(function () {
  $("input#submit").click(function(){
    $.ajax({
      type: "POST",
      url: "process.php", //
      data: $('form.contact').serialize(),
      success: function(msg){
        $("#thanks").html(msg)
        $("#form-content").modal('hide');
      },
      error: function(){
        alert("failure");
      }
    });
  });
});

$(function() {
  $('a[href*=#]:not([href=#]):not(.carousel-control)').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$('#FTModal').on('shown.bs.modal', function () {
  $('#FTInput').focus()
})

$('#PTModal').on('shown.bs.modal', function () {
  $('#PTInput').focus()
})

$('#FLModal').on('shown.bs.modal', function () {
  $('#FLInput').focus()
})
