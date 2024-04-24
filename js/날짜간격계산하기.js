let date = new Date();
let now = parseInt(date.getTime()/(1000*60*60*24));

const date2 = new Date("2024/08/30/09:00:00");
let remainTime = parseInt(date2/(1000*60*60*24));
console.log(remainTime - now);

document.getElementById("date").innerHTML = (remainTime - now);