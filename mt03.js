function capToFront(string){
    var split = string.split("");
    var caps = []; 
    var lower = []
    for (var i = 0; i < split.length; i++)
        {
            if (split[i] == split[i].toUpperCase()){              
               caps.push(split[i]);
    
            }
            if (split[i] == split[i].toLowerCase()){
                lower.push(split[i]);
            }
            }
        return caps.join("").concat(lower.join(""));
    
}

console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))