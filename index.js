//indian watch

let indianwatch=()=>{

    let options={timeZone:"Asia/Kolkata"}
let currentDate=new Date().toLocaleDateString("en-US",options)
let currentTime=new Date().toLocaleTimeString("en-US",options)
document.querySelector("#indian-date").innerHTML=currentDate;
document.querySelector("#indian-time").innerHTML=currentTime
}


setInterval(indianwatch,1000)


//american watch

let americanwatch=()=>{

    let options={timeZone:"America/New_York"}
let currentDate=new Date().toLocaleDateString("en-US",options)
let currentTime=new Date().toLocaleTimeString("en-US",options)
document.querySelector("#usa-date").innerHTML=currentDate;
document.querySelector("#usa-time").innerHTML=currentTime
}


setInterval(americanwatch,1000)



//china watch

let chinawatch=()=>{

    let options={timeZone:"Asia/Shanghai"}
let currentDate=new Date().toLocaleDateString("en-US",options)
let currentTime=new Date().toLocaleTimeString("en-US",options)
document.querySelector("#china-date").innerHTML=currentDate;
document.querySelector("#china-time").innerHTML=currentTime
}


setInterval(chinawatch,1000)