import {Link} from 'react-router-dom';
import './style.css'
import gifCar from '../../assets/carro.gif';
import Header from '../Home/components/Header/Header';

function Login(){
  return(
    <>
      <Header/>
        <div className="ContainerLogin">
        

          <div className="ContentForm">
            <h1>Faça seu login</h1>
            <form action="">
              <input type="e-mail"  placeholder="Digite seu email"/>
              <input type="password" placeholder="Digite sua senha"/>
              <Link to="/auth/login" id="ButtonId">
                <button>
                  <p>Entrar</p>
                </button>
              </Link>

              <Link to="/register" id="RegisterLink">
                <p >Clique para cadastrar</p> 
              </Link>
            </form>
          </div>
        </div>
    </>
  )
}

export default Login;