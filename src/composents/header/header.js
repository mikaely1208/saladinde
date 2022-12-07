import React from 'react';
import {NavLink,Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/bol.svg';
import { ReactComponent as Home } from  '../../assets/house.svg';
import { ReactComponent as Explore } from '../../assets/explore.svg';
import './Header.css';



const Header = () => {
    return(
        <nav>
            <div className ='div-header'>
                <div class-className='div-logo'>
                    <Logo/>
                </div>
                <div style= {{display: 'flex',flexDirection:'row'}}>
                    <NavLink to ='/'><Home className='div-logo'/></NavLink>
                    <NavLink to ='/explore'><Explore className='div-logo'/></NavLink>
                    <button className='button-header'>Un truc</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;