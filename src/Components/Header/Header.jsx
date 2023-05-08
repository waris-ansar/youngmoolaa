import { React, useEffect, useState } from 'react';
import './Header.css'
import { HeaderImages } from '../../assets/image-assets'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Header = () => {
    const [Click, setClick] = useState(false);
    const BtnClick = () => {
        setClick(!Click)
    }
    const LinkClick = () => {
        setClick(false)
    }
    const [currentPage, setCurrentPage] = useState('/')
    const location = useLocation().pathname;
    console.log(location)
    useEffect(() => setCurrentPage(location))
    return (
        <header className="header">
            <div className="header-main">
                <Link to='/'>
                    <div className="logo">
                        <img className="desktop" src={HeaderImages.logo_desk} alt="logo" />
                        <img className="mobile" src={HeaderImages.logo_mobile} alt="" />
                    </div>
                </Link>
                <div className="hamburger" id="hamburger" onClick={BtnClick}>
                    <img src={HeaderImages.hamburger} alt="" />
                </div>
                <div className={Click ? "active menu" : "menu"} id="menu">
                    <div className="menu-list">
                        <ul>
                            <Link to="/" onClick={LinkClick}>
                                <li>Home</li>
                                {currentPage === '/' ? <div className="active_page"></div> : ''}
                            </Link >
                            <Link to="/sale" onClick={LinkClick}>
                                <li>Sale</li>
                                {currentPage === '/sale' ? <div className="active_page"></div> : ''}
                            </Link >
                            <Link to="/yearbook" onClick={LinkClick}>
                                <li className="active">Yearbook</li>
                                {currentPage === '/yearbook' ? <div className="active_page yearbook"></div> : ''}

                            </Link >
                            <Link to="/masterplan" onClick={LinkClick}>
                                <li>Master Plan</li>
                                {currentPage === '/masterplan' ? <div className="active_page masterplan"></div> : ''}

                            </Link >

                        </ul>
                    </div>
                    <div className="social-icon">
                        <ul>
                            <li><a href="https://www.instagram.com/youngmoolaanimalsociety/"><img src={HeaderImages.insta} alt="" /></a></li>
                            <li><a href="https://twitter.com/"><img src={HeaderImages.twitter} alt="" /></a></li>
                            <li><a href="https://twitter.com/ymasNFT"><img src={HeaderImages.redit} alt="" /></a></li>
                            <li><a href="opensea.io"><img src={HeaderImages.opensea} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header;