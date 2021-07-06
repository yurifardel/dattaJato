import { Fragment } from 'react';
import React from 'react';

import car from './assets/car.jpeg';


import './App.css';


function App() {
  return (
    <Fragment>
      <div className="Container">
        <div className="Content">
          <form action="">
            <input type="text" />
            <input type="text" />
            <a href="/">
              <h1>Entrar</h1>
            </a>
          </form>

         <a href="/">
           <p>Registre-se</p>
         </a>
        </div>

        <div className="ImgCar">
          <img src={car} alt="car" />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
