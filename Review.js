
console.log("************Filter Method************");
var user = [
    {firtname:"santoshi", lastname:"Nawkhare"},
    {firtname:"Gunjan", lastname:"Nawkhare"},
    {firtname:"ketan", lastname:"Nawkhare"}
];

var Fullname = user.filter(e => e.firtname.includes("Gunjan"));
console.log("My final result is :" ,Fullname);



console.log("************Map Method***************");
var server = [
    {firtname:"santoshi", lastname:"Nawkhare"},
    {firtname:"Gunjan", lastname:"Nawkhare"},
    {firtname:"ketan", lastname:"Nawkhare"}
];
var Myfullname = server.map(function(myfunction){
    return `${myfunction.firtname} ${myfunction.lastname}`
})
console.log("My map method result is :" , Myfullname);