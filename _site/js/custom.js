
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
