var moment = require('moment');

module.exports = {
    getDatesDiff: async (start_date, end_date, date_format = "YYYY-MM-DD") => {
        try {

            const getDateAsArray = date => {
                // console.log(date)
                let _date = date.toISOString().slice(0, 10)
                let _new_date = moment.utc(_date, date_format);
                console.log(_new_date)
                return _new_date;
            };

            const diff = getDateAsArray(end_date).diff(getDateAsArray(start_date), "month") + 1;
            console.log(diff)
            const dates = [];
            for (let i = 0; i < diff; i++) {
                const nextDate = getDateAsArray(start_date).add(i, "month");
                // console.log(nextDate)
                // const isWeekEndDay = nextDate.isoWeekday() > 5;
                // if (!isWeekEndDay)
                dates.push(nextDate.format(date_format))
            }
            return dates;

        } catch (error) {
            console.log(error)
        }

    },

    dateRange: async (startDate, endDate) => {
        var start = startDate.split('-');
        var end = endDate.split('-');
        var startYear = parseInt(start[0]);
        var endYear = parseInt(end[0]);
        var dates = [];

        for (var i = startYear; i <= endYear; i++) {
            var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
            var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
            for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
                var month = j + 1;
                var displayMonth = month < 10 ? '0' + month : month;
                dates.push([i, displayMonth, '01'].join('-'));
            }
        }
        return dates;
    }

}