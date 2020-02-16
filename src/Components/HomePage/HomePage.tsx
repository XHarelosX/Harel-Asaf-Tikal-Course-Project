import React, { Fragment } from 'react'
import { observer } from 'mobx-react-lite';
import classes from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage: React.FC = observer(() => {
    return (
        <Fragment>
            <main className={classes.main}>
                <section className={classes.section_signin}>
                    <div className={classes.div_student}>Already Student?</div>
                    <div className={classes.div_signin}>
                        <Link to="/Login" className={classes.span_signin}>
                            <span>Sign In</span>
                        </Link>
                        <i className={[classes.pet_icon, "material-icons"].join(" ")}>pets</i>
                    </div>
                </section>
                <section></section>
            </main>
            <ul className={classes.Home_Page_ul}>
                <li className={classes.li}></li>
                <hr className={classes.hr} ></hr>
                <li className={classes.li}></li>
            </ul>
        </Fragment>
    )
})

export default HomePage
