import { Response, Request } from 'express';
import { CreateUsuarioService } from '../service/CreateUsuarioService';
import { UsuarioRepository } from '../repositories/UsuarioRepository';
import { ListUsuarioService } from '../service/ListUsuarioService';
import { ListUsuariosService } from '../service/ListUsuariosService';

export default {
    async criarUsuario(request: Request, response: Response) {
        try {
            const { nome, email } = request.body;

            const createUsuario = new CreateUsuarioService(new UsuarioRepository());

            const usuario = await createUsuario.execute(nome, email);

            return response.json({
                error: false,
                message: 'Usuário cadastrado com sucesso',
                usuario
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    },

    async listarUsuario(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const listUsuario = new ListUsuarioService(new UsuarioRepository());

            const usuario = await listUsuario.execute(Number(id));

            if (!usuario) {
                return response.json({
                    error: true,
                    message: 'Usuário não encontrado'
                });
            }

            return response.json({
                error: false,
                usuario
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    },

    async listarUsuarios(request: Request, response: Response) {
        try {

            const listUsuarios = new ListUsuariosService(new UsuarioRepository());

            const usuarios = await listUsuarios.execute();

            return response.json({
                error: false,
                usuarios
            });
            
        } catch(error) {
            return response.json({ message: error.message });
        }
    }
};