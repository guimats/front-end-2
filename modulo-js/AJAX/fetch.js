const url_get = 'https://jsonplaceholder.typicode.com/todos/6';
const url_post = 'https://jsonplaceholder.typicode.com/posts';

// requisição get
// fetch(url_get)
//     .then(response => response.json())
//     .then(json => console.log(json));

// requisição post
fetch(url_post, {
    method: 'POST',
    body: JSON.stringify({
        title: 'Danki Code',
        body: 'Meu conteúdo',
        userId: 10
    }),
    headers: {
        'Content-Type': 'application/json; chatset=UTF-8'
    }
    
})
    .then(response => response.json())
    .then(json => console.log(json));