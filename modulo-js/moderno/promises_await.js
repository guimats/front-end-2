// promise

function testes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const erro = false;
            if (erro) {
                reject('Erro...');
            } else {
                resolve('A promise foi resolvida com sucesso');
            }
        }, 2000);
    });
}

// com then e catch
// testes().then(function (res) {
//     console.log(res);
// }).catch(e => {
//     console.log(e);
// });

// com funções assincronas

async function testes2() {
    await testes().then(res => {
        console.log(res);
    });
    console.log('Olá');
}

testes2();