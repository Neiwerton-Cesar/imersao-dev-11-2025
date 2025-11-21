# 🚀 Base de Conhecimento de Tecnologias

Bem-vindo à Base de Conhecimento de Tecnologias! Este é um projeto de front-end simples, mas poderoso, criado para servir como um guia rápido e um catálogo de diversas linguagens de programação, frameworks e ferramentas de desenvolvimento. A interface exibe as tecnologias em formato de "cards" e permite uma busca dinâmica para filtrar o conteúdo.

Este projeto foi desenvolvido como parte da Imersão Dev da Alura + Google.

## ✨ Funcionalidades

- **Visualização em Cards:** Cada tecnologia é apresentada em um card individual, contendo seu nome, ícone, ano de criação, uma breve descrição e um link para a documentação oficial.
- **Busca Dinâmica:** Uma barra de pesquisa permite que o usuário filtre os cards em tempo real, buscando por nome ou por palavras na descrição da tecnologia.
- **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, proporcionando uma boa experiência de uso em desktops, tablets e dispositivos móveis.
- **Carregamento de Dados Externo:** As informações sobre as tecnologias são carregadas de forma assíncrona a partir de um arquivo `data.json`, tornando o projeto facilmente escalável para adicionar novos itens.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web fundamentais:

- **HTML5:** Para a estruturação semântica do conteúdo.
- **CSS3:** Para a estilização completa da página, utilizando recursos modernos como:
  - **Flexbox** para layouts flexíveis.
  - **CSS Variables** para um tema consistente e de fácil manutenção.
  - **Media Queries** para garantir a responsividade.
- **JavaScript (ES6+):** Para toda a interatividade e manipulação do DOM, incluindo:
  - **Fetch API** com `async/await` para consumir os dados do arquivo JSON.
  - **Manipulação de Eventos** para a funcionalidade de busca.
  - **Renderização Dinâmica** de elementos HTML.

---

## 📂 Estrutura do Projeto

```
./
├── 📄 index.html      # Arquivo principal da aplicação
├── 🎨 style.css       # Folha de estilos
├── ⚙️ script.js       # Lógica de programação e interatividade
├── 📦 data.json       # Banco de dados com as informações das tecnologias
└── 📖 README.md       # Documentação do projeto
```

- **`index.html`**: Contém a estrutura base da página, incluindo o cabeçalho com a busca, a seção principal onde os cards são inseridos e o rodapé.
- **`style.css`**: Responsável por toda a aparência visual do projeto. O código é bem comentado, explicando as regras de estilo aplicadas.
- **`script.js`**: O cérebro da aplicação. Ele busca os dados em `data.json`, renderiza os cards na tela e implementa a lógica de filtragem da busca.
- **`data.json`**: Um arquivo JSON que armazena os dados de cada tecnologia como um array de objetos. Para adicionar um novo item à base de conhecimento, basta adicionar um novo objeto a este arquivo.

---

## 🚀 Como Executar o Projeto

Para executar este projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Abra o arquivo `index.html` em seu navegador.**
    - A maneira mais simples é clicar duas vezes no arquivo.
    - **Recomendado:** Para garantir que a `Fetch API` funcione corretamente em todos os navegadores ao carregar o `data.json`, é ideal usar um servidor local. Se você usa o Visual Studio Code, pode instalar a extensão **Live Server** e clicar em "Go Live" no canto inferior direito.

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Se você quiser adicionar uma nova tecnologia ou corrigir alguma informação:

1.  Faça um **Fork** deste repositório.
2.  Adicione o novo objeto de tecnologia ao arquivo `data.json` seguindo o padrão existente.
3.  Crie uma **Pull Request** com suas alterações.

---

Desenvolvido por **Neiwerton César**.
