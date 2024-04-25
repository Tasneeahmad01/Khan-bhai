(document).ready(function(){
    $(window).scroll(function(){
    var positiontop = $(document).scrollTop();
    console.log(positiontop);

    if((positiontop >100) &&(positiontop < 218)){
$("#card-one").addClass("animated bounceInLeft");
$("#card-two").addClass("animated zoomInDown");
$("#card-three").addClass("animated flipInx");
    }

    if((positiontop >240)&&(positiontop <213)){
        $("#card-one").addClass("animated bounceLeft");
        $("#card-two").addClass("animated zoomInDown");
        $("#card-three").addClass("animated flipInx");
      
    }
if((positiontop >240) &&(positiontop < 515)){
$("#textanimate").addClass("animated slideInUp");
    }
    if((positiontop >550)&&(positiontop <800)){
        $("#cardtwo-one").addClass("animated bounceInLeft");
        $("#cardtwo-two").addClass("animated zoomInDown");
        $("#cardtwo-three").addClass("animated flipInX");
      
    }
    });
}); 

function reverseString() {
  // Get the input string
  var input = document.getElementById("inputString").value;
  
  // Initialize an empty string to store the reversed string
  var reversed = "";
  
  // Iterate through the input string in reverse order
  for (var i = input.length - 1; i >= 0; i--) {
    // Append each character to the reversed string
    reversed += input[i];
  }
  
  // Set the value of the output field to the reversed string
  document.getElementById("outputString").value = reversed;
}

