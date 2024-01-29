import Express from 'express';
import UsuarioController from './controllers/UsuarioController';
import PostController from './controllers/PostController';

const routes = Express();

//Rotas do Usuário
routes.post('/criarUsuario', UsuarioController.criarUsuario);

//Rotas de Post
routes.post('/criarPost', PostController.criarPost);
routes.get('/listarPost/:id', PostController.listarPost);

export { routes };