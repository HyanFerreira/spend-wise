const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 377;
const cors = require('cors');

// Habilitar o uso do middleware de CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});

// estabele conexão com o banco
const mysql = require('mysql2/promise');
const conection = mysql.createPool({
    host: 'localhost',
    port: '3306',
    database: 'spendwise',
    user: 'root',
    password: ''
});

// seleciona todos os usuários do database
const getAllPessoas = async () => {
    const [query] = await conection.execute('select * from usuario')
    return query
};

// retorna a lista de usuários
app.get('/usuario', async (req, res) => {
    const resultado = await getAllPessoas()

    if (resultado.length === 0) {
        return res.status(200).json({ mensagem: "Nenhum usuário encontrado no database!" });
    }
    return res.status(200).json(resultado);
});

// retorna o usuário pelo seu id
app.get('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const [query] = await conection.execute('select * from usuario where id = ?', [id]);
    if (query.length === 0) return res.status(400).json({ mensagem: 'Nenhum usuário encontrado!' });
    return res.status(200).json(query)
});

// retorna o usuário pelo nome
app.get('/usuario/buscarnome/:nome', async (req, res) => {
    const { nome } = req.params;
    const [query] = await conection.execute('select * from usuario where nome like ?', ['%' + nome + '%']);
    if (query.length === 0) return res.status(400).json({ mensagem: 'Nenhum usuário encontrado por este nome!' });
    return res.status(200).json(query)
});

// retorna o usuário pelo email
app.get('/usuario/buscarcpf/:cpf', async (req, res) => {
    const { cpf } = req.params;
    const [query] = await conection.execute('select * from usuario where cpf like ?', ['%' + cpf + '%']);
    if (query.length === 0) return res.status(400).json({ mensagem: 'Nenhum usuário encontrado por este CPF!' });
    return res.status(200).json(query)
});

// insere um novo usuário no database
app.post('/usuario', async (req, res) => {
    const { nome, sobrenome, senha, cpf } = req.body;
    const [query] = await conection.execute('insert into usuario (nome, sobrenome, senha, cpf) values (?, ?, ?, ?)', [nome, sobrenome, senha, cpf]);
    return res.json(query);
});

// atualiza os dados do usuário no database
app.put('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, senha, cpf } = req.body;
    const [query] = await conection
        .execute('update usuario set nome = ?, sobrenome = ?, senha = ?, cpf = ? where id = ?', [nome, sobrenome, senha, cpf, id]);
    return res.json(query);
});

//  deleta o usuário do database
app.delete('/usuario/:id', async (req, res) => {
    const { id } = req.params
    const [query] = await conection.execute('delete from usuario where id = ?', [id])
    return res.json(query)
});









// categoriaReceita
// seleciona todas as categoria_receita do database
const getAllCategoriaReceitas = async () => {
    const [query] = await conection.execute('select * from categoria_receita')
    return query
};

// retorna a lista de categoria_receita
app.get('/categoriareceita', async (req, res) => {
    const resultado = await getAllCategoriaReceitas()

    if (resultado.length === 0) {
        return res.status(200).json({ mensagem: "Nenhuma categoria-receita encontrado no database!" });
    }
    return res.status(200).json(resultado);
});

// retorna a categoria_receita pelo seu id
app.get('/categoriareceita/:id', async (req, res) => {
    const { id } = req.params;
    const [query] = await conection.execute('select * from categoria_receita where id = ?', [id]);
    if (query.length === 0) return res.status(400).json({ mensagem: 'Nenhuma categoria-receita encontrado por este id no database!' });
    return res.status(200).json(query)
});

// retorna a categoria_receita pelo nome
app.get('/categoriareceita/buscarcategorianome/:nome', async (req, res) => {
    const { nome } = req.params;
    const [query] = await conection.execute('select * from categoria_receita where nome like ?', ['%' + nome + '%']);
    if (query.length === 0) return res.status(400).json({ mensagem: 'Nenhuma categoria-receita encontrado por este nome!' });
    return res.status(200).json(query)
});

