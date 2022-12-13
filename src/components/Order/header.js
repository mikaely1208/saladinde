import React from 'react';
import './header.css';
import Image from './bol.png'
import {v4 as uuid} from 'uuid'; 


function Header() {
    const unique_id = uuid(); 

    return(
      <div>
        <img id='bol' src= {Image}/>
         <p id='order'>Order ID :</p> {unique_id}


      </div>  
        
    )
}

export default Header;