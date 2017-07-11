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
      url: 'http://first-ajax-api.herokuapp.com/ping',
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

  var step7 = document.querySelector('#step7');
  var button7 = document.querySelector('#button7');
  button7.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
        step7.append(responseData);
    });
  });

  var step8 = document.querySelector('#step8');
  var button8 = document.querySelector('#button8');
  button8.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'Asia/Kolkata'},
      dataType: 'text'
    }).done(function(responseData) {
        step8.append(responseData);
    });
  });

  var step9ul = document.querySelector('#step9_ul');
  var button9 = document.querySelector('#button9');
  button9.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'
    }).done(function(responseData){
        step9ul.append(responseData);
    });
  });

});
