document.getElementById('btn-filtrar').addEventListener('click', () => {
    const categoria = document.getElementById('categoria').value.toLowerCase();
    const precoMin = parseFloat(document.getElementById('preco-min').value) || 0;
    const precoMax = parseFloat(document.getElementById('preco-max').value) || Infinity;
    const busca = document.getElementById('busca').value.toLowerCase();

    const produtos = document.querySelectorAll('.produto-card');

    produtos.forEach(produto => {
        const titulo = produto.querySelector('h2').textContent.toLowerCase();
        const descricao = produto.querySelector('p').textContent.toLowerCase();
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$', '').replace(',', '.'));
        const categoriaProduto = titulo.includes('esportivo') ? 'esportivo' :
                                 titulo.includes('casual') ? 'casual' :
                                 titulo.includes('fashion') ? 'fashion' :
                                 titulo.includes('infantil') ? 'infantil' :
                                 titulo.includes('premium') ? 'premium' : '';

        const matchesCategoria = !categoria || categoriaProduto === categoria;
        const matchesPreco = preco >= precoMin && preco <= precoMax;
        const matchesBusca = titulo.includes(busca) || descricao.includes(busca);

        if (matchesCategoria && matchesPreco && matchesBusca) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
});