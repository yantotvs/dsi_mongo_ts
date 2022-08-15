Para executar o banco de dados rode o comando Docker abaixo:
```
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=univille -e MONGO_INITDB_ROOT_PASSWORD=univille mongo:latest
```

Para executar o projeto em desenvolvimento:
```
npm run start:dev
```
