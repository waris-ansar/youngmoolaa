import { React, useState } from "react";
import './Sale.css'
import { NFtImage, HeaderImages } from '../../assets/image-assets'
import SaleInner from "../SaleInner/SaleInner";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setSaleInner } from "../../Redux/Fiterstate";
import Comingsoon from '../../assets/images/YMAS_Coming_Soon_transparent.gif'
const SalePage = () => {
    const SaleDispatch = useDispatch()
    const show = () => {
        SaleDispatch(setSaleInner(true))
    }
    const { SaleInnerstatus } = useSelector((state) => state.Fiterstate)

    return (
        <>
            <div className="soon">
                <img src={Comingsoon} alt="" className="soonimg" />
            </div>
            {/* {SaleInnerstatus ? <SaleInner /> :
                <div className="sale">
                    <div className="sec-header">
                        <h1>MOOLAS FOR SALE</h1>
                        <button className="btn wallet">
                            <span>CONNECT WALLET</span>
                            <img src={HeaderImages.metamask_logo} alt="" />
                        </button>
                        <div className="border"></div>
                    </div>
                    <div className="sale-page-body">
                        <div className="container">
                            <span className="price-heading">
                                The lowest price Moola currently for sale is 1.5 ETH ($4,500 USD).
                            </span>
                            <div className="sale-moolas">
                                <div className="column" onClick={show}>
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook3} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook4} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook3} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook2} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook4} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook3} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook2} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook2} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook4} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook3} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook2} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook2} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook4} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook3} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook1} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                                <div className="column">
                                    <img src={NFtImage.yearbook2} alt="" />
                                    <h3 className="name-no">1.5 E</h3>
                                    <small className="price">$4,500</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>} */}
        </>
    )
}
export default SalePage