# Furia Fans

Um aplicativo para os verdadeiros fãs da Furia!

## Introdução

O **Furia Fans** é um aplicativo desenvolvido para engajar e conhecer melhor a comunidade de fãs da equipe Furia. O objetivo é coletar dados sobre o conhecimento e o engajamento dos fãs, oferecendo estatísticas personalizadas e comparativas. Resolvemos o problema de falta de dados detalhados sobre a base de fãs, proporcionando insights valiosos para a Furia e uma experiência interativa e personalizada para seus seguidores.

Este projeto foi feito para:

*   Fãs da Furia que desejam testar seus conhecimentos e comparar seus resultados com outros fãs.
*   A equipe Furia, que busca entender melhor sua base de fãs e direcionar suas estratégias de engajamento.

## Recursos e funcionalidades

*   **Cadastro:** Permite que os usuários criem uma conta para participar das pesquisas e visualizar seus resultados.
*   **Pesquisas personalizadas:** Coleta dados sobre o conhecimento dos fãs sobre a Furia através de perguntas variadas.
*   **Estatísticas personalizadas:** Apresenta dados estatísticos baseados nas respostas do usuário, mostrando seu nível de conhecimento e engajamento.
*   **Comparativo com outros usuários:** Exibe dados comparativos entre as respostas do usuário e as respostas de toda a base de usuários.

**Exemplo prático:** Após se cadastrar, um usuário responde a uma pesquisa sobre a Furia. Ao final, ele recebe um relatório mostrando sua pontuação, as áreas em que se destacou e um comparativo com a média de outros usuários que responderam à mesma pesquisa.

## Tecnologias utilizadas

*   ✅ **React:** Biblioteca JavaScript para construção de interfaces de usuário. Escolhida pela sua flexibilidade, reusabilidade de componentes e grande comunidade, facilitando o desenvolvimento de interfaces complexas e interativas.
*   ✅ **JavaScript (ES6+):** Linguagem de programação principal para o desenvolvimento do frontend. Essencial para a lógica e interatividade da aplicação.
*   ✅ **HTML:** Linguagem de marcação para estruturar o conteúdo da aplicação.
*   ✅ **CSS:** Linguagem de estilo para formatar a aparência da aplicação, incluindo cores, fontes e layout.

## Pré-requisitos e instalação

Antes de começar, você precisará ter o Node.js e o npm (Node Package Manager) instalados em sua máquina.

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_REPOSITÓRIO>
    cd furia-fans
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Inicie a aplicação:**

    ```bash
    npm run dev
    ```

A aplicação estará rodando no local host indicado.

## 💡 Como usar

1.  **Cadastro:** Ao acessar a aplicação, o usuário será redirecionado para a página de cadastro. Preencha os campos com as informações solicitadas e crie sua conta.

2.  **Login:** Após o cadastro, faça login com suas credenciais.

3.  **Pesquisas:** Navegue até a seção de pesquisas e responda às perguntas sobre a Furia. As pesquisas são projetadas para avaliar seu conhecimento e engajamento com a equipe.

4.  **Estatísticas:** Após concluir uma pesquisa, acesse a seção de estatísticas para visualizar seus resultados personalizados. Você verá um resumo do seu desempenho, áreas em que se destacou e um comparativo com outros usuários.

5.  **Comparativo:** Explore a seção de comparativo para ver como suas respostas se comparam com as respostas de outros fãs da Furia.

## Estrutura de diretórios

```
furia-fans/
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── Estatisticas.js  # Exemplo de componente para exibir estatísticas
│   │   └── ...
│   ├── pages/               # Páginas da aplicação
│   │   ├── Cadastro.js      # Página de cadastro
│   │   ├── Login.js         # Página de login
│   │   ├── Pesquisa.js      # Página de pesquisa
│   │   └── ...
│   ├── App.js               # Componente principal da aplicação
│   ├── index.js             # Ponto de entrada da aplicação
│   └── ...
├── public/                # Arquivos estáticos (HTML, CSS, imagens)
├── package.json           # Informações e dependências do projeto
├── README.md              # Documentação do projeto
└── ...
```

## Contribuição

Contribuições são sempre bem-vindas! Se você deseja contribuir para o projeto, siga estas diretrizes:

1.  Abra uma **issue** para discutir a mudança que você deseja fazer.
2.  Faça um **fork** do repositório.
3.  Crie uma **branch** com o nome da sua feature ou correção.
4.  Faça as alterações e envie um **pull request** para a branch principal (`main`).

## Licença

Este projeto é licenciado sob a licença aberta.
