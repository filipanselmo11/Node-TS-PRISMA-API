import { IPostRepository } from '../interfaces/IPostRepository';


class ListPostService {
    constructor(private postRepository: IPostRepository) {}

    public async execute(id: number) {
        const post = await this.postRepository.listar(id);

        return post;
    }
}

export { ListPostService };