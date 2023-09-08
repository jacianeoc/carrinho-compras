## Carrinho de Compras 
Projeto simulando um carrinho de compras.

---
### Ações necessárias para rodar o backend: 
* Entrar no diretório `backend`.
* Instalar as dependências:
  >npm install

* Antes de fazer o seed é necessário criar o banco de dados no postgres com o nome `carrinhodecompras`, ou nome do banco
que preferir dentro do postegres:
  >  CREATE DATABASE carrinhodecompras ;

* Este projeto faz as configurações de ambiente, baseadas nas ideias do [`12factor app`](https://12factor.net/pt_br/).
  Criar um arquivo na raiz do projeto com o nome `.env` e colocar o conteúdo do arquivo env-sample e preencher os valores de dados para o seu ambiente, em geral os valores sensíveis estão em branco e você deve preencher de acordo com o seu ambiente.
  >   cp env-sample .env

  * O arquivo .env terá o seguinte formato padrão:
  
      SECRET=development
  
      PORT=3333
  
      PGHOST=0.0.0.0
  
      PGPORT=5432
  
      PGDATABASE=
  
      PGUSER=postgres
  
      PGPASSWORD=
  
      PAGINATIONSIZE=25
  
      PATH_PREFIX='/api/'
  
      EMAIL_USER=
  
      EMAIL_PASS=
  
      EMAIL_HOST='smtp-mail.outlook.com'
  
      NODE_ENV=production
  
    Atente para  EMAIL_HOST por padrão está `smtp-mail.outlook.com`, caso utilize o gmail, mudar esse falor 
     para `"smtp.gmail.com"` e atentar para as configurações presentes em seu email.
* Fazer o seed do banco de dados:
    >npm run seed

* Depois para executar o projeto basta digitar o comando:

    > npm start

   ou se desejar utilizar o nodemon: 
    > npm run dev

Após a execução dos comandos anterios, será possível ver a mensagem que a aplicação está rodando no seu terminal. 

---
### Ações necessárias para rodar o Frontend: 
* Entrar no diretório `frontend`.
* Instalar as dependências:
  > npm install
* Executar o projeto:
  > npm start