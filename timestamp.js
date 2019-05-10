var newDate = "5/5/2019 4:46:19";
class Timestamp {
    constructor(date) {
        if (!date)
            this.date = new Date();
        else
            this.date = new Date(date);

        this.month = function(format = "m") {
            var month = this.date.getMonth() + 1;
            var longMonth;

            switch(month) {
                case 1:
                    longMonth = "January";
                    break;
                case 2:
                    longMonth = "February";
                    break;                    
                case 3:
                    longMonth = "March";
                    break;
                case 4:
                    longMonth = "April";
                    break;
                case 5:
                    longMonth = "May";
                    break;
                case 6:
                    longMonth = "June";
                    break;                    
                case 7:
                    longMonth = "July";
                    break;
                case 8:
                    longMonth = "August";
                    break;
                case 9:
                    longMonth = "September";
                    break;
                case 10:
                    longMonth = "October";
                    break;                    
                case 11:
                    longMonth = "November";
                    break;
                case 12:
                    longMonth = "December";
                    break;
            }

            if (format == "m") {
                return month.toString();
            } else if (format == "mm") {
                if (month < 10)
                    return "0" + month;
                return month;
            } else if (format == "M") {
                return longMonth.slice(0, 3);
            } else if (format == "MM") {
                return longMonth;
            } else {
                console.error(`Error: "${format}" is not a proper format`);
            }
        }
        
        this.day = function(format = "d") {
            var day = this.date.getDate();

            if (format == "d") {
                return day.toString();
            } else if (format == "dd") {
                if (day < 10)
                    day = "0" + day;
                return day;
            } else if (format == "DD") {
                var lastDigit = day.toString().substr(-1);
                var suffix;

                switch (lastDigit) {
                    case "1":
                        suffix = "st";
                        break;
                    case "2":
                        suffix = "nd";
                        break;
                    case "3":
                        suffix = "rd";
                        break;
                    default:
                        suffix = "th";
                        break;
                }

                return day + suffix;
            }
        }
        
        this.weekday = function(format = "WW") {
            var weekday = this.date.getDay()
            var dow;

            switch (weekday) {
                case 0:
                    dow = "Sunday";
                    break;                
                case 1:
                    dow = "Monday";
                    break;
                case 2:
                    dow = "Tuesday";
                    break;                
                case 3:
                    dow = "Wednesday";
                    break;
                case 4:
                    dow = "Thursday";
                    break;                
                case 5:
                    dow = "Friday";
                    break;               
                case 6:
                    dow = "Saturday";
                    break;
            }

            if (format == "w") {
                return weekday + 1;
            } else if (format == "W") {
                return dow.substring(0, 3);
            } else if (format == "WW") {
                return dow;
            }
        }
        
        this.year = function(format = "yyyy") {
            var year = this.date.getFullYear();

            if (format == "yyyy") {
                return year.toString();
            } else if (format == "yy") {
                return year.toString().substring(2);
            } else {
                console.error(`Error: "${format}" is not a proper format`);
            }
        }

        this.hour = function(format = "h") {
            var hour = this.date.getHours();

            if (format == "h") {
                if (hour >= 12)
                    hour -= 12
                return hour
            } else if (format == "hh") {
                if (hour >= 12)
                    hour -= 12                
                if (hour < 10)
                    return "0" + hour
                return hour;
            } else if (format == "H") {
                return hour;
            } else if (format == "HH") {              
                if (hour < 10)
                    return "0" + hour;
                return hour;
            }
        }

        this.minute = function(format = "i") {
            var minute = this.date.getMinutes();

            if (format == "i") {
                return minute;
            } else if (format == "ii") {              
                if (minute < 10)
                    return "0" + minute;
                return minute;
            }
        }

        this.second = function(format = "s") {
            var second = this.date.getSeconds();
            var millisecond = this.date.getMilliseconds();

            switch(format) {
                case "s":
                    return second;
                case "ss":
                    if (second < 10)
                        return "0" + second;
                    return second;
                case "S":
                    return `${second}.${millisecond}`
                case "SS":
                    if (second < 10)
                        return `0${second}.${millisecond}`;
                    return `${second}.${millisecond}`
            }
        }

        this.meridiem = function(format = "x") {
            var hour = this.date.getHours();

            switch(format) {
                case "x":
                if (hour >= 12)
                    return "pm"
                else
                    return "am"
                case "X":
                if (hour >= 12)
                    return "PM"
                else
                    return "AM"
            }
        }

        this.format = function(format = "yyyy-mm-ddTHH:ii:ss") {
            var orgFormat = format;
            if (orgFormat.includes("y")) {
                var search = orgFormat.match(/[y]+/g)[0];                
                var year = this.year(search);
                format = format.replace(search, year);
            }
            if (orgFormat.includes("h") || orgFormat.includes("H")) {
                var search = orgFormat.match(/[hH]+/g)[0];
                var hour = this.hour(search);
                format = format.replace(search, hour);
            }
            if (orgFormat.includes("d") || orgFormat.includes("D")) {
                var search = orgFormat.match(/[dD]+/g)[0];
                var day = this.day(search);
                format = format.replace(search, day);
            }
            if (orgFormat.includes("i")) {
                var search = orgFormat.match(/[i]+/g)[0];                
                var minute = this.minute(search);
                format = format.replace(search, minute);
            }
            if (orgFormat.includes("s") || orgFormat.includes("S")) {
                var search = orgFormat.match(/[sS]+/g)[0];
                var second = this.second(search);
                format = format.replace(search, second);
            }
            if (orgFormat.includes("m") || orgFormat.includes("M")) {
                var search = orgFormat.match(/[mM]+/g)[0];
                var month = this.month(search);
                format = format.replace(search, month);
            }
            if (orgFormat.includes("w") || orgFormat.includes("W")) {
                var search = orgFormat.match(/[wW]+/g)[0];
                var weekday = this.weekday(search);
                format = format.replace(search, weekday);
            }
            if (orgFormat.includes("x") || orgFormat.includes("X")) {
                var search = orgFormat.match(/[xX]+/g)[0];                
                var meridiem = this.meridiem(search);
                format = format.replace(search, meridiem);
            }
            return format;
        }
    }
}

const timestamp = function(date) {
    return new Timestamp(date);
}