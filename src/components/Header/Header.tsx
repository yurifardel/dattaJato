import { Link } from 'react-router-dom';
import './style.css'

function Header(){  
 return(
    <header className="Container">
      <Link className="LinkHeaderLogo" to="/">
        <img className="Image" src="https://fontmeme.com/permalink/210709/83fb72aa95acd17e2294271d23bdfcdb.png" alt="netflix-font"  style={{border: "none"}} />  
      </Link>  
    </header>
 )
}

export default Header;

