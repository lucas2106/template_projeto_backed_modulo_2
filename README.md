# 💉 DEVinPharmacy - Sistema de Gestão de Vacinas

## 📋 Descrição
Sistema desenvolvido para gerenciar farmacêuticos, clientes, vacinas e aplicações de vacinas para a empresa DEVinPharmacy LTDA.

---

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- TypeORM
- PostgreSQL
- JWT para autenticação
- TypeScript

---

## ⚙️ Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
Instale as dependências:

bash
Copiar
Editar
npm install
Configure o banco de dados:

Banco de dados: PostgreSQL

Nome do banco: labvaccinebd

Atualize o arquivo .env ou ormconfig.json com suas credenciais.

Rode as migrations:

bash
Copiar
Editar
npm run typeorm migration:run
Inicie o servidor:

bash
Copiar
Editar
npm run dev
🛤 Funcionalidades
Cadastro de farmacêuticos (POST /api/users)

Login e geração de token (POST /api/login)

Cadastro de vacinas (POST /api/vaccines)

Listagem e filtragem de vacinas (GET /api/vaccines)

Cadastro e listagem de clientes (POST /api/clients, GET /api/clients)

Aplicação de vacinas para clientes (POST /api/vaccines_application)

Proteção de rotas usando JWT

Validação de e-mail e CPF únicos

🗂 Branches Utilizadas
feature/create-users

feature/login

feature/create-vaccines

feature/create-clients

feature/vaccines-application

🎯 Melhorias Futuras
Implementação de testes automatizados com Jest.

Melhorias no middleware de tratamento de erros.

Separação mais detalhada entre camadas de serviço e controller.
