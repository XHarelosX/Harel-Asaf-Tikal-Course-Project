import React, { Fragment } from "react";
import classes from "./Sidebar.module.css";
import { useStore } from "../../Stores/storeContext";
import { observer } from "mobx-react-lite";


const Sidebar: React.FC = observer(() => {
    const STORE = useStore();

    let sideNavbarCss = [classes.aside_sidebar, classes.Close].join(" ");

    if (STORE.SideBarStatus === true) {
        sideNavbarCss = [classes.aside_sidebar, classes.Open].join(" ");
    }

    return (
        <Fragment>
            <aside className={sideNavbarCss}>
                <nav className={classes.nav_sidebar}>
                    <ul className={classes.ul_sidebar}>
                        <li>Home</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </aside>
        </Fragment>
    );
});

export default Sidebar;
