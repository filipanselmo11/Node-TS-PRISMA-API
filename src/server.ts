import Express from 'express';
import { routes } from './routes';

const app = Express();

app.use(Express.json());
app.use(routes);

const PORT = 8000;

// app.post('/criarUsuario', UsuarioController.criarUsuario);
// app.post('/criarPost', PostController.criarPost);
// app.get('/listarPost/:id', PostController.listarPost);
// app.put('/atualizarPost', PostController.atualizarPost);
// app.delete('/atualizarPost/:id', PostController.deletarPost);

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});