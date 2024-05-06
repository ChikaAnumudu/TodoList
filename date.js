// jshint esversion6


exports.toDayDate = () => {
  const today = new Date();
  // var currentDay = today.getDay();
  // var day = "";
  // var data = currentDay === 6 || currentDay === 0;
  // switch(currentDay){
  //   case 0 : day = "Sunday";
  //   break;
  //   case 1 : day= "monday";
  //   break;
  //   case 2 : day = "Tuesday";
  //   break;
  //   case 3 : day = "Wednesday";
  //   break;
  //   case 4 : day = "Thursday";
  //   break;
  //   case 5 : day = "Friday";
  //   break;
  //   case 6 : day = "Saturday";
  //   break;
  //   default:
  //   console.log("Error: current day is equal" + currentDay );
  //
  // }
  // if (data){
  //   // res.write("<h2>Thank God is WeekEnd</h2>");
  //   // res.send();
  //   day = "Weekend";
  // }else{
  //   // res.write("<p>ooh God i need you GRACE</p>");
  //   // res.write("<h2>It still working week!!</h2>");
  //   // res.sendFile(__dirname + "/index.html");
  //   day = "Weekday";
  // }
  const  options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  }
  return today.toLocaleDateString("en-US", options);

}

exports.toDay = () => {
  const  today = new Date();

  const  options = {
    weekday : "long",

  }
  return today.toLocaleDateString("en-US", options);

}
console.log(module);
