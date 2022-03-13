function numbersplit(number){
    let a = number/2
    let b = []
    if (number % 2 == 0){
        b = [a,a]
    }else{
        b = [Math.ceil(a-1),Math.ceil(a)]
    }
    return b
}

console.log(numbersplit(4))
console.log(numbersplit(10))
console.log(numbersplit(11))
console.log(numbersplit(-9))