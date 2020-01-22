import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/56134989?s=460&v=4" alt="Max Castro"/>
                <div className="user-info">
                  <strong>Max Castro</strong>
                  <span>PHP, MySql</span>
                </div>
                <p>Desenvolvedor Web apaixonado por programação</p>
                <a href="https://github.com/Shumax">Acessar perfil no GitHub</a>
            </header>
          </li>
          <li className="dev-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/56134989?s=460&v=4" alt="Max Castro"/>
                <div className="user-info">
                  <strong>Max Castro</strong>
                  <span>PHP, MySql</span>
                </div>
                <p>Desenvolvedor Web apaixonado por programação</p>
                <a href="https://github.com/Shumax">Acessar perfil no GitHub</a>
            </header>
          </li>
          <li className="dev-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/56134989?s=460&v=4" alt="Max Castro"/>
                <div className="user-info">
                  <strong>Max Castro</strong>
                  <span>PHP, MySql</span>
                </div>
                <p>Desenvolvedor Web apaixonado por programação</p>
                <a href="https://github.com/Shumax">Acessar perfil no GitHub</a>
            </header>
          </li>
          <li className="dev-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/56134989?s=460&v=4" alt="Max Castro"/>
                <div className="user-info">
                  <strong>Max Castro</strong>
                  <span>PHP, MySql</span>
                </div>
                <p>Desenvolvedor Web apaixonado por programação</p>
                <a href="https://github.com/Shumax">Acessar perfil no GitHub</a>
            </header>
          </li>
         </ul>


      </main>
    </div>
  );
}

export default App;
