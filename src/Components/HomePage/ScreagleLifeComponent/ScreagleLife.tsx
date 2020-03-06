import React, { Fragment } from 'react'
import classes from "./ScreagleLife.module.css"
import img1 from "../../../Images/cheerleaders.jpg"
import img2 from "../../../Images/party.jpg"
import img3 from "../../../Images/maxresdefault.jpg"
import img4 from "../../../Images/Monsters-University-Clips.jpg"
import img5 from "../../../Images/monstersuseaurchin.jpg"
import img6 from "../../../Images/monsters-university.jpg"

interface Props {

}

const ScreagleLife: React.FC<Props> = () => {
    return (
        <Fragment>
            <div className={classes.title_conteiner}>
                <hr className={classes.hr}></hr>
                <h2 className={classes.h2}>Explore ScreagleLife</h2>
                <hr className={classes.hr}></hr>
            </div>
            <ul className={classes.ul_conteiner}>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img1} alt="" />
                    </div>
                </li>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img2} alt="" />
                    </div>
                </li>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img3} alt="" />
                    </div>
                </li>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img4} alt="" />
                    </div>
                </li>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img5} alt="" />
                    </div>
                </li>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img6} alt="" />
                    </div>
                </li>
            </ul>
        </Fragment >
    )
}

export default ScreagleLife
