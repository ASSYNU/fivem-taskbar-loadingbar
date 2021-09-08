$(document).ready(function () {
  function openMain() {
    $('.div-wraper').fadeIn(10);
  }

  function closeMain() {
    $('.div-wraper').css('display', 'none');
  }

  window.addEventListener('message', function (event) {
    if (event.data.runProgress === true) {
      openMain();

      $('#Loading-bar').css('width', '0%');
      $('.someRandomText').empty();
      $('.someRandomText').append(event.data.name);
    }

    if (event.data.runUpdate === true) {
      var percent = '' + event.data.Length + '%';

      $('#Loading-bar').css('width', percent);
      $('.someRandomText').empty();
      $('.someRandomText').append(event.data.name);
    }

    if (event.data.LoadingClose === true) {
      closeMain();
    }
  });
});
