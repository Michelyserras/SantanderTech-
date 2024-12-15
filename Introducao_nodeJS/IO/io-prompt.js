const { rejects } = require('assert');
const { resolve } = require('path');
const readLine = require('readline'); //possibilidade de criar uma interface para interagir com o usuário

//  process variavel global
// stdIn = standard input = teclado
// stdOut = standard output = terminal

const prompt = readLine.createInterface({
    input: process.stdin , // entrada de dados
    output: process.stdout // saida de dados
})

// prompt.question('Qual o seu numero favorito?: ', (resposta) => { //callback aguarda a resposta e da a resposta com o dobro do numero
//     console.log(`O dobro do seu numero favorito é: ${parseInt(resposta) * 2}`)

//     prompt.question('Qual a sua cor favorita?: ', (resposta) => { //callback aguarda a resposta e da a resposta com o dobro do numero
//         console.log(`Sua cor favorita é: ${resposta}`)
//         prompt.close() // fechando terminal 
//     })
// })

// uma sequencia de perguntas gera muito aninhamento e torna dificil trabalhar

// uma forma mais legivel e fácil de trabalhar seria utilizando promisses
// como receber as informações de um usuário por meio do teclado sem usar callback e de maneira assíncrona

async function askUser(){
    const numero = await promptPromise.question('Qual o seu numero favorito?: ')
    console.log(`O dobro do seu numero favorito é: ${parseInt(numero) * 2}`)

    const cor = await promptPromise.question('Qual a sua cor favorita?: ')
    console.log(`Sua cor favorita é: ${cor}`)

    promptPromise.close()
    
}

const promptPromise = {
    question: (pergunta) => new Promise((resolve, rejects) => {
        try{
            prompt.question((pergunta), (resposta) => resolve(resposta))

        }catch(error){
            rejects(error)
        }
    }),
    close: () => prompt.close() // chamando a função original de close
}

askUser();

