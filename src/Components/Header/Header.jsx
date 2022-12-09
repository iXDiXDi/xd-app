import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
            <img
                src='https://cdn.dribbble.com/userupload/3158903/file/original-3f5abe8b99ff4ba4626ddf6660115182.jpg?compress=1&resize=1504x1128'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    :<NavLink to={'/login'}>LOGIN</NavLink> }
            </div>
        </header>

}
export default Header