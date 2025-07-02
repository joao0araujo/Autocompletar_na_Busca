import { ApolloServer } from "apollo-server"
import { typeDefs } from "./schema"
import { resolvers } from "./resolvers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const servidor = new ApolloServer({
    typeDefs,
    resolvers,
    context:{
        prisma,
    },
})

servidor.listen().then(({ url })=>{

console.log(`Servidor rodando na porta ${url}`)

})



