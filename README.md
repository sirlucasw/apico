# 🎯 Quiz de Trivialidades

Aplicativo mobile desenvolvido com **React Native** e **Expo** que consome dados da [Tryvia API](https://tryvia.ptr.red) — uma API pública de perguntas e respostas em português — e exibe as informações de forma interativa na tela.

---

## 📱 Funcionalidades

- Busca perguntas de trivia em português via API pública
- Exibe 4 alternativas embaralhadas a cada rodada
- Destaca visualmente a alternativa selecionada
- Informa se o usuário acertou ou errou
- Botão para carregar uma nova pergunta

---

## 🚀 Tecnologias utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| React Native | - | Framework para desenvolvimento mobile |
| Expo | SDK 52 | Plataforma para rodar o app |
| TypeScript | - | Tipagem estática do JavaScript |
| html-entities | - | Decodificação de entidades HTML |

---

## 🌐 API utilizada

**Tryvia API** — API gratuita de trivias em português, compatível com a Open Trivia Database.

- Base URL: `https://tryvia.ptr.red`
- Endpoint utilizado: `GET /api.php?amount=1&type=multiple`

### Exemplo de resposta

```json
{
  "response_code": 0,
  "results": [
    {
      "category": "História",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Quem foi o primeiro presidente do Brasil?",
      "correct_answer": "Deodoro da Fonseca",
      "incorrect_answers": [
        "Floriano Peixoto",
        "Prudente de Morais",
        "Campos Sales"
      ]
    }
  ]
}
```

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- [Expo Go](https://expo.dev/client) instalado no celular

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/quiz-trivialidades.git

# Acesse a pasta do projeto
cd quiz-trivialidades

# Instale as dependências
npm install

# Rode o projeto
npx expo start
```

Escaneie o QR Code com o **Expo Go** no celular para visualizar o app.

---

## 📁 Estrutura do projeto

```

├── App.tsx          # Componente principal do app
├── package.json     # Dependências do projeto
├── tsconfig.json    # Configurações do TypeScript
└── README.md        # Documentação do projeto
```

---

## 🧠 Conceitos aplicados

- **useState** — gerenciamento de estado local (pergunta, alternativas, resultado)
- **useEffect** — busca de dados na API ao carregar o app
- **fetch** — consumo de API REST
- **TypeScript** — tipagem de estados, funções e parâmetros
- **Estilo dinâmico** — mudança visual de acordo com a alternativa selecionada
- **Array.map** — renderização dinâmica de componentes

---


## 👨‍💻 Lucas Silva

Desenvolvido como atividade prática da disciplina de **Desenvolvimento Mobile**.
