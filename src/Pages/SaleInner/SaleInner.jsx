import { React } from "react";
import './Saleinner.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HeaderImages, MyMoolaImages, NFtImage } from "../../assets/image-assets";
import { setSaleInner } from "../../Redux/Fiterstate";
const SaleInner = () => {
    const dispatch = useDispatch()

    return (
        <div className="div">
            <header className="header">
                <div className="header-primary">
                    <h1 className="title">MOOLAS FOR SALE</h1>
                    <div className="button-container">
                        <button className="btn back" onClick={() => {
                            dispatch(setSaleInner(false))
                        }}>
                            <img src={MyMoolaImages.left} alt="" />
                            <span>BACK</span>
                        </button>

                        <button className="btn wallet" id="wallet">
                            <span>CONNECT WALLET</span>
                            <img src={HeaderImages.metamask_logo} alt="" />
                        </button>
                    </div>
                </div>
            </header>
            {/* body of the sale-inner page  */}
            <div className="sale-inner-container">
                <div className="container-white">
                    <div className="container">
                        <div className="left-part">
                            <div className="img-container">
                                <img src={NFtImage.yearbook1} alt="" />
                            </div>
                            <div className="info">
                                <h2>Young Moola #30</h2>
                                <b><u>0x74648...83e066</u></b>
                                <b>Owned by <u>0xNFTXYZ</u></b>
                            </div>
                        </div>
                        <div className="right-part">
                            {/* the buttons  */}
                            <div className="brandings">
                                <div className="row-popup first">
                                    <div className="column-popup">
                                        <div className="popup-btn">
                                            <small>background:</small>
                                            <h3>spectrum</h3>
                                        </div>
                                        <div className="image bg-scene">
                                            <img src={HeaderImages.side1} alt="" />
                                        </div>
                                    </div>
                                    <div className="column-popup second">
                                        <div className="popup-btn">
                                            <small>BODY:</small>
                                            <h3>bones</h3>
                                        </div>
                                        <div className="image man">
                                            <img src={HeaderImages.side2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row-popup">
                                    <div className="column-popup">
                                        <div className="popup-btn">
                                            <small>eyes:</small>
                                            <h3>hypnotized</h3>
                                        </div>
                                        <div className="image eye">
                                            <img src={HeaderImages.side3} alt="" />
                                        </div>
                                    </div>
                                    <div className="column-popup">
                                        <div className="popup-btn">
                                            <small>mouth:</small>
                                            <h3>pacifier</h3>
                                        </div>
                                        <div className="image">
                                            <img src={HeaderImages.side4} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row-popup">
                                    <div className="column-popup">
                                        <div className="popup-btn">
                                            <small>accessory:</small>
                                            <h3>shower cap</h3>
                                        </div>
                                        <div className="image glasses">
                                            <img src={HeaderImages.side5} alt="" />
                                        </div>
                                    </div>
                                    <div className="column-popup">
                                        <div className="popup-btn">
                                            <small>outfit:</small>
                                            <h3>miami special</h3>
                                        </div>
                                        <div className="image">
                                            <img src={HeaderImages.side6} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-container">
                    <h1>transaction history</h1>
                    <div className="transaction">
                        <div className="table">
                            <div className="col type">
                                <div className="main-heading">TYPE</div>
                                <ul className="list">
                                    <li>Transfer</li>
                                    <li>Transfer</li>
                                    <li>Transfer</li>
                                    <li>Transfer</li>
                                    <li>Transfer</li>
                                    <li>Transfer</li>
                                    <li>Transfer</li>
                                    <li>Transfer</li>
                                    <li>sale</li>
                                </ul>
                            </div>
                            <div className="col">
                                <div className="main-heading">FROM</div>
                                <ul className="list">
                                    <li>MilkBoy</li>
                                    <li>MilkBoy</li>
                                    <li>MilkBoy</li>
                                    <li>MilkBoy</li>
                                    <li>MilkBoy</li>
                                    <li>MilkBoy</li>
                                    <li>MilkBoy</li>
                                    <li>MilkBoy</li>
                                    <li>MilkBoy</li>
                                </ul>
                            </div>
                            <div className="col">
                                <div className="main-heading">TO</div>
                                <ul className="list">
                                    <li>FarmerJoe</li>
                                    <li>FarmerJoe</li>
                                    <li>FarmerJoe</li>
                                    <li>FarmerJoe</li>
                                    <li>FarmerJoe</li>
                                    <li>FarmerJoe</li>
                                    <li>FarmerJoe</li>
                                    <li>FarmerJoe</li>
                                    <li>FarmerJoe</li>
                                </ul>
                            </div>
                            <div className="col">
                                <div className="main-heading">PRICE</div>
                                <ul className="list">
                                    <li>1.5 E</li>
                                    <li>1.5 E</li>
                                    <li>1.5 E</li>
                                    <li>1.5 E</li>
                                    <li>1.5 E</li>
                                    <li>1.5 E</li>
                                    <li>1.5 E</li>
                                    <li>1.5 E</li>
                                    <li>1.5 E</li>
                                </ul>
                            </div>
                            <div className="col date">
                                <div className="main-heading">DATE</div>
                                <ul className="list">
                                    <li>01/16/2022, 5:05 PM</li>
                                    <li>01/16/2022, 5:05 PM</li>
                                    <li>01/16/2022, 5:05 PM</li>
                                    <li>01/16/2022, 5:05 PM</li>
                                    <li>01/16/2022, 5:05 PM</li>
                                    <li>01/16/2022, 5:05 PM</li>
                                    <li>01/16/2022, 5:05 PM</li>
                                    <li>01/16/2022, 5:05 PM</li>
                                    <li>01/16/2022, 5:05 PM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SaleInner