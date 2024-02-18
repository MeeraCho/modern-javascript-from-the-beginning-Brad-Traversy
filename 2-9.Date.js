
let d;

d = new Date(); // object Thu Feb 01 2024 15:24:02 GMT-0700 (Mountain Standard Time)

//YYYY, mm, dd- month is zero base 0:Jan 1:Feb 
d = new Date(2021, 0, 10) // Sun Jan 10 2021 00:00:00 GMT-0700 (Mountain Standard Time)
d = new Date(2021, 0, 10, 12, 30, 59) // Sun Jan 10 2021 12:30:59 GMT-0700 (Mountain Standard Time)
d = new Date('2021-07-10'); //No good! off time zone. Fri Jul 09 2021 18:00:00 GMT-0600 (Mountain Daylight Time)
d = new Date('07-10-2021'); //works good! Sat Jul 10 2021 12:30:59 GMT-0600 (Mountain Daylight Time)
d = new Date('2021-07-10T12:15:55'); // T는 time. Sat Jul 10 2021 12:15:55 GMT-0600 (Mountain Daylight Time)
d = new Date('07/10/2021 12:30:59'); //Sat Jul 10 2021 12:30:59 GMT-0600 (Mountain Daylight Time)

//getTime()
d = new Date('07-10-2022');
d = d.getTime(); //number 1657432800000 - millisecond in time
d = d.valueOf(); //number 1657432800000 


// Date.now() & new Date()
d = new Date(); // 현재 시간. object Thu Feb 01 2024 15:52:22 GMT-0700 (Mountain Standard Time)
d = Date.now(); //number 1706827099300 <- milliseconds
d = new Date (1706827099300) // object Thu Feb 01 2024 15:38:19 GMT-0700 (Mountain Standard Time)

d = Math.floor(Date.now() / 1000); //number 1706827838

//Date Object 
//get date and time 
let x; 
d = new Date();

x = d.toString(); //string Thu Feb 01 2024 15:55:49 GMT-0700 (Mountain Standard Time)

x = d.getTime(); // number 1706828260090
x = d.valueOf(); // number 1706828260090

x = d.getFullYear(); // 2024
x = d.getMonth() + 1; // 2 (2월)
x = d.getDate(); // 1 (1일)
x = d.getDay(); // 4 (Thursday)
x = d.getHours(); // 16 (4pm)
x = d.getMinutes(); // 6 (06 minutes)
x = d.getSeconds(); // 4 
x = d.getMilliseconds();

//format
// x = `${ d.getFullYear()}-${(d.getMonth() + 1)}-${d.getDate()}` //
// x = Intl.DateTimeFormat('en-US').format(d); 2/1/2024
// x = Intl.DateTimeFormat('en-GB').format(d); 01/02/2024
x = Intl.DateTimeFormat('default').format(d); // string 2/1/2024
x = Intl.DateTimeFormat('default', {month: 'long'}).format(d); // February
x = d.toLocaleString('default', {month: 'short'}) //Feb

x = d.toLocaleString('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long',
    timeZone: 'MST',
    timeZoneName: "short",
}) //string Thursday, February 1, 2024 at 4:32:40 PM GMT-7


// console.log( typeof d, d ); 
console.log( typeof x, x); 