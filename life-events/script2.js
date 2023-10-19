let wage = prompt("what is your hourly rate?")
let hours = prompt("how many hours do you work a week?")
let pay = 0

if(hours>40) {
    let overtime = hours - 40
    let normalTime = hours-overtime
    let overtimeWage = wage*1.5
    pay = (wage*normalTime) + (overtimeWage*overtime)
    hours = normalTime+overtime
    console.log(`At a wage of $${wage} per hour, working ${hours} hours per week, weekly pay is $${pay}. (${normalTime} hours at $${wage} + ${overtime} hours at $${overtimeWage})`)
} else {
    pay = wage*hours
    console.log(`At a wage of $${wage} per hour, working ${hours} hours per week, weekly pay is $${pay}.`)
}

let millionaireCountdown = Math.ceil(1000000/pay)

console.log(`To become a millionare, you must work for ${millionaireCountdown} weeks.`)