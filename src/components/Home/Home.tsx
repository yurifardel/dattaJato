import { Fragment } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Carousel from '../Carousel/Carousel';
import '../../Global.css'


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
