import car from '../../assets/car.jpeg';

import './style.css'

function Home(){
  return(
    <div className="MasterContainer">
      <div className="Container">
        <main className="MainContainer">
          <div className="ContentForm">
            <form action="">
              <input type="text" />
              <input type="text" />
            </form>

            <a href="/">
                <p>Entrar</p>
            </a>

          <a href="/">
            <p>Registre-se</p>
          </a>
          </div>

          <div className="ImgCar">
            <img src={car} alt="car" />
          </div>
        </main>
    </div>

    </div>
    
  )
}

export default Home;