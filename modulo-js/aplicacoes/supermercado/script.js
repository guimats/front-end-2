let items = [];
let i = 0;

document.querySelector('input[type=submit]').addEventListener('click', () => {
    const nome_produto = document.querySelector('input[name=nome_produto]');
    const valor_produto = document.querySelector('input[name=price]');
    items.push({
        nome: nome_produto.value,
        valor: valor_produto.value,
        id: i
    });

    let total = 0;
    const lista_produtos = document.querySelector('.lista-produtos');
    const soma_produtos = document.querySelector('.soma-produtos h1');
    lista_produtos.innerHTML = '';
    soma_produtos.innerHTML = '';

    items.map(val => {
        lista_produtos.innerHTML += `
            <div class="lista-produtos-single">
                <h3>${val.nome}</h3>
                <h3 class="price-produto"><span>R$${val.valor}</span></h3>
            </div>
        `;
        total += Number(val.valor);
        soma_produtos.innerHTML = `Total: RS$${total.toFixed(2)}`;
    });

    nome_produto.value = '';
    nome_produto.focus();
    valor_produto.value = '';
    i++;
});

document.querySelector('button[name=limpar]').addEventListener('click', () => {
    items = [];
    document.querySelector('.lista-produtos').innerHTML = '';
    document.querySelector('.soma-produtos h1').innerHTML = 'Total: RS$0';
});
