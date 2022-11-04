
 
 function currenttime() {
    
 
    var date = new Date()

   let hour=date.getHours();
  let min=date.getMinutes();
   let sec=date.getSeconds();
   var midday = "AM";
   midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
   hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
  
   document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */







   var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 
  var curWeekDay = days[date.getDay()]; // get day
  var curDay = date.getDate();  // get date
  var curMonth = months[date.getMonth()]; // get month
  var curYear = date.getFullYear(); // get year
  var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear; // get full date
  document.getElementById("date").innerHTML = date;
  

  
  
  

 setTimeout(() => {
    currenttime();
 }, 1000);


 }

// 






 

 currenttime();



