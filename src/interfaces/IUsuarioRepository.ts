import { Usuario } from '@prisma/client';

export interface IUsuarioRepository {
    criar(nome:string, email:string): Promise<Usuario>;
    listar(id: number): Promise<Usuario>;
    listarUsuarios(): Promise<Usuario[]>;
}