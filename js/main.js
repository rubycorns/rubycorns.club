(function() {

  var corn1 = document.getElementById('corn1');
  var corn2 = document.getElementById('corn2');

  function rubycorn() {
    corn1.classList.toggle('hidden');
    corn2.classList.toggle('hidden');
  }

  window.setInterval(rubycorn, 300);

}())