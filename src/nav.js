import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <div className="navbar">
            <div className="links">
                <Link to ="/">HOME</Link>
                <Link to ="/create">CREATE</Link>
                <Link to="/logout">LOGOUT</Link>
            </div>  
        </div>
    );
}
 
export default Nav;