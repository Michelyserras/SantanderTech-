// const temCnh = true
// const idade = 13
// let numeroPassageiros = 0
// const podeDirigir = idade > 18 && temCnh

// // if(idade > 18 && temCnh){
// //     console.log("Pessoa pode dirigir")
// //     numeroPassageiros = 4;
// // }else{
// //     console.log("Pessoa não pode dirigir")
// //     numeroPassageiros = 0
// // }

//  numeroPassageiros = podeDirigir ? 4 : 0

// console.log({numeroPassageiros})

// const usuarios = ["Joana", "maria", "Felipa", "doana"]

// console.log("Olá " + usuarios[0]);
// console.log("Olá " + usuarios[1]);
// console.log("Olá " + usuarios[2]);


const user = {
    nome: 'JOSE MARIA SOUZA SILVA',
    email: 'josseMaria@gmail.com'
}

for(const key in user){
    if(key == 'nome'){
        const names = user[key].split(' '); // divide o nome em array
        user[key] = '' // deixa a key nome vazia para não juntar com o nome antigo 
       
        for(const name of names){ // percorre cada nome dentro da array
            const normalizedName = name.toLowerCase() // deixa todas as letras minusculas

            const [primeiraLetra, ...resto] = normalizedName // a primeira variavel armazena o primeiraa letra, e o resto é armazenado em outra array

            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + resto.join('') // juntando os dados 
            user[key] = user[key].trim(); // retira os espaços do começo e fim
        }
    }
    if(key == 'email'){
        user[key] = user[key].toLowerCase()
    }
}

console.log({user})