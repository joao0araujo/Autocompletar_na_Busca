let Assuntos = [
  { id: 1, termo: 'Processo', cont_quantidade: 0},
  { id: 2, termo: 'Segurança Juridica', cont_quantidade: 1},
];

interface Argumentos{
    id: number;
}

const resolvers = {
        Query: {
            todosAssuntos: ()=> Assuntos,
            assunto: (_parent:unknown, {id}:Argumentos) => {
                return Assuntos.find(post => post.id == id)
            }
        }
}

export { resolvers }