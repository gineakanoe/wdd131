const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[1] < LIMIT) {
        console.log(studentReport[i]);
    }
}

//while loop
let i = 0
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// forEach loop
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

// for...in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

const today = new Date;

for (let i = 1; i <=  DAYS; i++) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
}