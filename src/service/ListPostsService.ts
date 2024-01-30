import { IPostRepository } from '../interfaces/IPostRepository';


class ListPostsService {
    constructor(private postRepository: IPostRepository) {}

    public async execute() {
        const posts = await this.postRepository.listarPosts();

        return posts;
    }
}

export { ListPostsService };