if(condition){
    //do something
}else{
    //do something
}

var a = 2345
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var name = "Santanu";
if(name=="Sidhanta"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Santanu"){
    console.log(`Hi ${name} you are superadmin`)

}else{
 console.log(`Hi ${name} I don't know you`)
}

//any condition can match
var name = "Santanu "
if(name == "Santanu" && name == "Sidhanta"){
    console.log(`Hi ${name} you are welcome`)
}

//Both condition should match

var name = "Sidhant"
if(name=="Santanu" && role=="Admin"){
    console.log(`hi ${name} you are ${role}`)
}

var a =1
if(a){
    console.log("HI")
}else{
    console.log("Bie")
}

var a = 0
if(a){
    console.log("hi")
}else{
    console.log("Bie")
}

Ternary >  It is single line if else condition

var a = 10;
a>10?"hii":"Bie"
'Bie'



