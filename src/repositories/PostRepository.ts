import { Post } from '@prisma/client';
import { IPostRepository } from '../interfaces/IPostRepository';
import { prismaClient } from '../database';

class PostRepository implements IPostRepository {
    public async criar(titulo: string, conteudo: string, idUsuario: number): Promise<Post> {
        const post = await prismaClient.post.create({
            data: {
                titulo,
                conteudo,
                idUsuario
            },
        });

        return post;
    }

    public async listar(id: number) {
        const post = await prismaClient.post.findUnique({
            where: { id: Number(id)}
        });

        return post;
    }
}

export { PostRepository };