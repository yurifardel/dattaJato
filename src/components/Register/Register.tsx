import { Link } from "react-router-dom";
import Header from "../Home/components/Header/Header";
import "./style.css";

function Register() {
  return (
    <>
      <Header />
      <div className="ContainerRegister">
        <div className="ContentRegister">
          <form action="" method="get">
            <fieldset>
              <legend>Registre-se</legend>

              <div className="field-group">
                <div className="field">
                  <label htmlFor="name">Digite seu nome</label>
                  <input type="text" name="name" required />
                </div>
                <div className="field">
                  <label htmlFor="name">Digite seu email</label>
                  <input type="e-mail" name="email" required />
                </div>
                <div className="field">
                  <label htmlFor="name">Digite seu CPF</label>
                  <input type="text" name="cpf" required />
                </div>
                <div className="field">
                  <label htmlFor="name">Digite sua senha</label>
                  <input type="password" name="senha" required />
                </div>
                <div className="field">
                  <label htmlFor="name">Confirme sua senha</label>
                  <input type="password" name="senha" required />
                </div>
              </div>

            
            </fieldset>
            <Link id="button-link" to="/auth/login">
              <button>
                Cadastrar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
