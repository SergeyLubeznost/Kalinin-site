import React from 'react';
import logo  from '../../image/Group 59.svg'
import find  from '../../image/find.svg'
import phone  from '../../image/phone.svg'
import favorite  from '../../image/favorite.svg'
import basket  from '../../image/Vector (1).svg'
import './header.css';
import {
   NavLink,
} from "react-router-dom";

function Header (){
    return(
        <header>
            <img className='logo' src={logo} alt="" />
          
                <ul>
                    <li>
                        <NavLink
                            to={"/"}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/aa"}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Каталог
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/aa"}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            О нас
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/aa"}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Доставка
                        </NavLink>
                    </li>
                   
                </ul>

                <form >
                    <input type="text" placeholder='Введите название' />
                    <button><img src={find} alt="" /></button>
                </form>

                <div className="phone-group">
                    <img src={phone} alt="" />
                    <p>+7 (921) 4074212</p>
                </div>

                <div className="icon-group">
                <img src={favorite} alt="" />
                <img src={basket} alt="" />
                </div>
          
        </header>
    );
}

export default Header;