// var progressbar = document.getElementById("myRange");
// var output = docume.getElementById("demo");
// output.innerHtml = progressbar.value;

// progressbar.oninput = function(){
//     output.innerHtml = this.value;
// }
// yaha se practice h //
for (let i = 65; i <= 90; i++) {
    const alphabet = String.fromCharCode(i);
    document.write("<br>" + alphabet);
  }
  let quarter = 1;
switch(quarter) {
case 1 : document.write("January, February, March");
break;
case 2 : console.log("April, May, June");
break;
case 3 : console.log("July, August, September");
break;
case 4 : console.log("October, November, December");
break;
default : console.log("NOT A QUARTER!");
}
let str = "Applesss";
if ((str[0] === 'a' || str[0] === 'A') && str.length > 5) {
  console.log("Golden string");
} else {
  console.log("Not golden string");
}
function digitFrequency(num) {
  // Convert number to string
  let numStr = num.toString();

  // Object to store frequency of digits
  let freq = {};

  // Loop through each character in the string
  for (let i = 0; i < numStr.length; i++) {
    let digit = numStr[i];

    // Check if the character is a digit
    if (/[0-9]/.test(digit)) {
      // Increment the count if the digit exists in the object
      freq[digit] = (freq[digit] || 0) + 1;
    }
  }

  return freq;
}

// Test the function
let number = 1234567890;
let result = digitFrequency(number);
console.log(result);
try{
  alert("Wlcome to the education point");
}
catch(err){
  console.log(err)
}
const course = {
  firstCourse: 'Javascript',
  secondCourse: 'Html',
  thirdCourse: 'CSS',
};

let value = '';
for (let item in course) {
  value += course[item] + ' ';
  console.log(value);
}

 