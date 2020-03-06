import React, { Fragment } from 'react';
import { useStore } from '../../Stores/storeContext';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import classes from "./LoginPage.module.css";

const LoginPage: React.FC = observer(() => {

    const STORE = useStore();

    return (
        <Fragment>
            <main className={classes.main}>
                <div className={classes.Login_Area}>
                    <section className={classes.section}>
                        <label htmlFor="Username">Username: </label>
                        <input id="Username" type="text" />
                    </section>
                    <section className={classes.section}>
                        <label htmlFor="Password">Password: </label>
                        <input id="Password" type="password" />
                    </section>
                    <section className={classes.section}>
                        <button className={classes.Login_button} onClick={action(STORE.SetIsLogin)}>Login</button>
                    </section>
                </div>
            </main>
        </Fragment>
    )

})

export default LoginPage
