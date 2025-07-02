- Primeiro commit, criando repositório e arquivo de comentários.

- Criei uma branch de testes para não estar mexendo diretamente na main.

- Decidi  por levantar os requisitos do sistema para que a compreensão do mesmo fosse mais adequada, cumprindo com os requisitos colocados no desafio.

    - Requisitos funcionais: 
        - Permitir a inserção dos termos atravez da digitação do usuario
        - O sistema deve sugerir termos relacionados com o termo digitado (préfixo) 
        - O sistema deve autocompletar ao clicar na recomendação
        - A lista de termos tem que adaptar conforme o usuario digita as palavras
        - Deverá ter uma barra de rolagem nas sugestões, caso elas passem de dez
    
    - Requisitos não funcionais:
        - Usabilidade: O site terá que ser responsivo
        - Desempenho: A resposta à digitação terá que ser rápida
        - Confiabilidade: A função de autocompletar deverá funcionar corretamente

- Como o design é livre, fiz um esboço de uma tela basica para desktop e a versão da tela para mobile. Utilizei o Canva para ter mais praticidade e rapidez na produção (já que era algo opcional), porém o Figma seria mais usual nesse sentido.

- Iniciei pesquisas sobre GraphQL, uma vez que só tinha trabalhado com APIRest, li a documentação no site oficial, e percebi que pode ser utilizada qualquer linguagem ou framework junto a ele.

- Para fazer o back da aplicação eu pensei em utilizar typescript com Node.js, por já ter um conhecimento e pela sua vantagem junto ao javascript pelo fator de termos uma tipagem. Além disso, utilizarei o PrismaORM para facilitar a interação entre o GraphQL e o banco. Com relação ao banco, utilizarei o SQLite por ser opensource (o que já torna seu uso mais fácil no projeto), além de ser leve, possuir boa interatibilidade com o PrismaORM e não precisar de um servidor rodando em paralelo.

- Fui em tecnologias que eu já tive/tenho contato, o que vai dinamizar o processo de desenvolvimento da aplicação e permitir uma escalabilidade mais tranquila pensando em uma futura dockerização.

- Decidi por iniciar construindo o Back da aplicação primeiro, para depois migrar para o Front.


- Daqui em diante será listado o processo feito no back-end da aplicação.

- Iniciei criando uma pasta "backend" para armazenar os arquivos. Em seguida utilizei os comandos npm para instalação dos modulos do node.

```
npm init -y
npm install typescript ts-node-dev -D
npx tsc --init
```

- Nas minhas pesquisas percebi que temos duas opções de servidor para manipulação do GraphQL, express-graphql ou apollo-server.

- Decidi pelo segundo, uma vez que indicava ser mais completo e mais utilizado para aplicar GraphQL junto ao Node. Também pelo fato do apollo-server ter um pacote específico, o apollo-server-express, projetado para se integrar perfeitamente com o framework Express, o que me daria possibilidade de migrar para o express em caso de futuros problemas na aplicação.

```
npm install graphql apollo-server
```

- Iniciei a construção do server, inicialmente fazendo o index.ts e configurando o Apollo-server. Logo após construindo os arquivos resolvers e schema.

- Já pensei a estruturação do banco, para construir as rotas de maneira correta e eficiente, teremos uma tabela Assuntos e decidi por ter três atributos: id, termo e cont_pesquisa. A ideia de ter um contador para a quantidade de vezes que a palavra foi pesquisada é visando uma futura escalabilidade para que os termos mais pesquisados apareçam mais acima nas recomendações.

- Fiz uma Query de buscar que está vindo de uma lista qualquer, somente para testar sua funcionalidade.

- Iniciei as configurações do Prisma com o SQlite, primeiro instalando as dependencias do Prisma para o node.

```
npm install prisma -D
npm install @prisma/client
```

- Em seguida iniciei o Prisma. Escolhi o prisma pela sua praticidade em lidar com o banco e não necessitar de executar linhas de codigo em  SQL, dinamizando a construção da aplicação.

```
npx prisma init
```

- Em seguida, fiz a configuração dos arquivos gerados, tanto do .env (o qual direciona para o banco), tanto do schema.prisma, no qual temos as configurações do tipo do do banco (sqlite) e o modelo que será usado para gerar a tabela "Assuntos". Indiquei no codigo do Prisma que o atributo cont_quantidade será iniciado como zero, uma vez que ao cadastrar uma palavra no banco, não se tem uma metrica se já tentaram pesquisar ou não, portanto iniciei a contagem zerada.

- Ao rodar o comando: ```npx prisma migrate dev --name inicio```, eu acabei por criar a migração do codigo para SQL e criando o ```dev.db```, nosso banco em sqlite para o projeto.