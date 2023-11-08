import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import {Link} from 'react-router-dom';

const HeaderButton = () => {
  return (
    <div>
       
      <ul className='navbar'>
        
   
        <Link to='/'><li>Home</li></Link>
        <Link to='/Home'><li>Profile</li></Link>
        <Link to='/signup'><li>SignUp</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/signin'><li>SignIn</li></Link>
        <Link to='/crud'></Link>
        
       
        </ul>
    
    </div>
  )
}

export default HeaderButton