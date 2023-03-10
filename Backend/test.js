var moment = require('moment');

// let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")


// console.log(doc_datetime)
// var dateObj = new Date("2020");
// console.log("Date: "+moment(doc_datetime).format("YYYY-MM-DD"));
// console.log("Year: "+moment(doc_datetime).format("YYYY"));
// console.log("Month: "+moment(doc_datetime).format("MM"));
// console.log("Month: "+moment(dateObj).format("MM"));
// console.log("Month: "+moment(dateObj).format("yyyy"));
// console.log(moment(doc_datetime).month(1-1).format("YYYY-MM-DD"));


// var getDaysArray = function(start, end) {
//     for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
//         arr.push(new Date(dt));
//     }
//     return arr;
// };
// var daylist = getDaysArray(new Date("2018-05-01"),new Date("2018-07-01"));
// // let n = daylist.map((v)=>v.toISOString().slice(0,10)).join(",")
// console.log(daylist);

const getDatesDiff = (start_date, end_date, date_format = "YYYY-MM-DD") => {
    const getDateAsArray = date => {
        // console.log(moment.utc(date.slice(0,10), date_format))
        return moment.utc(date.slice(0,10), date_format);
    };
    const diff = getDateAsArray(end_date).diff(getDateAsArray(start_date), "month") + 1;
    const dates = [];
    for (let i = 0; i < diff; i++) {
        const nextDate = getDateAsArray(start_date).add(i, "month");
        dates.push(nextDate.format(date_format))
    }
    return dates;
};

const date_log = getDatesDiff('2019-10-01', '2020-10-01');
console.log(date_log);


// function dateRange(startDate, endDate) {
//     var start      = startDate.split('-');
//     var end        = endDate.split('-');
//     var startYear  = parseInt(start[0]);
//     var endYear    = parseInt(end[0]);
//     var dates      = [];
  
//     for(var i = startYear; i <= endYear; i++) {
//       var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
//       var startMon = i === startYear ? parseInt(start[1])-1 : 0;
//       for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
//         var month = j+1;
//         var displayMonth = month < 10 ? '0'+month : month;
//         dates.push([i, displayMonth, '01'].join('-'));
//       }
//     }
//     return dates;
//   }


// const date_log = dateRange('2019-10-01', '2020-10-01');
// console.log(date_log);

var startDate = moment('2012-04-01');
var endDate = moment('2014-11-01');

var result = [];

if (endDate.isBefore(startDate)) {
    throw "End date must be greated than start date."
}      

while (startDate.isBefore(endDate)) {
    result.push(startDate.format("YYYY-MM-01"));
    startDate.add(1, 'month');
}

console.log(result)




