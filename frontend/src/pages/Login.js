import React, { useEffect, useState } from 'react';
import '../App.css';
import image from '../images';
import axios from 'axios';

const CadastrarUsuario = () => {
  const [passwordVisibleSignUp, setPasswordVisibleSignUp] = useState(false);

  const togglePasswordVisibilitySignUp = () => {
    setPasswordVisibleSignUp(!passwordVisibleSignUp);
  };

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setcpf] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:377/usuario', {
        nome,
        sobrenome,
        cpf,
        senha,
      });
      alert('Dados enviados com sucesso!');

      setNome('');
      setSobrenome('');
      setcpf('');
      setSenha('');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar dados. Consulte o console para mais detalhes.');
    }
  };

  return (
    <form className="form-signup" onSubmit={handleSubmit}>
      <div className="label-input">
        <label>Nome</label>
        <input
          type="text"
          id="text-name-signup"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div className="label-input">
        <label>Sobrenome</label>
        <input
          type="text"
          id="text-surname-signup"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          required
        />
      </div>
      <div className="label-input">
        <label>CPF</label>
        <input
          type="text"
          id="text-cpf-sigup"
          value={cpf}
          onChange={(e) => setcpf(e.target.value)}
          required
        />
      </div>
      <div className="label-input">
        <label>Senha</label>
        <div className="area-password">
          <input
            type={passwordVisibleSignUp ? 'text' : 'password'}
            id="password-signup"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <img
            className="password-lock-signup"
            src={
              passwordVisibleSignUp ? image.passwordUnlock : image.passwordLock
            }
            alt=""
            onClick={togglePasswordVisibilitySignUp}
          />
        </div>
      </div>
      <button type="submit" className="button-signup">
        Cadastrar
      </button>
      <div className="massage-error"></div>
    </form>
  );
};

const LogarUsuario = () => {
  const [passwordVisibleSignIn, setPasswordVisibleSignIn] = useState(false);

  const togglePasswordVisibilitySignIn = () => {
    setPasswordVisibleSignIn(!passwordVisibleSignIn);
  };

  const [cpfLogin, setCPFLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:377/usuario/buscarcpf/${cpfLogin}`,
      );
      const userFromDB = response.data[0];

      if (
        response.status === 200 &&
        userFromDB &&
        userFromDB.senha === senhaLogin
      ) {
        window.location.href = '/';
      } else {
        alert('Usuario ou Senha Incorreta!');
      }
    } catch {
      alert('Não foi possivél fazer conexão com o servidor!');
    }
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <div className="label-input">
        <label>CPF</label>
        <input
          type="text"
          id="text-cpf-signin"
          value={cpfLogin}
          onChange={(e) => setCPFLogin(e.target.value)}
          required
        />
      </div>
      <div className="label-input">
        <label>Senha</label>
        <div className="area-password">
          <input
            type={passwordVisibleSignIn ? 'text' : 'password'}
            id="password-signin"
            value={senhaLogin}
            onChange={(e) => setSenhaLogin(e.target.value)}
            required
          />
          <img
            className="password-lock"
            src={
              passwordVisibleSignIn ? image.passwordUnlock : image.passwordLock
            }
            alt=""
            onClick={togglePasswordVisibilitySignIn}
          />
        </div>
      </div>
      <div className="remember-password">
        Esqueceu a senha? <a href="#">Click Aqui.</a>
      </div>
      <button type="submit" className="button-signin">
        Entrar
      </button>
      <div className="massage-error"></div>
    </form>
  );
};

function Login() {
  useEffect(() => {
    // window.addEventListener('load', function () {
    //   const loader = document.querySelector('.loading-container');
    //   loader.style.display = 'none';
    // });

    function animationLogin() {
      const btnLogin = document.querySelector('.btn-signin');
      const btnCadastrar = document.querySelector('.btn-signup');
      const contentLogin = document.querySelector('.content-signin-form');
      const contentCadastrar = document.querySelector('.content-signup-form');
      const contentSignIn = document.querySelector('.content-signin-welcome');
      const contentSignUp = document.querySelector('.content-signup-welcome');

      btnCadastrar.addEventListener('click', (e) => {
        e.preventDefault();

        contentCadastrar.style.transform = 'translateX(0)';
        contentCadastrar.style.opacity = '1';
        contentSignUp.style.transform = 'translateX(100%)';
        contentSignUp.style.opacity = '0';
        contentLogin.style.transform = 'translateX(-100%)';
        contentLogin.style.opacity = '0';
        contentSignIn.style.transform = 'translateX(0)';
        contentSignIn.style.opacity = '1';
      });

      btnLogin.addEventListener('click', (e) => {
        e.preventDefault();

        contentCadastrar.style.transform = 'translateX(100%)';
        contentCadastrar.style.opacity = '0';
        contentSignUp.style.transform = 'translateX(0)';
        contentSignUp.style.opacity = '1';
        contentLogin.style.transform = 'translateX(0)';
        contentLogin.style.opacity = '1';
        contentSignIn.style.transform = 'translateX(-100%)';
        contentSignIn.style.opacity = '0';
      });
    }
    animationLogin();
  }, []);

  return (
    <main className="main">
      <div className="logo">
        <img src={image.logoTipo2} alt="" />
      </div>
      <div className="container">
        <div className="loading-container">
          <div className="loader"></div>
        </div>
        <div className="content-signin">
          <div className="content-signin-welcome">
            <h1>Bem-vindo(a) de volta!</h1>
            <span>
              Faça login novamente e continue usando SpendWise, o melhor
              gerenciador financeiro.
            </span>
            <button className="btn-signin">Sign In</button>
          </div>
          <div className="content-signin-form">
            <h1>Sign In</h1>
            <LogarUsuario></LogarUsuario>
          </div>
        </div>
        <div className="content-signup">
          <div className="content-signup-welcome">
            <h1>Olá, amigo(a)!</h1>
            <span>
              Preencha alguns dados e venha fazer parte da família SpendWise.
            </span>
            <button className="btn-signup">Sign Up</button>
          </div>
          <div className="content-signup-form">
            <h1>Sign Up</h1>
            <CadastrarUsuario></CadastrarUsuario>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
