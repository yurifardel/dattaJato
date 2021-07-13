import {Link} from 'react-router-dom';

import './style.css'

function Login(){
  return(
    <div className="ContainerLogin">
      <div className="ContentForm">
        <h1>Faça seu login</h1>
        <form action="">
          <input type="text"  placeholder="Digite seu email"/>
          <input type="password" placeholder="Digite sua senha"/>
          <Link to="/auth/sucess" id="ButtonId">
            <button>
              <p>Entrar</p>
            </button>
          </Link>
          

          <Link to="/auth/register" id="RegisterLink">
            Clique para cadastrar
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login;