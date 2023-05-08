import { React, useState, useEffect, useRef } from 'react'
import './GalleryPopup.css'
import { HeaderImages, GalleryPopupImages } from '../../assets/image-assets'
import { voteList } from './voteList'
const GalleryPopup = ({ data }) => {
    const [vote, showVote] = useState(false)
    const [crossClick, setCrossClick] = useState(false)
    const [open, setOpen] = useState(true);
    const arr = new Array(8).fill(false)
    const [checkArr, setcheckArr] = useState(arr)
    const clickEvent = () => {
        showVote(!vote)
        setOpen(false);
        !crossClick ? setCrossClick(false) : setCrossClick(false)
        window.scrollTo(0, 0)
    }
    const CloseMenu = () => {
        setCrossClick(!crossClick)
        setOpen(true)
        showVote(!vote)
    }

    const node = useRef();


    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        // outside click
        setOpen(false);
        data(false)
    };



    useEffect(() => {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="Gpopup"  >
            {open === true ?
                <div className="overlay" id="popup" >
                    <div className="popup" ref={node} >
                        <div className="popup-container" >
                            <div className="left">
                                <div className="top-bar">
                                    <h3>MOST STYLISH</h3>
                                    <div className="vote-text">
                                        <span>132 VOTES</span>
                                        <img src={GalleryPopupImages.check} alt="" />
                                    </div>
                                </div>
                                <div className="product-img">
                                    <img src={GalleryPopupImages.yearbook} alt="" />
                                </div>
                                <img className="mobile-img" src={GalleryPopupImages.mark} alt="" />
                                <h2>Ever So Clear</h2>
                                {/* <small class="desktop">I moooove the crowd</small> */}
                                <h6 className="desktop">I moooove the crowd</h6>
                                <h6 className="mobile">When I'm ready to fight, my opponent has a better chance of surviving a forest
                                    fire wearing gasoline drawers.</h6>
                            </div>
                            <div className="right">
                                <div className="logo-mark">
                                    <img src={GalleryPopupImages.mark} alt="" />
                                </div>
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
                                <div className="dotbox">
                                    <button className="clickto active" />
                                    <button className="clickto" />
                                    <button className="clickto" />
                                    <button className="clickto" />


                                </div>
                                <div className="box-container">
                                    <div className="vote-box">
                                        <div className="each-vote">
                                            <img src={GalleryPopupImages.check} alt="" />
                                            <h6><b className="vote">VOTE </b> EACH VOTE COST 1 $DAIRY
                                            </h6>
                                        </div>
                                        <div className="selection">
                                            <div className="input popup_inputbg">

                                                <select>
                                                    <option>SELECT ONE</option>
                                                    <option>BEST ALL AROUND</option>
                                                    <option>MOST UNIQUE</option>
                                                    <option>PERFECT COMBO</option>
                                                    <option>MOST DESIRABLE</option>
                                                    <option>MOST UNFORGETTABLE</option>
                                                    <option>MOST FAMOUS LOOKING</option>
                                                    <option>MY FAVORITE</option>
                                                    <option>MOST STYLISH</option>
                                                </select>
                                            </div>
                                            <button className="btn-vote" onClick={clickEvent}>
                                                vote
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
            {vote ?
                crossClick === false ?
                    <div className="tap-to-vote">
                        <div className="head">
                            <h2>TAP TO VOTE</h2>
                            <div className="cross" onClick={CloseMenu}>
                                <img src={GalleryPopupImages.xross} alt="" onClick={CloseMenu} />
                            </div>
                        </div>
                        <div className="list">
                            <ul className="item" id="filter-sub-item">
                                {
                                    voteList.map(({ id, content }) => {
                                        return (
                                            <li className="subitem">
                                                <input type="radio" className="box" name='checkboxarea' id={id} />
                                                <label htmlFor={id} />
                                                <span>{content}</span>
                                            </li>

                                        )
                                    })
                                }
                                {/* <input type="checkbox" className="box" id="1"
                                />
                                <label htmlFor="1" />
                                <span>best all around</span>
                                <li className="subitem">
                                    <input type="checkbox" className="box" id="2" />
                                    <label htmlFor="2" />
                                    <span>most unique</span>
                                </li>
                                <li className="subitem">
                                    <input type="checkbox" className="box" id="3" />
                                    <label htmlFor="3" />
                                    <span>perfect combo</span>
                                </li>
                                <li className="subitem">
                                    <input type="checkbox" className="box" id="4" />
                                    <label htmlFor="4" />
                                    <span>most desirable</span>
                                </li>
                                <li className="subitem">
                                    <input type="checkbox" className="box" id="5" />
                                    <label htmlFor="5" />
                                    <span>most unforgettable</span>
                                </li>
                                <li className="subitem">
                                    <input type="checkbox" className="box" id="6" />
                                    <label htmlFor="6" />
                                    <span>most famous looking</span>
                                </li>
                                <li className="subitem">
                                    <input type="checkbox" className="box" id="7" />
                                    <label htmlFor="7" />
                                    <span>my favorite</span>
                                </li>
                                <li className="subitem">
                                    <input type="checkbox" className="box" id="8" />
                                    <label htmlFor="8" />
                                    <span>most stylish</span>
                                </li> */}
                            </ul>
                        </div>
                        <button className="v-btn"><span>VOTE</span></button>

                    </div>
                    : null
                : null}
        </div>
    )
}
export default GalleryPopup