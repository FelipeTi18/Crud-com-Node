const express = require('express');
const cors = require('cors'); // <- adicionado

const server = express();

server.use(cors()); // <- adicionado
server.use(express.json());


const cursos = ['Full Stack Master', 'Desenvolvimento de Games', 'Viver de Youtube'];

// Retorna um Curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params

    return res.json(cursos[index]);
});

// Retornar todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

// Criar um novo curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//Atualizar um Curso
server.put('/cursos/:index', (req, res) => {
    const { index  } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

// Deletar um curso
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({message: "O curso foi deletado"});
});


server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
