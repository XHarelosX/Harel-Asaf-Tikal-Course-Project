import React from 'react'
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
        <>
            <div className={classes.title_conteiner}>
                <hr className={classes.hr}></hr>
                <h2 className={classes.h2}>Explore ScreagleLife</h2>
                <hr className={classes.hr}></hr>
            </div>
            <ul className={classes.ul_conteiner}>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img1} alt="" />
                        <div className={classes.div_title}>
                            <h2 className={classes.h2_title}>School Spirit</h2>
                            <hr className={classes.title_hr}></hr>
                            <p className={classes.title_p}>Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        </div>
                    </div>
                </li>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img2} alt="" />
                        <div className={classes.div_title}>
                            <h2 className={classes.h2_title}>Housing</h2>
                            <hr className={classes.title_hr}></hr>
                            <p className={classes.title_p}>Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        </div>
                    </div>
                </li>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img3} alt="" />
                        <div className={classes.div_title}>
                            <h2 className={classes.h2_title}>Student Involvement</h2>
                            <hr className={classes.title_hr}></hr>
                            <p className={classes.title_p}>Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        </div>
                    </div>
                </li>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img4} alt="" />
                        <div className={classes.div_title}>
                            <h2 className={classes.h2_title}>Club Sports</h2>
                            <hr className={classes.title_hr}></hr>
                            <p className={classes.title_p}>Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        </div>
                    </div>
                </li>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img5} alt="" />
                        <div className={classes.div_title}>
                            <h2 className={classes.h2_title}>Recreation & Intramurals</h2>
                            <hr className={classes.title_hr}></hr>
                            <p className={classes.title_p}>Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        </div>
                    </div>
                </li>
                <li className={classes.ul_li}>
                    <div className={classes.ul_li_div}>
                        <img className={classes.div_img} src={img6} alt="" />
                        <div className={classes.div_title}>
                            <h2 className={classes.h2_title}>Student Community</h2>
                            <hr className={classes.title_hr}></hr>
                            <p className={classes.title_p}>Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default ScreagleLife
