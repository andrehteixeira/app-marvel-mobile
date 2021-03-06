## Começando

Para executar esse projeto você precisa ter o `Expo CLI` instalado.
Para instalar o `Expo CLI` execute o comando: 

```bash
npm install -g expo-cli
```

Em seguida, instale as dependências do projeto:

```bash
yarn install
```

Agora, crie um arquivo `.env` na raiz do projeto com a PUBLIC_KEY e a PRIVATE_KEY da sua conta Marvel para poder ter acesso a API da Marvel. Adicione também a BASE_URL com esse endereço: `BASE_URL=https://gateway.marvel.com/v1/public`. 
Há um exemplo do .env no arquivo: `.env.example`. Você pode usá-lo para criar um arquivo .env ou criar um novo arquivo com suas credenciais da Marvel.

Inicie o projeto com:

```bash
yarn start
```

Agora você pode ver o app funcionando em um simulador no Mac, emulador Android ou diretamente no seu dispositivo Android ou iOS instalando o app `Expo Go` na sua loja de aplcativos.

## Autor
Desenvolvido por André Teixeira. Dúvidas ou sugestão: andreteixera@gmail.com