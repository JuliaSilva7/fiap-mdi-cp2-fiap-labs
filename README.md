# 🚀 FIAP Labs

---

## 📱 Sobre o Projeto

O **FIAP Labs** é um aplicativo mobile desenvolvido com **React Native + Expo** que tem como objetivo otimizar o processo de **reserva de laboratórios** dentro da FIAP.

Atualmente, alunos enfrentam dificuldades para identificar a disponibilidade dos laboratórios, o que pode gerar conflitos de uso, falta de organização e perda de tempo.

A solução proposta é um aplicativo simples, intuitivo e eficiente que permite visualizar os laboratórios disponíveis e realizar reservas de forma rápida.

---

## 🎯 Problema Escolhido

A operação escolhida foi a **reserva de laboratórios**, pois é uma atividade frequente no dia a dia acadêmico e apresenta falhas no processo atual, como:

* Falta de visibilidade de disponibilidade
* Conflito de horários
* Processo manual ou desorganizado

---

## ⚙️ Funcionalidades

* 📋 Listagem de laboratórios disponíveis
* 📊 Status do laboratório (Livre / Ocupado)
* 📅 Reserva de laboratório
* 🚫 Bloqueio de reserva para labs ocupados
* 💾 Persistência de dados com AsyncStorage
* 🔐 Sistema de login e cadastro de usuários
* 🔄 Feedback visual (loading e ações)
* 📭 Tratamento de estado vazio (sem reservas)

---

## 🎨 UX & Design

O aplicativo foi desenvolvido com base na **identidade visual da FIAP**, utilizando:

* Tema **Dark Mode**
* Cores institucionais: **Preto + Rosa (#ED145B)**
* Layout consistente entre telas
* Componentes reutilizáveis
* Interface limpa e intuitiva

---

## 👥 Integrantes do Grupo

* Julia Carolina Ferreira Silva — RM558896

---

## 🛠️ Tecnologias Utilizadas

* React Native
* Expo
* Expo Router
* AsyncStorage
* JavaScript (ES6+)

---

## ▶️ Como Rodar o Projeto

### 📌 Pré-requisitos

* Node.js instalado
* Expo CLI
* App Expo Go (celular) ou Emulador Android

---

### 💻 Passo a passo

```bash
# Clonar o repositório
git clone https://github.com/JuliaSilva7/fiap-mdi-cp2-fiap-labs.git

# Entrar na pasta
cd fiap-mdi-cp2-fiap-labs

# Instalar dependências
npm install

# Rodar o projeto
npx expo start
```

---

### 📱 Executar

* No celular: escanear o QR Code com o Expo Go
* No emulador: pressionar **A** no terminal

---

## 📸 Demonstração

### 🏠 Home

<p align="center">
<img height="1000" src="https://github.com/user-attachments/assets/d4787146-f00c-4c4a-a8be-ac5677e0f064" />
</p>

---

### 🧪 Laboratórios

<p align="center">
<img width="300" src="https://github.com/user-attachments/assets/6d9325b1-60d4-43e4-91d6-f4478cc17286" />
<img width="300" src="https://github.com/user-attachments/assets/f56a256c-cdf8-4a08-91c0-cc2c7015b5a2" />
<img width="300" src="https://github.com/user-attachments/assets/03b2ca88-87f0-455a-b654-d42989c7dda9" />
</p>

---

### 📅 Reservas

<p align="center">
<img width="230" src="https://github.com/user-attachments/assets/04dcdcf0-3960-4fe1-a42a-0b6c370a03ef" />
<img width="230" src="https://github.com/user-attachments/assets/d064ed55-3ec4-427a-ada6-ffc72e42e120" />
<img width="230" src="https://github.com/user-attachments/assets/34ecbbbe-df3e-44a2-aa3b-de6bdfc7bce5" />
<img width="230" src="https://github.com/user-attachments/assets/eb094903-7c9f-40e9-8a8e-db505422f563" />
</p>

---

### 🎥 Vídeo / GIF

<p align="center">
<img width="400" height="867" src="https://github.com/user-attachments/assets/5192776b-9663-4b30-b7a4-42da61177ec7" />
</p>

---

## 🧠 Decisões Técnicas

### 📂 Estrutura do Projeto

O projeto foi estruturado utilizando o **Expo Router (file-based routing)**:

* `app/` → telas (rotas)
* `components/` → componentes reutilizáveis
* `services/` → regras de negócio e armazenamento
* `styles/` → tema global (cores e padronização)

---

### ⚛️ Hooks Utilizados

* **useState**

  * Controle de estado (login, reservas, labs)

* **useEffect**

  * Carregamento inicial de dados

---

### 🧭 Navegação

Implementada com **Expo Router**, utilizando:

* Stack para fluxo geral
* Tabs para navegação principal
* Rotas dinâmicas para detalhes (`/labs/[id]`)

---

## 🚀 Próximos Passos

Com mais tempo, o projeto poderia evoluir para:

* 👤 Perfil de usuário
* 🔔 Notificações de reserva
* ☁️ Integração com API real
* 📊 Dashboard com estatísticas
* 📅 Seleção de horários

---

## 📌 Considerações Finais

O projeto foi desenvolvido com foco em resolver um problema real da rotina acadêmica, utilizando boas práticas de desenvolvimento mobile, organização de código e uma interface consistente e moderna.

---
