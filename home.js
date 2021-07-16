console.log('hello');
//var age=prompt('what is your age?');
//document.getElementById('age').innerHTML=age
//alert('yoo');
function fun(){
    console.log("this is a fuction")
}  

function greeting(s){

    var result='Hello '+ s;//string concatenation
    document.getElementById('age').innerHTML=result;
}
//var name =prompt('what is your name?');
//greeting(name)

function sum(a,b){
    console.log(a+b);
}
//sum(10,20);
let fruits="banana\napple";
//console.log(fruits.split('\n'));

students={name:'Atishay ',
surname:'Jain',
age:18,
fn:function(){
    return this.name+this.surname;//this : current object
}
};
students.name="aryan";
console.log(students.fn());


