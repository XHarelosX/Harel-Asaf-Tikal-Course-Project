import React, { Fragment } from 'react';
import { useStore } from '../../Stores/storeContext';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import classes from "./LoginPage.module.css";

const LoginPage: React.FC = observer(() => {

    const STORE = useStore();

    return (
        <Fragment>
            <div className={classes.Login_Area}>
                <section>
                    <label htmlFor="Username">Username: </label>
                    <input id="Username" type="text" />
                </section>
                <section>
                    <label htmlFor="Password">Password: </label>
                    <input id="Password" type="password" />
                </section>
                <section>
                    <button className={classes.Login_button} onClick={action(STORE.SetIsLogin)}>Login</button>
                </section>
            </div>
        </Fragment>
    )

})

export default LoginPage
