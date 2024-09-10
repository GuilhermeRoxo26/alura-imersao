function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);
    campoPesquisa = campoPesquisa.toLowerCase();


    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // se campoPesquisa estiver vazio, não mostra nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Busca vazia.</p>";
        return;
    }

    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada item (indice) do array de dados
    for (let indice of dados) {
        titulo = indice.titulo.toLowerCase();
        descricao = indice.descricao.toLowerCase();
        tags = indice.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado, formatando o título, descrição e link
            resultados += `
            <div class="item-resultado">
            <h2>${titulo}</h2>
            <p class="descricao-meta">
                ${descricao}
            </p>
            <a href="${indice.link}">Link</a>
            </div> 
             `;
        }

        if (!resultados) {
            resultados = "<p>Informação não encontrada.</p>";
            
        }


    }

    // Atribui o HTML construído ao conteúdo da seção
    section.innerHTML = resultados;
}
