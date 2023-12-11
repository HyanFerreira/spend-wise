import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import image from './images';

const baseURL = 'http://localhost:377/usuario';

const TabbleUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div className="tabble-usuarios">
      <h1>Lista de Usúarios Cadastrados</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.sobrenome}</td>
              <td>{usuario.cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  return (
    <main className="main-index-usuarios">
      <TabbleUsuarios></TabbleUsuarios>
    </main>
  );
}

export default App;
