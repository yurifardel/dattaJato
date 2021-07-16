import './style.css'
import {Link} from 'react-router-dom'

function Main(){
 return(
     <main className="ContainerMain">
       <Link to='/auth/login'>
        <button className="ButtonMain" type="button">
          <h3>Faça seu login</h3>
        </button>
       </Link>
   </main>   
 )
}

export default Main;


