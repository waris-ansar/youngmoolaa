import { React, useState } from "react";
import './Moocollected.css'
import { useRef, useEffect } from 'react';
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

const MooCollected = ({ data }) => {
    const [open, setOpen] = useState(true)
    let domNode = useClickOutside(() => {
        data(false)
        setOpen(false)
    });
    return (
        <div className="overlay" id="popup-2" >
            {open ?
                <div className="popup-1 popup-2" ref={domNode} >
                    <div className="popup-1-container popup-2-container">
                        <h1 className="popup-defination">MOOO!</h1>
                        <h3 className="popup-detail">YOU collected 5 dairy for the day. Come back tomorrow for 5 more.</h3>
                    </div>
                </div> : null}
        </div>
    )
}
export default MooCollected