var util = require('util');

var infoMax = function(arr){
    var max = arr[0];
    for(var i = 1; i<=arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }   
    console.info(max);
}

var infoMin = function(arr){
    var min =  arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.info(min);
}

 var logEvenNumSquare = function(n){
    if(n%2==0 && n!==0){
        let x=n*n;
        console.log(x);
    }else{
        console.error("Error: Number is't even");
    }
}

var somePerson = function(name,username,age){
    this.name = name;
    this.username = username;
    this.age = age;
}

somePerson.prototype.sayPersonalInfo = function(){
    console.log(util.format("User name is %s %s he/she is %d years old.",this.name,this.username,this.age)); 
}

exports.somePerson = somePerson;
exports.infoMax = infoMax;
exports.infoMin = infoMin;
exports.logEvenNumSquare = logEvenNumSquare;