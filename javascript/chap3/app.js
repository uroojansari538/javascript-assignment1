let age = 30;
alert("My age is: " + age);
if (localStorage.getItem('visitCount') === null) {  localStorage.setItem('visitCount', 1);
} else {

  var count = parseInt(localStorage.getItem('visitCount'));
  count++;
  localStorage.setItem('visitCount', count);
}
var visitCount = localStorage.getItem('visitCount');
document.write("<h2>You have visited this site " + visitCount + " times.</h2>");
var birthYear = 1992; 
    var variable = Number;
document.write("<h2>Your birth year is: " + birthYear + "</h2>");
document.write("<h2>data type of my declared variable is : " + variable + "</h2>");
document.write("<h2>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.</h2>");
var visitorName = "m.ebaad";
  var productTitle = "T-shirt";
  var quantity = 5;
  alert("visitorName: "+ visitorName);
 alert("quantity: "+ quantity) ;
 alert("productTitle: "+ productTitle);