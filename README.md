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

### 🏠 Home, Cadastro e Login

<p align="center">
<img width="300" alt="Screenshot_1777503543" src="https://github.com/user-attachments/assets/2e70ece2-fd0d-4f05-a8c5-17165a3353aa" />
<img width="300" alt="Screenshot_1777502718" src="https://github.com/user-attachments/assets/d94ec537-f94a-4440-a3fc-13746f510b1f" />
<img width="300" alt="Screenshot_1777503596" src="https://github.com/user-attachments/assets/84d84288-f25e-40d6-af2c-cd9583e86a70" />
</p>

---

### 🧪 Laboratórios

<p align="center">
<img width="300" alt="Screenshot_1777503548" src="https://github.com/user-attachments/assets/858aabdb-d38f-4f56-b940-fd776b310daf" />
<img width="300" alt="Screenshot_1777503553" src="https://github.com/user-attachments/assets/2cada3b3-5fbd-4566-afb0-4f1ead89159d" />
</p>

---

### 📅 Reservas

<p align="center">
<img width="300" alt="Screenshot_1777503560" src="https://github.com/user-attachments/assets/aa8a357a-0218-4ddb-9d99-9d91f540775e" />
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
