// function ageInDays(){
//     var birthYear = prompt('Enter your birth year: ');
//     var ageInDayss = (2020 - birthYear) * 365;
//     var h1 = document.createElement('h1');
//     var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old.');
//     h1.setAttribute('id','ageInDays');
//     h1.appendChild(textAnswer);
//     document.getElementById('flexbox-result').appendChild(h1);
//   }
  
//   function reset(){
//     document.getElementById('ageInDays').remove();
//     }


function getAge(){
  var birthYear = document.getElementById("birth-year").value;
  var birthDays = (2020-birthYear)*365;

  document.getElementById("result").innerText=birthDays;
  
}
function reset(){
  document.getElementById("result").innerText="";
  document.getElementById("birth-year").value="";
}
