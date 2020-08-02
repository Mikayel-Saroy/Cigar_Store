import React from 'react';
import st from './Header.module.css';
import shopping_cart from './shopping_cart.png';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={st.main}>
            <div className={st.main1}>
                <div className={st.logo}>
                    <NavLink to='/'>CigarStore</NavLink>
                </div>
                <div className={st.cigars}>
                    <NavLink to='/cigars' activeClassName={st.active}>Cigars</NavLink>
                </div>
                <div className={st.cigarillos}>
                    <NavLink to='/cigarillos' activeClassName={st.active}>Cigarillos</NavLink>
                </div>
                <div className={st.accessories}>
                    <NavLink to='/accessories' activeClassName={st.active}>Accessories</NavLink>
                </div>
                <div className={st.cart}>
                    <img src={shopping_cart} alt='img'/>
                    <div className={st.cartCount}>
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div className={st.line}/>
        </div>
    );
}

export default Header;
