$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
      $("#fun-survey").slideDown();
      $('#transportation_survey').hide();
    });
  });

  $("form#fun-survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").slideDown();
    $("#fun-responses").slideDown();
    $("#fun-survey").hide();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
  });
});
