debugger;
var ar;
ar =['h','o','l','a']; 
console.warn("Longitud de ar: ", ar.length);
console.log("Longitud de ar: "+ ar.length+ar)

// este es un comentario

/* 
1 hola
2 mira mi
3 comentario
*/

 var miNombre="Alejandro Bernal";

// for(var i=0; i<miNombre.length; i++){
//     console.log(miNombre[i]," => ",i);
// }
//for (declara variables; condicion; instrucciones de cambio);
//
var x ="";


for(var i=0; i<miNombre.length; i++){
 if(isPair(i)){
    convertChart(miNombre[i],isPair(miNombre[i]));
     x=x+miNombre[i].toUpperCase();
 }else{
    console.log(miNombre[i].toLowerCase());
    x=x+miNombre[i].toLowerCase();
 }

}
console.log(x);

function isPair(x){
    return x % 2 ==0 ?true:false;
}
function convertChart(c,isUp){
    return isUp?c.toUpperCase():c.toLowerCase();
}

function GetLast(T){
    return T[T.length -1 ];
}

function mostrarTexto(T){ 
var temp="";
    for (var i = 0; i < T.length; i++) {
    temp=temp+convertChart(T[i],isPair([T]));
    console.log(GetLast(temp)," => ",T[i]);
}
console.log(temp);
}
