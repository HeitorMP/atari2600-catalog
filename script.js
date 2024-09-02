document.addEventListener('DOMContentLoaded', () => {
    const gamesList = document.getElementById('games-list');

    fetch('atari2600.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.classList.add('game-card');

                gameCard.innerHTML = `
                    <h2>${game.titulo}</h2>
                    <p><strong>Data de Lançamento:</strong> ${game.data_de_lancamento || 'N/A'}</p>
                    <p><strong>Descrição:</strong> ${game.descricao || 'N/A'}</p>
                    <p><strong>Quantidade de Jogadores:</strong> ${game.quantidade_de_jogadores || 'N/A'}</p>
                    <p><strong>Gênero:</strong> ${game.genero || 'N/A'}</p>
                    <p><strong>Capa:</strong> <img src="${game.url_capa || 'default.jpg'}" alt="${game.titulo}" style="max-width: 100%; height: auto;"></p>
                `;

                gamesList.appendChild(gameCard);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
            gamesList.innerHTML = '<p>Não foi possível carregar os jogos.</p>';
        });
});
