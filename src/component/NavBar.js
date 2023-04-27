import {Link} from 'react-router-dom';
function NavBar(){
    return(
        <div>
            <h1>Nav Section</h1>
            <Link to='/About'>About Us Link Router</Link>
<br/><br/>
<Link to='/'>Home Link Router</Link><br /><br/>
<Link to='/Careers'>Click Me Careers....</Link>
<br/> <br/>
<Link to='/User1'>Click Me User1....</Link><br/><br/>
<Link to='/Users1/anil'>Anil</Link><br/><br/>
<Link to='/Users1/peter'>Peter</Link>
        </div>
    )
}
export default NavBar;