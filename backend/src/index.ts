import { ApolloServer } from "apollo-server"
import { typeDefs } from "./schema"
import { resolvers } from "./resolvers"

const servidor = new ApolloServer({
    typeDefs,
    resolvers,
})

servidor.listen().then(({ url })=>{

console.log(`Servidor rodando na porta ${url}`)

})



