import { gql } from "apollo-server"

/* Estruturação: Id para simbolizar o id do assunto no banco; termo para simbolizar o termo pesquisado; 
cont_quantidade um contador para simbolizar a quantidade de vezes que o termo foi pesquisado*/

const typeDefs = gql`

    type Assunto{
        id: Int!
        termo: String!
        cont_pesquisa: Int! 
    }

    type Query{
        todosAssuntos: [Assunto]
        assunto(id: Int!): Assunto
    }

    input CriarAssuntos {
        termo: String!
        cont_pesquisa: Int
    }
        
    type Mutation {
        cadastrarAssuntos(data: [CriarAssuntos!]!) : Int!
    }

    type Query {
        sugestaoDeTermo(termo: String!): [Assunto!]
    }
`;

export { typeDefs };
