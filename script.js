let n = parseInt (prompt("Escreva o numerador"));
console.log("Numerador" + ": " + n);

let d = parseInt (prompt("Escreva o denominador"));
console.log("Denominador" + ": " + d);

let r;

if( d == 0 ) {
    alert("Não é possivel divir por zero.")
} else {
    r = n / d

    console.log(n + " dividido por " + d + " é " + r);
    alert(n + " dividido por " + d + " é " + r);
}