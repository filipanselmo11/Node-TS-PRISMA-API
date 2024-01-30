import { IUsuarioRepository } from '../interfaces/IUsuarioRepository';


class ListUsuariosService {
    constructor(private usuarioRepository: IUsuarioRepository) {}

    public async execute() {
        const usuarios = await this.usuarioRepository.listarUsuarios();

        return usuarios;
    }
}

export { ListUsuariosService };