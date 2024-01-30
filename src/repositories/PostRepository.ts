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

    public async listarPosts(): Promise<{ id: number; titulo: string; conteudo: string; idUsuario: number; }[]> {
        const posts = await prismaClient.post.findMany();

        return posts;
    }

    public async atualizarPost(id: number, titulo: string, conteudo: string): Promise<{ id: number; titulo: string; conteudo: string; idUsuario: number; }> {
        const post = await prismaClient.post.update({
            where: {
                id: Number(id)
            },
            data:{
                titulo,
                conteudo
            }
        });

        return post;
    }
}

export { PostRepository };