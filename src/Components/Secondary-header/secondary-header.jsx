import { React, useState } from "react";
import './secondar.css'
import { HeaderImages } from '../../assets/image-assets'
import { Link } from 'react-router-dom';

const Secondary = ({ click }) => {
    const [BtnClick, setBtnClick] = useState(false);
    click(BtnClick)

    return (
        <div className="sec_hed">
            <div className="header-primary">
                <h1 className="title">THE YEARBOOK</h1>
                <div className="button-container">
                    <Link to="/MyMoola" >
                        <button className="btn moolasbtn" >
                            <span>MY MOOLAS</span>
                            <img src={HeaderImages.btn1} alt="" />
                        </button>
                    </Link>

                    <button className="btn shuffle">
                        <span>SHUFFLE</span>
                        <img src={HeaderImages.swap} alt="" />
                    </button>
                    <button className="btn wallet">
                        <span>CONNECT WALLET</span>
                        <img src={HeaderImages.metamask_logo} alt="" />
                    </button>
                    <button className="btn filter" onClick={() => {
                        setBtnClick(true)
                    }}>
                        <img src={HeaderImages.filter} alt="" />
                    </button>
                    {/* <button class="btn filter">
            <img src="images/filter.png" alt="">
        </button> */}
                </div>

            </div>
            <div className="border"></div>
        </div>
    )
}
export default Secondary