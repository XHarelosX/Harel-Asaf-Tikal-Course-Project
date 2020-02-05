import React, { Fragment } from 'react'
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import classes from './Header.module.css'
import { useStore } from '../../Stores/storeContext'


const Header: React.FC = observer(() => {
    const STORE = useStore();

    function burgerToggleClickHandler() {
        STORE.Set_SideBar_Status()
    }


    return (
        <Fragment>
            <header className={classes.header}>
                <nav className={classes.nav_bar}>
                    <div className={classes.Burger_main_div} onClick={action(burgerToggleClickHandler)}>
                        <div className={classes.Burger_div}></div>
                        <div className={classes.Burger_div}></div>
                        <div className={classes.Burger_div}></div>
                    </div>
                    <ul className={classes.nav_bar_ul}>
                        <li className={classes.nav_bar_ul_li}>Home</li>
                        <li className={classes.nav_bar_ul_li}>Login</li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
})

export default Header