var format1 = document.getElementById("format1");
var format2 = document.getElementById("format2");
var format3 = document.getElementById("format3");
var format4 = document.getElementById("format4");
var format5 = document.getElementById("format5");
var format6 = document.getElementById("format6");
var format7 = document.getElementById("format7");
var format8 = document.getElementById("format8");
var month = document.getElementById("month");
var day = document.getElementById("day");
var weekday = document.getElementById("weekday");
var year = document.getElementById("year");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var meridiem = document.getElementById("meridiem");
var errorFormat = document.getElementById("errorFormat");
var errorWord = document.getElementById("errorWord");
var startOf = document.getElementById("startOf");
var endOf = document.getElementById("endOf");

var stamp = timestamp();
month.innerHTML = stamp.month();
day.innerHTML = stamp.day();
weekday.innerHTML = stamp.weekday();
year.innerHTML = stamp.year();
hour.innerHTML = stamp.hour();
minute.innerHTML = stamp.minute();
second.innerHTML = stamp.second();
meridiem.innerHTML = stamp.meridiem();
format1.innerHTML = stamp.format("MM DD, yyyy h:ii:ss x");
format2.innerHTML = stamp.format("WW");
format3.innerHTML = stamp.format("M DD, yy");
format4.innerHTML = stamp.format();
format5.innerHTML = stamp.format("short");
format6.innerHTML = stamp.format("24hour");
format7.innerHTML = stamp.format("full");
format8.innerHTML = stamp.format("12hour");
errorFormat.innerHTML = stamp.format("m/d/y") + "\n<strong>Console</strong> Format Error: \"y\" is not a proper format";
errorWord.innerHTML = stamp.format("fail");
startOf.innerHTML = stamp.startOf("month");
endOf.innerHTML = stamp.endOf("month");