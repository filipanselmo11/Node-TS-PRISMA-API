import { IUsuarioRepository } from '../interfaces/IUsuarioRepository';


class ListUsuarioService {
    constructor(private usuarioRepository: IUsuarioRepository) {}

    public async execute(id: number) {
        const usuario = await this.usuarioRepository.listar(id);

        return usuario;
    }
}

export { ListUsuarioService };