// retorna a categoria_receita pelo tipo
app.get('/categoriareceita/buscarcategoriatipo/:tipo', async (req, res) => {
    const { tipo } = req.params;
    const [query] = await conection.execute('select * from categoria_receita where tipo like ?', ['%' + tipo + '%']);
    if (query.length === 0) return res.status(400).json({ mensagem: 'Nenhuma categoria-receita encontrado por este tipo!' });
    return res.status(200).json(query)
});

// insere uma nova categoria_receita no database
app.post('/categoriareceita', async (req, res) => {
    const { nome, tipo, usuario_id } = req.body;
    const [query] = await conection.execute('insert into categoria_receita (nome, tipo, usuario_id) values (?, ?, ?)', [nome, tipo, usuario_id]);
    return res.json(query);
});

// atualiza os dados da categoria_receita no database
app.put('/categoriareceita/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, tipo } = req.body;
    const [query] = await conection
        .execute('update categoria_receita set nome = ?, tipo = ? where id = ?', [nome, tipo]);
    return res.json(query);
});

//  deleta a categoria_receita do database
app.delete('/categoriareceita/:id', async (req, res) => {
    const { id } = req.params
    const [query] = await conection.execute('delete from categoria_receita where id = ?', [id])
    return res.json(query)
});



// categoriaDespesas
// seleciona todas as categoria_despesa do database
const getAllCategoriaDespesa = async () => {
    const [query] = await conection.execute('select * from categoria_despesa')
    return query
};

// retorna a lista de categoria_despesa
app.get('/categoriadespesa', async (req, res) => {
    const resultado = await getAllCategoriaDespesa()

    if (resultado.length === 0) {
        return res.status(200).json({ mensagem: "Nenhuma categoria-despesa encontrado no database!" });
    }
    return res.status(200).json(resultado);
});

// retorna a categoria_despesa pelo seu id
app.get('/categoriadespesa/:id', async (req, res) => {
    const { id } = req.params;
    const [query] = await conection.execute('select * from categoria_despesa where id = ?', [id]);
    if (query.length === 0) return res.status(400).json({ mensagem: 'Nenhuma categoria-despesa encontrado por este id no database!' });
    return res.status(200).json(query)
});

// retorna a categoria_despesa pelo nome
app.get('/categoriadespesa/buscarcategoriadespesanome/:nome', async (req, res) => {
    const { nome } = req.params;
    const [query] = await conection.execute('select * from categoria_despesa where nome like ?', ['%' + nome + '%']);
    if (query.length === 0) return res.status(400).json({ mensagem: 'Nenhuma categoria-despesa encontrado por este nome!' });
    return res.status(200).json(query)
});

// retorna a categoria_despesa pelo tipo
app.get('/categoriadespesa/buscarcategoriadespesatipo/:tipo', async (req, res) => {
    const { tipo } = req.params;
    const [query] = await conection.execute('select * from categoria_despesa where tipo like ?', ['%' + tipo + '%']);
    if (query.length === 0) return res.status(400).json({ mensagem: 'Nenhuma categoria-despesa encontrado por este tipo!' });
    return res.status(200).json(query)
});

// insere uma nova categoria_despesa no database
app.post('/categoriadespesa', async (req, res) => {
    const { nome, tipo, usuario_id } = req.body;
    const [query] = await conection.execute('insert into categoria_despesa (nome, tipo, usuario_id) values (?, ?, ?)', [nome, tipo, usuario_id]);
    return res.json(query);
});

// atualiza os dados da categoria_despesa no database
app.put('/categoriadespesa/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, tipo, usuario_id } = req.body;
    const [query] = await conection
        .execute('update categoria_despesa set nome = ?, tipo = ?, usuario_id = ? where id = ?', [nome, tipo, usuario_id]);
    return res.json(query);
});

