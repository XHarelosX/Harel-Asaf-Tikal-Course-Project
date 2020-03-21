import React, { Fragment } from "react";
import classes from "./Sidebar.module.css";
import { useStore } from "../../Stores/storeContext";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { action } from "mobx";


const Sidebar: React.FC = observer(() => {

    const STORE = useStore();

    let sideNavbarCss = [classes.aside_sidebar, classes.Close].join(" ");

    if (STORE.SideBarStatus === true) {
        sideNavbarCss = [classes.aside_sidebar, classes.Open].join(" ");
    }

    return (
        <Fragment>
            <aside className={sideNavbarCss} onClick={action(STORE.Set_SideBar_Status)}>
                <nav className={classes.nav_sidebar}>
                    <ul className={classes.ul_sidebar}>
                        <li className={classes.ul_li}>
                            <NavLink
                                to="/Home"
                                className={classes.ul_link}
                                activeStyle={{ textDecoration: "underline" }}>Home
                            </NavLink>
                        </li>
                        <li className={classes.ul_li}>
                            <NavLink
                                to="/Login"
                                className={classes.ul_link}
                                activeStyle={{ textDecoration: "underline" }}>Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </Fragment>
    );
});

export default Sidebar;
