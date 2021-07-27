import './style.css'
import {Link} from 'react-router-dom'

function Main(){
 return(
     <main className="ContainerMain">
      <div className="carGif">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c1c91d48247655.58f9308107b8f.gif" alt="carro" />
      </div>
       <Link to='/auth/login'>
        <button className="ButtonMain" type="button">
          <h3 style={{color: "#dee0e0"}}>Faça seu login</h3>
        </button>
       </Link>
   </main>   
 )
}

export default Main;


