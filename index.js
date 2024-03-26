var progressbar = document.getElementById("myRange");
var output = docume.getElementById("demo");
output.innerHtml = progressbar.value;

progressbar.oninput = function(){
    output.innerHtml = this.value;
}