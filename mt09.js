function digitalClock(arry){
    let str = ""
    let sec = arry%60;
    let min = Math.floor(((arry-sec)/60)%60);
    let hour = Math.floor(((arry-min)/60)/60);
    if(hour>=24) hour=0
    else hour;
    if(sec<10){sec="0"+sec}
    if(min<10){min="0"+min}
    if(hour<10){hour="0"+hour}
    str += hour+" : "+min+" : "+sec
    return str
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));