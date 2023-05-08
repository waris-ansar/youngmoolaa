import { React } from "react";
import '../Gallery popup/GalleryPopup.css'
import { useRef, useEffect, useState } from 'react';

const ChangeQoute = ({ data }) => {
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
    const [open, setOpen] = useState(true)
    let domNode = useClickOutside(() => {
        data(false)
        setOpen(false)
    });
    return (
        <div className="qoute">
            <div className="overlay" id="popup">

                {open ?
                    <div className="popup-1" ref={domNode}>
                        <div className="popup-1-container">
                            <h3 className="popup-defination">CHANGE QUOTE</h3>
                            <p className="popup-detail">SPEND 200 DAIRY TO CHANGE QUOTE? THE ACTION IS IRREVERSIBLE</p>
                            <input type="text" maxLength={100} className="new-quote" placeholder="New Quote" />
                            <div className="line" />
                            <h4 className="charcter-limit">100 Max  character limit
                            </h4>
                            <div className="btn-container">
                                <button className="btn">CANCEL</button>
                                <button className="btn second">PROCEED</button>
                            </div>
                        </div>
                    </div> : null}
            </div>
        </div>
    )
}
export default ChangeQoute