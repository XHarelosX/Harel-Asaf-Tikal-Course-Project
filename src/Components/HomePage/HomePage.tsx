import React, { Fragment } from 'react'
import { observer } from 'mobx-react-lite';
import classes from './HomePage.module.css';
import { Link } from 'react-router-dom';
import ScreagleLife from './ScreagleLifeComponent/ScreagleLife';

const HomePage: React.FC = observer(() => {
    return (
        <Fragment>
            <main className={classes.main}>
                <section className={classes.search_area}>
                    <h1 className={classes.search_area_h1}>Find your degree</h1>
                    <div>
                        <form className={classes.search_form}>
                            <span className={classes.search_area_span}>I'm interested in</span>
                            <input className={classes.search_input} type="text" />
                        </form>
                    </div>
                </section>
                <aside className={classes.aside_container}>
                    <section className={classes.aside_links}>
                        <Link to="/" className={classes.aside_links_button}>REQUEST INFO</Link>
                        <Link to="/" className={classes.aside_links_button}>VISIT</Link>
                        <Link to="/" className={classes.aside_links_button}>APPLY</Link>
                    </section>
                </aside>
            </main>
            <ul className={classes.Home_Page_ul}>
                <li className={classes.li}>
                    <div className={classes.li_num_info}>
                        <div>10,000+</div>
                        <div>Students</div>
                    </div>
                    <div className={[classes.li_num_info, classes.li_num_info_no_border, classes.li_num_info_border].join(' ')}>
                        <div>44,000+</div>
                        <div>Alumni</div>
                    </div>
                    <div className={classes.li_num_info}>
                        <div>140+</div>
                        <div>Clubs & Organizations</div>
                    </div>
                    <div className={[classes.li_num_info, classes.li_num_info_no_border].join(' ')}>
                        <div>130+</div>
                        <div>Areas of Studies</div>
                    </div>
                </li>
                <li className={classes.li}></li>
            </ul>
            <section className={classes.section_explore_screagleLife}>
                <ScreagleLife></ScreagleLife>
            </section>
        </Fragment>
    )
})

export default HomePage
