/* Criando a classe pessoa */

class pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

/* Criando o metódo para calcular o IMC */
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

/* Criando o metódo para fazer a classificação do IMC */    

    classificacaoImc(){
        if (this.calcularIMC() < 18.5) {
            return 'Abaixo do peso';
        } else if (this.calcularIMC() >= 18.5 && this.calcularIMC() < 25) {
            return 'Peso normal';
        } else if (this.calcularIMC() >= 25 && this.calcularIMC() < 30) {
            return 'Sobrepeso';
        } else if (this.calcularIMC() >= 30 && this.calcularIMC() < 40) {
            return 'Obesidade grau I';
        } else if (this.calcularIMC() >= 40 && this.calcularIMC() < 50) {
            return 'Obesidade grau II';
        }else{
            return 'Obesidade grau III';
        }
    }

}

/* Instanciando a classe pessoa */

const arthur = new pessoa('José', 130, 1.75);
console.log('Seu IMC: '+ arthur.calcularIMC());

console.log('Classificação: ' + arthur.classificacaoImc());

