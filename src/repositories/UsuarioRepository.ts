import { prismaClient } from '../database';
import { IUsuarioRepository } from '../interfaces/IUsuarioRepository';

class UsuarioRepository implements IUsuarioRepository {
    public async criar(nome: string, email: string): Promise<{ id: number; nome: string; email: string; }> {
        const usuario = await prismaClient.usuario.create({
            data: {
                nome,
                email
            },
        });

        return usuario;
    }

    public async listar(id: number) {
        const usuario = await prismaClient.usuario.findUnique({
            where: { id: Number(id) }
        });

        return usuario;
    }

    public async listarUsuarios() {
        const usuarios = await prismaClient.usuario.findMany();

        return usuarios;
    }
}

export { UsuarioRepository };