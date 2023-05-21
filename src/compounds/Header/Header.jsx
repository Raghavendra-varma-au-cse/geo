import React from "react"
import css from "./Header.module.css"
const Header = () => {
    return(
        <dev className = {css.container}>
            <dev className={css.logo}>
                logo
            </dev>
            <dev className={css.right}>
                <input type="Search" className={css.search} />
                <span>Png icon of search</span>
            </dev>
        </dev>
    )
}
export default Header;