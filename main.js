document.addEventListener('DOMContentLoaded', function () {
    // Seleção dos elementos no DOM
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repositorio = document.querySelector('#repos'); // Corrigido: Seleção correta pelo ID
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    // Fazendo a requisição para a API do GitHub
    fetch('https://api.github.com/users/Gabzineo')
        .then(function (res) {
            return res.json()
        })
        .then(function (json) {
        name.innerHTML = json.name;   
        username.innerHTML = json.login;
        avatar.src = json.avatar_url;
        following.innerHTML = json.following;
        followers.innerHTML = json.followers;
        repositorio.innerHTML = json.public_repos;
        link.href = json.html_url;


        })
        .catch(function (error) {
            console.error('Erro ao buscar os dados do GitHub:', error);
        });
});
