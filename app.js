const express = require('express');
const bodyParser = require('body-parser');
const userControler = require('./controllers/userControler')
const app = express();
//ejs como mecanismo de vizualização
app.set('view engine', 'ejs');

//middleware para parsing do body 
app.use(bodyParser.urlencoded({ extended: false}));

//rotas
app.get('/', userControler.getAllUsers);

app.get('/edit/:id', userControler.getUserById);
app.post('/edit/:id', userControler.updateUser);
app.get('/add', (req, res) => res.render ('add'));
app.post('/add', userController.addUSer)

//iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
