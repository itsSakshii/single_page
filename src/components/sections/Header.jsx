import Navbar from "../ui/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';

function Header() {
    

    return (
      <>
        <header className="header">
            <div className="inner-header flex">
                <div className="logo">
                  <h1>Bakey</h1>  
                </div>
            <Navbar/> 
            <div className="side-btn flex">
                <button className="search"> <FontAwesomeIcon icon={faSearch}/></button>
                <button className="user"><FontAwesomeIcon icon={faUser}/></button>
                </div>  
            </div>
        </header>
     
      </>
    );
  }
  
  export default Header;
  