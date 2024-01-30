import { Post } from '@prisma/client';

// type Post = {
//     id: number;
//     titulo: string;
//     conteudo: string;
//     idUsuario: number;
// }

export interface IPostRepository {
    criar(titulo: string, conteudo: string, idUsuario: number): Promise<Post>;
    listar(id: number): Promise<Post>;
    listarPosts(): Promise<Post[]>;
    atualizarPost(id: number, titulo: string, conteudo: string): Promise<Post>;
}