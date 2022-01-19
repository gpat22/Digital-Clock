let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
a = new Date();
date = a.toLocaleDateString(undefined , options);
time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
document.getElementById("time").innerHTML = time + " <br>on " + date;
}, 1000);

setInterval(() => {

var getlondontime = function(){
    document.getElementById("uktime").innerHTML = new Date().toLocaleString("en-US", {
        timeZone:'Europe/London',timeStyle:'medium',hourCycle:'h24'});

}
getlondontime();
}, 1000);

setInterval(() => {

var getyorktime = function(){
    document.getElementById("yorktime").innerHTML = new Date().toLocaleString("en-US", {
        timeZone:'America/New_York',timeStyle:'medium',hourCycle:'h24'});

}
getyorktime();

}, 1000);


setInterval(() => {

    var getaustime = function(){
        document.getElementById("austime").innerHTML = new Date().toLocaleString("en-US", {
            timeZone:'Australia/Sydney',timeStyle:'medium',hourCycle:'h24'});
    
    }
    getaustime();
    
    }, 1000);


    setInterval(() => {

        var getparitime = function(){
            document.getElementById("partime").innerHTML = new Date().toLocaleString("en-US", {
                timeZone:'Europe/Paris',timeStyle:'medium',hourCycle:'h24'});
        
        }
        getparitime();
        
        }, 1000);
    

        