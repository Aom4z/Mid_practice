function simplePait (arr,num) {
    let s = new Array()
    arr.forEach((i)=>{
        let n1 = arr[i-1]
        arr.forEach((j)=>{
            if(n1*arr[j-1] == num){
                return s = [arr[j-1],n1]
            }
    })})
    if(s[0]==s[1]) s = null
    return s
}
console.log(simplePait([1,2,3],3));
console.log(simplePait([1,2,3],6));
console.log(simplePait([1,2,3],9));