//  deleta o categoria_despesa do database
app.delete('/categoriadespesa/:id', async (req, res) => {
    const { id } = req.params
    const [query] = await conection.execute('delete from categoria_despesa where id = ?', [id])
    return res.json(query)
});



// Receitas
// seleciona todas as receitas do database
const getAllReceitas = async () => {
    const [query] = await conection.execute('SELECT * FROM receitas');
    return query;
};

// retorna a lista de receitas
app.get('/receitas', async (req, res) => {
    const resultado = await getAllReceitas();

    if (resultado.length === 0) {
        return res.status(200).json({ mensagem: "Nenhuma receita encontrada no database!" });
    }
    return res.status(200).json(resultado);
});

// retorna a receita pelo seu id
app.get('/receitas/:id', async (req, res) => {
    const { id } = req.params;
    const [query] = await conection.execute('SELECT * FROM receitas WHERE id = ?', [id]);
    if (query.length === 0) return res.status(400).json({ mensagem: 'Nenhuma receita encontrada por este id no database!' });
    return res.status(200).json(query);
});

// insere uma nova receita no database
app.post('/receitas', async (req, res) => {
    const { descricao, valor, data, categoria_receita_id } = req.body;
    const [query] = await conection.execute('INSERT INTO receitas (descricao, valor, data, categoria_receita_id) VALUES (?, ?, ?, ?)', [descricao, valor, data, categoria_receita_id]);
    return res.json(query);
});

// atualiza os dados da receita no database
app.put('/receitas/:id', async (req, res) => {
    const { id } = req.params;
    const { descricao, valor, data, categoria_receita_id } = req.body;
    const [query] = await conection
        .execute('UPDATE receitas SET descricao = ?, valor = ?, data = ?, categoria_receita_id = ? WHERE id = ?', [descricao, valor, data, categoria_receita_id, id]);
    return res.json(query);
});

// deleta a receita do database
app.delete('/receitas/:id', async (req, res) => {
    const { id } = req.params;
    const [query] = await conection.execute('DELETE FROM receitas WHERE id = ?', [id]);
    return res.json(query);
});



// Despesas
// seleciona todas as despesas do database
const getAllDespesas = async () => {
    const [query] = await conection.execute('SELECT * FROM despesas');
    return query;
};

// retorna a lista de despesas
app.get('/despesas', async (req, res) => {
    const resultado = await getAllDespesas();

    if (resultado.length === 0) {
        return res.status(200).json({ mensagem: "Nenhuma despesa encontrada no database!" });
    }
    return res.status(200).json(resultado);
});

// retorna a despesa pelo seu id
app.get('/despesas/:id', async (req, res) => {
    const { id } = req.params;
    const [query] = await conection.execute('SELECT * FROM despesas WHERE id = ?', [id]);
    if (query.length === 0) return res.status(400).json({ mensagem: 'Nenhuma despesa encontrada por este id no database!' });
    return res.status(200).json(query);
});

// insere uma nova despesa no database
app.post('/despesas', async (req, res) => {
    const { descricao, valor, data, categoria_despesa_id } = req.body;
    const [query] = await conection.execute('INSERT INTO despesas (descricao, valor, data, categoria_despesa_id) VALUES (?, ?, ?, ?)', [descricao, valor, data, categoria_despesa_id]);
    return res.json(query);
});

// atualiza os dados da despesa no database
app.put('/despesas/:id', async (req, res) => {
    const { id } = req.params;
    const { descricao, valor, data, categoria_despesa_id } = req.body;
    const [query] = await conection
        .execute('UPDATE despesas SET descricao = ?, valor = ?, data = ?, categoria_despesa_id = ? WHERE id = ?', [descricao, valor, data, categoria_despesa_id, id]);
    return res.json(query);
});

// deleta a despesa do database
app.delete('/despesas/:id', async (req, res) => {
    const { id } = req.params;
    const [query] = await conection.execute('DELETE FROM despesas WHERE id = ?', [id]);
    return res.json(query);
});
