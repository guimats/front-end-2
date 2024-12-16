// API link: 'https://developer.themoviedb.org/docs/getting-started';
const api = 'https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1';

fetch(api, {
    method: 'GET'
})
    .then(response => response.json())
    .then(json => {
        const container = document.querySelector('.container');

        json.results.map(val => {
            container.innerHTML += `
            
            <div class='titulo_filme' style="cursor:pointer">
                ${val.title}
                <div class='description' style='display: none'>
                    ${val.overview}
                </div>
            </div>
            <hr>

            `;
        })

        const titulos = document.querySelectorAll('.titulo_filme');
        for (let i = 0; titulos.length; i++) {
            titulos[i].addEventListener('click', e => {
                e.target.querySelector('.description').classList.toggle('show_description');
            })
        }
    });