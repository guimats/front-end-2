const geraPokemons = async (quant) => {
    const allpokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit='+quant)
        .then(response => response.json())
        .then(allpokemon => allpokemon.results.map(values => values.url));

    allpokemon.map(value => {
        fetch(value)
            .then(response => response.json())
            .then(pokemonInfos => {
                const pokemonBoxes = document.querySelector('.pokemon-boxes');
                pokemonBoxes.innerHTML += `
                    <div class='container'>
                        <div class="pokemon-box">
                            <div class="pokemon-intro" onclick="some(this)">
                                <img src=${pokemonInfos.sprites.front_default}>
                                <p>${pokemonInfos.name}</p>
                            </div>
                            <div class="pokemon-infos" onclick="some(this)">
                                <h3>Status</h3>
                                <span>HP: ${pokemonInfos.stats[0].base_stat}</span>
                                <span>Attack: ${pokemonInfos.stats[1].base_stat}</span>
                                <span>Defense: ${pokemonInfos.stats[2].base_stat}</span>
                                <span>Speed: ${pokemonInfos.stats[5].base_stat}</span>
                            </div>
                        </div>
                    </div>
                    
                `
            });
    }
    );
}

geraPokemons(12);
