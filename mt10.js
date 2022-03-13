function isValidIP(ip){
    ip=ip.split('.');
    if(ip.length!=4) return false
    for(let i=0;i<ip.length;i++){
        if(ip[i]=='') return false
        if(ip[i]<0 || ip[i]>255) return false
        if(ip[i].charAt(0)=='0' && ip[i].length>1) return false
    }
    return true;
}
console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));