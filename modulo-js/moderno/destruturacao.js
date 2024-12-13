// const arr = ['Guilherme', 'Mateus', 'Silva', 'Henrique']
// const [a, b, ...c] = arr

// console.log(a);
// console.log(b);
// console.log(c);


// spread

// let nomes = [
//     {
//         nome: 'João'
//     },
//     {
//         nome: 'Felipe'
//     }
// ];

// const objetos = [...nomes, {
//     nome: 'Guilherme'
// }];
// console.log(objetos);


//rest

const testes = (...numeros) => {
    console.log(numeros);
};

testes(1, 2, 3, 4, 5, 6);