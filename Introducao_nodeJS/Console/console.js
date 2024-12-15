// possibilidade de criar novos consoles
// metodos úteis;

// console.log: 
// console.error para mostrar informações de erro
const path = require('node:path')// variavel para manipular caminhos, o node na frente serve para indicar que usaremos apenas a implementação do node

const filePath = path.join(process.cwd(), 'texto.txt')
const fileOutPath = path.join(process.cwd(), 'texto-com-linhas.txt')

// join = junta os arqumentos
// process indica a pasta que está rodando no diretório atual 


console.log(filePath);

// utilitarios do node para ler arquivos
const fs = require('node:fs') // fileSystem
console.time('leitura do arquivo')
console.time('manipular arquivo')
fs.readFile(filePath, {}, (erro, dados) =>{
    if(erro) {
        console.error(`Erro na leitura do arquivo no caminho ${filePath}`)
        return
    }
    console.timeEnd('leitura do arquivo')
        // como manipular o arquivo
    const texto = dados.toString()
    const linhas = texto.split('\n')
    console.time('manipular arquivos')
    const linhasAjustadas = linhas.map((linha, index, arrayDeLinhas) => 
        `${index + 1} - ${linha}`
    )  

    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro)=> {
        if(erro) {
            console.log(`Erro na escrita do arquivo no caminho ${fileOutPath}`)
            return
        }
        })
    console.timeEnd('manipular arquivos')
})
