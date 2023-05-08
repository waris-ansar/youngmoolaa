import { React } from 'react';
import './home.css';
import { HeaderImages } from '../../assets/image-assets';
import { Link } from 'react-router-dom';
import IpadImg from '../../assets/images/homer-hero-ipad.svg'
import MobileHero from '../../assets/images/homer-hero-mobile.png'
const Home = () => {
    return (
        <div className="home">
            <div className="secondary-header">
                <button className="btn wallet">
                    <span>CONNECT WALLET</span>
                    <img src={HeaderImages.metamask_logo} alt="" />
                </button>
            </div>
            {/* <div className="h-main">
                <div className="head">
                    <h1>Welcome to the Young Moola Animal Society</h1>
                </div>
                <div className="header-img">
                    <Link to='/yearbook'><button className='year-book2'>VIEW THE YEARBOOK</button>
                    </Link>
                </div>
                <div className="ipadimg">
                    <img src={IpadImg} alt="" />
                </div>
                <Link to='/yearbook'><button className='year-book'>VIEW THE YEARBOOK</button>
                </Link>
            </div> */}
            <div className='home-container'>
                <div className="heading">
                    <h5>Welcome to the Young Moola Animal Society</h5>
                </div>
                <div className="hero-container">
                    {/* <img src="hero.svg" alt=""> */}
                    <div className="img-container">
                        <img src={MobileHero} alt="" />
                    </div>
                </div>
                <div className="button-covering">
                    <Link to='/yearbook'>   <button className="btn year-book">
                        <span className="btn-txt">VIEW THE YEARBOOK</span>
                    </button> </Link>
                </div>

            </div>
        </div>
    )
}
export default Home;