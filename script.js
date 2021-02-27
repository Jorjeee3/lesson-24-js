

//--------------------TASK-1---------------------



// function numbers(a, b) {

//     if (a < b) {
//         console.log(-1);
//     } else if (a > b) {
//         console.log(1);
//     } else {
//         console.log(0);
//     }

// }

// numbers(4, 4)


//--------------------TASK-2---------------------

// function factorial(n){
//     if (n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// let userNum = prompt('Введите число для вычисления факториала');
// console.log(factorial(userNum));

//--------------------TASK-3---------------------

// function numbers(a, b, c) {
//     let str = a.toString() + b.toString() + c.toString();
//     return str;

// }


// let numb1 = prompt("enter first num");
// let numb2 = prompt("enter second num");
// let numb3 = prompt("enter third num");

// alert(numbers(numb1, numb2, numb3))


//--------------------TASK-4---------------------

// function area(a, b) {

//     console.log(b)

//     if (!b) {
//         return a ** 2;
//     }
 
//     return a * b;
// }


// let firstNum = prompt("first num");
// let secondNum = prompt("second num");

// alert(area(firstNum, secondNum))

//--------------------TASK-5---------------------

let minBorder = 0;  
let maxBorder = 100;


function checkChoise() {

    let middleValue = Math.round((maxBorder + minBorder) / 2); 
    let usenChoise = prompt("Ваше число > " + middleValue + " < " + middleValue + " или ==" + middleValue + "?");

    switch (usenChoise) {

        case ">":
            minBorder = middleValue;
            checkChoise()
        break
        
        case "<":
            maxBorder = middleValue;
            checkChoise()
        break
        
        case "==":
            alert("мы угадали, съебался");
        break
            
    }
    
}
checkChoise()



//--------------------TASK-6---------------------

//--------------------TASK-7---------------------   