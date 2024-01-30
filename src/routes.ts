import Express from 'express';
import UsuarioController from './controllers/UsuarioController';
import PostController from './controllers/PostController';

const routes = Express();

//Rotas do Usuário
routes.post('/criarUsuario', UsuarioController.criarUsuario);
routes.get('/listarUsuario/:id', UsuarioController.listarUsuario);
routes.get('/listarUsuarios', UsuarioController.listarUsuarios);

//Rotas de Post
routes.post('/criarPost', PostController.criarPost);
routes.get('/listarPost/:id', PostController.listarPost);
routes.get('/listarPosts', PostController.listarPosts);
routes.put('/atualizarPost', PostController.atualizarPost);

export { routes };