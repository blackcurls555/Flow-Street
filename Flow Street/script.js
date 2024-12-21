async function carregar() {
    await fetch('api/banco.json')
        .then(response => response.json())
        .then(produtos => {

            console.log(produtos)
            const container = document.querySelector('#emalta')

            produtos.map((produto, index) => {
                const card = document.createElement('div')
                card.classList.add('card')

                const img = document.createElement('img')
                img.src = produto.imagem_frente
                img.alt = produto.nome

                // Evento de mouse para mudar a imagem
                img.addEventListener('mouseover', () => {
                    img.src = produto.imagem_costas;  // Mudar para a imagem das costas
                });

                // Evento de mouse para voltar a imagem original
                img.addEventListener('mouseout', () => {
                    img.src = produto.imagem_frente;  // Voltar para a imagem da frente
                });

                card.addEventListener('click', () => {
                    window.location.href = produto.link
                })

                const nomeProduto = document.createElement('h3')
                nomeProduto.textContent = produto.nome

                const precoProduto = document.createElement('h4')
                precoProduto.textContent = produto.preco

                card.appendChild(img)
                card.appendChild(nomeProduto)
                card.appendChild(precoProduto)
                container.appendChild(card)

                if ((index + 1) % 4 === 0) {
                    container.appendChild(document.createElement('div'))
                }

            })
        })
}

carregar()