import React, { Fragment } from 'react'
import LoginPage from '../LoginPage/LoginPage'
import classes from './MainArea.module.css';

const MainArea: React.FC = () => {

    return (
        <Fragment>
            <div className={classes.Login_container}>
                <LoginPage />
            </div>
        </Fragment >
    )

}
export default MainArea;