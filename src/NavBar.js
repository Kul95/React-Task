import {Link} from 'react-router-dom';
function NavBar(){
    return(
        <div>
            <h1>Nav Section</h1>
<Link to='/'>Home</Link>
<Link to='/About'>About</Link>
        </div>
    )
}
export default NavBar;