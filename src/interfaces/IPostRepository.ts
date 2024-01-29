import { Post } from '@prisma/client';

export interface IPostRepository {
    criar(titulo: string, conteudo: string, idUsuario: number): Promise<Post>;
    listar(id: number);
}