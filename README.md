# Testes End-to-End - Kanban

Este repositório contém a automação de testes end-to-end (E2E) do site [Kanban App](https://kanban-dusky-five.vercel.app/) utilizando o framework [Cypress](https://www.cypress.io/).

# Quadro de acompanhamento

- [Quadro Jira](https://baruk-freitas.atlassian.net/jira/software/projects/DKB/boards/34)
- [Quadro Github](https://github.com/users/BarukFreitas/projects/2/views/1)

## 📋 Pré-requisitos

Antes de executar os testes, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

> Para verificar se já possui o Node.js e o npm instalados:
```
node -v
npm -v
```

🚀 Instalação do projeto

Clone este repositório:

```
git clone https://github.com/BarukFreitas/kanban-kukac.git
```

Acesse a pasta do projeto:

```
cd kanban-kukac
```

Instale as dependências:

```
npm install

ou

yarn install
```

▶️ Executando os testes
1. Abrir o Cypress no modo interativo

```
npx cypress open
```

Na interface do Cypress, selecione E2E Testing

Escolha o navegador desejado

Selecione o teste que deseja executar

2. Executar todos os testes no modo headless (terminal)

```
npx cypress run
```

🧪 Escopo dos testes

Os testes automatizados cobrem os principais fluxos da aplicação Kanban, incluindo:

    Acesso à aplicação

    Criação de novas tarefas

    Edição de título e tags

    Tentativa de exclusão de tarefas

🛠 Tecnologias utilizadas

    Cypress - Framework de testes E2E

    JavaScript - Linguagem de programação

    Node.js - Ambiente de execução JavaScript
