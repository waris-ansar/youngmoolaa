import { React, useState, useEffect } from "react";
import { useRef } from "react";
import './MyMoola.css'
import { MyMoolaImages } from "../../assets/image-assets";
import { Link } from "react-router-dom";
import ChangeQoute from "../../Components/Change Qoute/Change Qoute";
import MooCollected from "../../Components/Moo Colected popup/MooCollected";

let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return domNode;
};

const MyMoola = () => {
    const [MooColected, setMooCllected] = useState(false)
    const [ChangeQout, setChangeQout] = useState(false)
    let domNode = useClickOutside(() => {
        setMooCllected(false);
        setChangeQout(false)
    });
    return (
        <div className="mymoola">
            <div className="mymoola-header">
                <h1 className="title">THE YEARBOOK</h1>
                <div className="button-container">
                    <Link to='/yearbook'>
                        <button className="btn back">
                            <img src={MyMoolaImages.left} alt="" />
                            <span>BACK TO THE YEARBOOK</span>
                        </button>
                    </Link>
                </div>
            </div>
            {MooColected ? <MooCollected data={setMooCllected} /> : ''}
            {ChangeQout ? <ChangeQoute data={setChangeQout} /> : ''}

            <div className="gallery-container">
                <div className="row">
                    <div className="contain2-boxes">
                        <div className="my-diary">
                            <h3 className="heading">MY DAIRY</h3>
                            <div className="img-container">
                                <img src={MyMoolaImages.coin_icon} alt="" />
                            </div>
                            <p className="balance">BALANCE:</p>
                            <h5>20</h5>
                            <p className="available">AVAILABLE: 0</p>
                            <a href="#popup-2" className="collecta">  <button className="btn collect" onClick={() => setMooCllected(true)}>
                                <h4>Collect</h4>
                            </button></a>
                        </div>
                        <div className="column-gal contain-box-1">
                            <div className="image-container">
                                <img src={MyMoolaImages.Moolaimg1} alt="" />
                            </div>
                            <h3 className="title">
                                Splash Brother 3
                            </h3>
                            <div className="btn-container">
                                <button className="btn btn-gray change"><span>CHANGE NAME</span></button>
                                <a href="#popup">    <button className="btn btn-gray change" onClick={() => setChangeQout(true)}><span>CHANGE quote</span></button>                            </a>

                            </div>
                            <small className="text">When it rains, it splashes</small>
                        </div>
                    </div>
                    <div className="contain-box-2 column-gal">
                        <div className="image-container">
                            <img src={MyMoolaImages.Moolaimg2} alt="" />
                        </div>
                        <h3 className="title">
                            Splash Brother 3
                        </h3>
                        <div className="btn-container">
                            <button className="btn btn-gray change" ><span>CHANGE NAME</span></button>
                            <a href="#popup"><button className="btn btn-gray change" ref={domNode} onClick={() => { setChangeQout(true) }}><span>CHANGE quote</span></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyMoola;