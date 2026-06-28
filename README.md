# Orientações para execução do projeto na sua máquina após o git clone.
# Dashboard React com Vite e TailwindCSS

Este projeto é um painel administrativo (Dashboard) construído com React, utilizando Vite como ferramenta de build, TailwindCSS para estilização e React Router DOM para o roteamento de páginas.

## 🚀 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/) (que já inclui o npm)

## 🛠️ Como executar o projeto localmente

Siga os passos abaixo para baixar e rodar o projeto na sua máquina:

**1. Clone o repositório:**
```bash
git clone [https://github.com/SEU_USUARIO/DASHBOARD-REACT-VITE-TAIL-ROUTER_DOM.git](https://github.com/SEU_USUARIO/DASHBOARD-REACT-VITE-TAIL-ROUTER_DOM.git)

**2. Acesse a pasta do projeto no terminal:**

```bash 
cd DASHBOARD-REACT-VITE-TAIL-ROUTER_DOM

**3. Instale as dependências:**

Como a pasta node_modules não é enviada para o repositório por ser muito pesada, você precisa baixar as dependências listadas no arquivo package.json. Para isso, execute:

```bash
npm install

**4. Inicie o servidor de desenvolvimento:**
Após a conclusão da instalação, inicie o projeto rodando:

```bash
npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
