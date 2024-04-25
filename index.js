
function myFunction() {
    var header = document.getElementById("was");
    var currentColor = header.style.backgroundColor;
    var newColor = currentColor === "lightblue" ? "lightgreen" : "lightblue";
    header.style.backgroundColor = newColor;
}
var typed = new Typed('#element', {
    strings: ['@Portfolio side', 'Pull out the image'],
    typeSpeed: 50,
    loop:true
  });
  function toggleLike(button) {
    button.classList.toggle('clicked');
    const heartIcon = button.querySelector('i');
    if (heartIcon.classList.contains('far')) {
      heartIcon.classList.remove('far');
      heartIcon.classList.add('fas');
    } else {
      heartIcon.classList.remove('fas');
      heartIcon.classList.add('far');
    }
  }