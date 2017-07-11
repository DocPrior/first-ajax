document.addEventListener("DOMContentLoaded", function() {
  var button12 = document.querySelector('#button12');
  button12.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    });
  });

  var button3456 = document.querySelector('#button3456');
  button3456.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      console.log('3456response');
      document.querySelector('#step3456').append(responseData);
    })
  })


});
