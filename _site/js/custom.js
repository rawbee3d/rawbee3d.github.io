// Javascript for Jumpotron Image and Bllur Filter

var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
// modal auto focus

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// modal function
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

// blur
