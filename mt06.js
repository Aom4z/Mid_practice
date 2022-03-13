function removeDups(arry){
    var tmp = new Array();
    for (i=0;i<arry.length;i++)
        if (tmp.indexOf(arry[i]) == -1)
            tmp.push(arry[i]);
    return tmp;
}

console.log(removeDups([1,0,1,0]))
console.log(removeDups(["The","big","cat"]))
console.log(removeDups(["John","Taylor","John"]))