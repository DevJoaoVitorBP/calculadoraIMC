const peso = 63;
const altura = 1.62;

let imc = peso / (altura * altura);

if (imc > 40) {
console.log('Obesidade grave')
} else if( imc >= 30){
    console.log('Obeso')
}else if (imc >= 25) {
    console.log('Acima do peso');
} else if (imc >= 18.5) {
    console.log('peso normal, minha princesa grega 🧡');
}else{
    console.log('Abaixo do peso');
}
