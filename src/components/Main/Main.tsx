import './style.css'
import {Link} from 'react-router-dom'

function Main(){
 return(
   <div className="container">
     <main className="ContainerMain">
       <Link to='/auth/login'>
        <button className="ButtonMain" type="button">
          <h3>Faça seu login</h3>
        </button>
       </Link>
      
   </main>
   </div>
   
 )
}

export default Main;


