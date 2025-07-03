import { PrismaClient } from "@prisma/client"

interface Contexto {
    prisma: PrismaClient;
}

interface Argumentos{
        id?: number;
        termo?: string
        cont_pesquisa?: number;
}

interface CadastrarArgumentos{
        data:{
            id?: number;
            termo?: string
            cont_pesquisa?: number;
        }
}

const resolvers = {
        Query: {
            todosAssuntos: (_parent: unknown, _args: {}, context: Contexto) => {
                return context.prisma.assunto.findMany();
            },
            assunto: (_parent: unknown, { termo }: Argumentos, context: Contexto) => {
                return context.prisma.assunto.findUnique({ where: { termo: termo } });
            }
        },

        Mutation: {
            cadastrarAssuntos: async(_parent: unknown, { data }: CadastrarArgumentos, context: Contexto) => {
                const cadastro = await context.prisma.assunto.createMany({ data: data });
                return cadastro.count;
            }
            
        }
}

export { resolvers }