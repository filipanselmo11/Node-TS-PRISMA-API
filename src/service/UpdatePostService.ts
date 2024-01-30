import { IPostRepository } from '../interfaces/IPostRepository';

class UpdatePostService {
    constructor(private postRepository: IPostRepository) {}

    public async execute(id: number, titulo: string, conteudo: string) {
        const post = await this.postRepository.atualizarPost(id, titulo, conteudo);

        return post;
    }
}


export { UpdatePostService };