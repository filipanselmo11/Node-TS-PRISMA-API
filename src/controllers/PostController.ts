import { Response, Request } from 'express';
import { CreatePostService } from '../service/CreatePostService';
import { PostRepository } from '../repositories/PostRepository';
import { ListPostService } from '../service/ListPostService';
import { ListPostsService } from '../service/ListPostsService';
import { UpdatePostService } from '../service/UpdatePostService';

export default {
    async criarPost(request: Request, response: Response) {
        try {
            const { titulo, conteudo, idUsuario } = request.body;

            const createPost = new CreatePostService(new PostRepository());

            const post = await createPost.execute(titulo, conteudo, idUsuario);

            return response.json({
                error: false,
                message: 'Post Cadastrado com Sucesso',
                post
            });
        } catch (error) {
            return response.json({ message: error.message });
        }
    },

    async listarPost(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const listPost = new ListPostService(new PostRepository());

            const post = await listPost.execute(Number(id));

            if (!post) {
                return response.json({
                    error: true,
                    message: 'Post não encotrado'
                });
            }

            return response.json({
                error: false,
                post
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    },

    async listarPosts(request: Request, response: Response) {
        try {
            const listPosts = new ListPostsService(new PostRepository());

            const posts = await listPosts.execute();

            return response.json({
                error: false,
                posts
            });

        } catch(error) {
            return response.json({ message: error.message });
        }
    },

    async atualizarPost(request: Request, response: Response) {
        try {
            const { id, titulo, conteudo } = request.body;

            const atualizarPost = new UpdatePostService(new PostRepository());

            const post = await atualizarPost.execute(id, titulo, conteudo);

            if (!post) {
                return response.json({
                    error: true,
                    message: 'Post não encotrado'
                });
            }

            return response.json({
                error: false,
                mesage: 'Post atualizado',
                post
            });

        } catch(error) {
            return response.json({ message: error.message });
        }
    }

    // async atualizarPost(request: Request, response: Response) {
    //     try {
    //         const { id, titulo, conteudo } = request.body;

    //         const existePost = await prismaClient.post.findUnique({
    //             where: { id: Number(id) }
    //         });

    //         if (!existePost) {
    //             return response.json({
    //                 error: true,
    //                 message: 'Post não encontrado',
    //             });
    //         }

    //         const post = await prismaClient.post.update({
    //             where: {
    //                 id: Number(request.body.id)
    //             },
    //             data: {
    //                 titulo,
    //                 conteudo
    //             },
    //         });

    //         return response.json({
    //             error: false,
    //             message: 'Post atualizado',
    //             post
    //         });

    //     } catch (error) {
    //         return response.json({ message: error.message });
    //     }
    // },

    // async deletarPost(request: Request, response: Response) {
    //     try {
    //         const { id } = request.params;

    //         const existePost = await prismaClient.post.findUnique({
    //             where: { id: Number(id) }
    //         });

    //         if (!existePost) {
    //             return response.json({
    //                 error: true,
    //                 message: 'Post não encontrado',
    //             });
    //         }

    //         const post = await prismaClient.post.delete({
    //             where: {
    //                 id: Number(request.params.id)
    //             },
    //         });

    //         return response.json({
    //             error: false,
    //             message: 'Post deletado',
    //             post
    //         });

    //     } catch (error) {
    //         return response.json({ message: error.message });
    //     }
    // }
};