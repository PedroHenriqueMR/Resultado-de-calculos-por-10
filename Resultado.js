import calculadora from "readline-sync";

var name = calculadora.question("\nQual seu nome? ");
var nome = name.toUpperCase(0);
console.log(`
Olá ${nome} !!
Seja bem vindo a plataforma.`);

console.log("\n")
var continuar = calculadora.question("Gostaria de ver os cálculos da nossa plataforma?\NSé sim digite 1\nSenão digite qualquer tecla.")

if(continuar == "1"){
    
    console.log("\n")
    console.log(`${nome}, você optou por continuar!!`);

    while(continuar){


        var contador = 0
        var numero = 1
        var resultado

        console.log("\nQual dos cálculos abaixo você gostaria de saber...");
        console.log("+ - Adição");
        console.log("- - Subtração");
        console.log("* - Multiplicação");
        console.log("/ - Divisão\n");

        var calculo = calculadora.question(" ");
        console.log("\n")

        if(calculo == "+"){

            console.log(`${nome}, você escolheu a opção Adição`)
            console.log("\n       Adição")

            while ( contador <= 10 ) {

                resultado = contador + 1;
                console.log(`Calculo: ${contador} + 1 = ${resultado}`);
                contador++;
            };

        }else if(calculo == "-"){

            console.log(`${nome}, você escolheu a opção Subtração\n\n`)
            console.log("\n       Subtração")
            
            while ( contador <= 10 ) {

                resultado = 10 - contador;
                console.log(`Calculo:  10 - ${contador} = ${resultado}`);
                contador++;
            };

        }else if(calculo == "*"){

            console.log(`${nome}, você escolheu a opção Multiplicação\n\n`)
            console.log("\n       Multiplicação")

            while ( contador <= 10 ) {

                resultado = contador * 1;
                console.log(`Calculo: ${contador} * 1 = ${resultado}`);
                contador++;
            };

        }else if(calculo == "/"){

            console.log(`${nome}, você escolheu a opção Divisão\n\n`)
            console.log("\n       Divisão")

            while ( contador <= 10 ) {

                resultado = 10 / contador;
                console.log(`Calculo:  10 / ${contador} = ${resultado}`);
                contador++;
            };

        }else{

            console.log(`${nome}, você escolheu uma opção invalida!!\n\n`)
    
        };

        console.log("\n")
        var continua = calculadora.question(`${nome}, sé você deseja continuar digite 1\nSenão digite qualquer tecla`);

        if(continua == "1"){

            console.log("\n")
            console.log(`${nome}, você optou por continuar!!`);

        }else{

            console.log(`${nome}, você optou por sair!!`);
            console.log("\n")
            break;
        };

    }
}else{

    console.log(`${nome}, você optou por sair!!`);

};