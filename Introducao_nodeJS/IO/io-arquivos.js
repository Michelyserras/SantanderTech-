// como ler arquivos utilizando node js

/* 
O node disponibiliza algumas variaveis  para realizar essa manipulação: 
processo: é o diretorio rodando para encontrar o arquivo
DirName: variavel global para ler arquivos, mas funcionaria melhor ao utilizar typescript
*/

const path = require('node:path')// variavel para manipular caminhos, o node na frente serve para indicar que usaremos apenas a implementação do node

const filePath = path.join(process.cwd(), 'texto.txt')
const fileOutPath = path.join(process.cwd(), 'texto-com-linhas.txt')

// join = junta os arqumentos
// process indica a pasta que está rodando no diretório atual 


console.log(filePath);

// utilitarios do node para ler arquivos
const fs = require('node:fs') // fileSystem

fs.readFile(filePath, {}, (erro, dados) =>{
    if(erro) {
        console.log(`Erro na leitura do arquivo no caminho ${filePath}`)
        return
    }
        // como manipular o arquivo
    const texto = dados.toString()
    const linhas = texto.split('\n')

        // linhas.forEach((linha, index) => 
        //     console.log(`${index + 1} - ${linha}`)
        // )
       // console.log(dados.toString()) //decodifica um buffer para string 
       
    // gravando o conteudo em um arquivo
    const linhasAjustadas = linhas.map((linha, index, arrayDeLinhas) => 
        `${index + 1} - ${linha}`
    )  

    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro)=> {
        if(erro) {
            console.log(`Erro na escrita do arquivo no caminho ${fileOutPath}`)
            return
        }
        })
})
