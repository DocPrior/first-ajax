document.addEventListener("DOMContentLoaded", function() {
  var button12 = document.querySelector('#button12');
  button12.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    });
  });
  var step3456 = document.querySelector('#step3456');
  var button3456 = document.querySelector('#button3456');
  button3456.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
        console.log('3456response');
        step3456.append(responseData);
    }).fail(function(responseData) {
        console.log('3456response');
        step3456.append(responseData);
    }).always(function() {
        console.log('Hey requests finished');
    })
  });


});
