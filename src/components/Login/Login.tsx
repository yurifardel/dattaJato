function Login(){
  return(
    <div className="ContainerLogin">
      <div className="ContentForm">
        <h1>Faça seu login</h1>
        <form action="">
          <input type="text"  placeholder="Digite seu email"/>
          <input type="password" placeholder="Digite sua senha"/>
          <button>
            <p>Entrar</p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;