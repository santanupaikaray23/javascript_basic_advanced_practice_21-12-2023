// multiple condition and multiple output (ifelse)
// One condition and one output(ternary)
// One condition and multiple output(switch)

var name = "Santanu"

switch(name){
    case 'Sidhanta' :
        console.log(`hi ${name}`)
        break;
        case 'Sipun' :
            console.log(`hi ${Santanu}`)
            break;
            default :
            console.log(`hi default case`)
}

var input = 3

switch (input%2){
    case 0:
        console.log(`Number is even`)
        break;
        case 1:
            console.log(`Number is odd`)
            break;
            default:
                console.log(`hi default case`)

}

switch(new Date().getDay()){
    case 0:
        console.log(`Today is Sunday`)
        break;
        case 4:
            console.log(`Today is friday`)
            break;
            default:
                console.log(`Invalid input`)
}