## Layout da aplicação
<img src="/app.png" />


## Link do Vídeo
https://youtu.be/oZ_CpF5nZko

## Clonar o repositório:
git clone + link


## Execução de Projeto Back-End

### Criar Conteiner docker
* docker run --name verzel -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

### Criar Tabelas
* yarn typeorm migration:run

### Criar Usuário Admin
* yarn seed:admin

### .env
#### seu ip/porta ex:
* APP_API_URL=http://192.168.1.5:3333
   
### Start no servidor
* yarn server

### Funcionalidades da aplicação

1. Lista os carros da API.

2. Adicionar novos carros na API:

3. Upload de imagens dos carros na API:

4. Remover carros da API:

## Execução de Projeto Front-End

1. yarn

2. yarn run android

3. yarn start