/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
let testEmployee = ["Gray", "Worm", "Security", 1]

function createEmployeeRecord(list) {
    return {
        firstName: list[0],
        familyName: list[1],
        title: list[2],
        payPerHour: list[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}
function createEmployeeRecords(employeeinfo) {
    return employeeinfo.map(function (row) {
        return createEmployeeRecord(row)
    })
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    let [ date, hour] = dateStamp.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function hoursWorkedOnDate(exactDate) {
    let inTime = this.timeInEvents.find(function (event) {
        return event.date === exactDate
    })
    let outTime = this.timeOutEvents.find(function (event) {
        return event.date === exactDate
    })

    return (outTime.hour - inTime.hour)/100
}

function wagesEarnedOnDate(paid) {
    let wage = hoursWorkedOnDate.call(this,paid)
    *this.payPerHour
    return parseFloat(wage);
}

function findEmployeeByFirstName(srcArray , firstName) {
    return srcArray.find(function (person){
        return person.firstName === firstName
    })
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(function (memo,record) {
        return memo + allWagesFor.call(record)
    }, 0)
}