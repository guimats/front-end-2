const geraPokemons = async () => {
    const allpokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
        .then(response => response.json())
        .then(allpokemon => allpokemon.results.map(values => values.url));

    allpokemon.map(value => {
        fetch(value)
            .then(response => response.json())
            .then(pokemonInfos => {
                const pokemonBoxes = document.querySelector('.pokemon-boxes');
                pokemonBoxes.innerHTML += `
                    <div class="pokemon-box">
                        <div class="pokemon-intro" onclick="some(this)">
                            <img src=${pokemonInfos.sprites.front_default}>
                            <p>${pokemonInfos.name}</p>
                        </div>
                        <div class="pokemon-infos hiding" onclick="some(this)">
                            <h3>Status</h3>
                            <span>Life: 40</span>
                            <span>Attack: 50</span>
                            <span>Defense: 60</span>
                            <span>Lorem: 123</span>
                        </div>
                    </div>
                    
                `
            });
    }
    );
}

geraPokemons();

const some = (element) => {
    element.parentElement.children[0].classList.toggle('hiding');
    element.parentElement.children[1].classList.toggle('hiding');
}