import { Response, Request } from 'express';
import { prismaClient } from '../database';

export default {
    async criarUsuario(request: Request, response: Response) {
        try {
            const { nome, email } = request.body;
            const usuarioExiste = await prismaClient.usuario.findUnique({
                where: { email }
            });

            if (usuarioExiste) {
                return response.json({
                    error: true,
                    message: 'Error: Usuário já existe'
                });
            }

            const usuario = await prismaClient.usuario.create({
                data: {
                    nome,
                    email
                }
            });

            return response.json({
                error: false,
                message: 'Usuário Cadastrado com Sucesso',
                usuario
            });
        } catch (error) {
            return response.json({ message: error.message });
        }
    }
};