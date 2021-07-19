import { Fragment } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Carousel from './components/Carousel/Carousel';
import './Global.css'


function App() {
  return (
    <Fragment>
      <Header/>
      <Carousel/>
      <Main/>
    </Fragment>
  );
}

export default App;
