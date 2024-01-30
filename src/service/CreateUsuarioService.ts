import { IUsuarioRepository } from '../interfaces/IUsuarioRepository';


class CreateUsuarioService {
    constructor(private usuarioRepository: IUsuarioRepository) {}

    public async execute(nome: string, email: string) {
        const usuario = await this.usuarioRepository.criar(nome, email);

        return usuario;
    }
}


export { CreateUsuarioService };