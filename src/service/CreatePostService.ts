import { IPostRepository } from '../interfaces/IPostRepository';

class CreatePostService {
    constructor(private postRepository: IPostRepository) {}

    public async execute(titulo: string, conteudo: string, idUsuario: number) {
        const post = await this.postRepository.criar(titulo, conteudo, idUsuario);

        return post;
    }
}

export { CreatePostService };