import React from 'react';
function Footer(){
    function foot(){
        alert('Hello');
    }
    return (
<div ClassName='foot'>
    <h1>This is footer section..</h1>
    <ul ClassName='foot1'>
        <li>Home</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Helps</li>
        <li>Users</li>
        <li>Contact Us</li>
    </ul>
    <button onClick={foot}>Submit</button>
    <br></br>
    <hr />
</div>
    )
}
export default Footer;