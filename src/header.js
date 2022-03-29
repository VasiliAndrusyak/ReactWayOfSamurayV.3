import React from "react";
import s from './header.module.css';


const Header = () => {
    return (
        <div className={s.header}>
            <a href="#">Home</a><br/><hr/>
            <a href="#">News Feed</a><br/><hr/>
            <a href="#">Messages</a>
        </div>
    )
}
export default Header;