function highestDigit(num) {
    if(num == 0){ return 0 }
    else{
        let a=num%10;
        let b=(num-a)/10;
        return Math.max(a,highestDigit(b));
    }
}

console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))