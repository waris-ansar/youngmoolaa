import { React, useState, useEffect, useRef } from 'react'
import './NFT.css'
import { NFtImage, GalleryPopupImages } from '../../assets/image-assets'
import GalleryPopup from "../Gallery popup/GalleryPopup";
import { useSelector } from 'react-redux';
import {
    removebgFilter,
    removebdFilter,
    removemouFilter,
    removeyeFilter,
    removeaceFilter,
    removeoutFilter

} from "../../Redux/Fiterstate";
import { useDispatch } from 'react-redux';
const NFT = ({ Flist }) => {
    const {
        selectedbgFilter,
        Filtercount,
        selectedbdFilter,
        selectedeyeFilter,
        selectedmouFilter,
        selectedacceFilter,
        selectedoutFilter,
    } = useSelector(state => state.Fiterstate)
    const NFTdispatch = useDispatch()
    const click = () => {
        setOpen(!click)
    }
    // let BgList = new Array().concat(Flist)
    // BgList.push(...Flist, Flist)

    // const [Checked, setCheked] = useState([])
    // const BgClickListener = () => {
    //     setCheked(s => [...Checked, Flist])
    //     console.log(Checked)
    // }
    const [open, setOpen] = useState(false);



    return (
        <div className="nft" >
            <div className="moolas">
                {open ? <GalleryPopup data={setOpen} /> : null}
                <div className="appliedFilters">
                    <div className="filter-count"><h2>FILTERS({Filtercount})</h2></div>
                    {
                        selectedbgFilter != null ?
                            selectedbgFilter.map((data) => {
                                return (
                                    <div className="filterList">
                                        <h2 className='Filtername'>Background:</h2>
                                        <h2 className='Filterval'>{data}</h2>
                                        <div className="cross" onClick={() => NFTdispatch(removebgFilter(data))}><img src={GalleryPopupImages.xross} alt="" /></div>
                                    </div>
                                )
                            }) : null
                    }
                    {
                        selectedbdFilter != null ?
                            selectedbdFilter.map((data) => {
                                return (
                                    <div className="filterList">
                                        <h2 className='Filtername'>Body:</h2>
                                        <h2 className='Filterval'>{data}</h2>
                                        <div className="cross" onClick={() => NFTdispatch(removebdFilter(data))}><img src={GalleryPopupImages.xross} alt="" /></div>
                                    </div>
                                )
                            }) : null
                    }
                    {
                        selectedeyeFilter != null ?
                            selectedeyeFilter.map((data) => {
                                return (
                                    <div className="filterList">
                                        <h2 className='Filtername'>Eye:</h2>
                                        <h2 className='Filterval'>{data}</h2>
                                        <div className="cross" onClick={() => NFTdispatch(removeyeFilter(data))}><img src={GalleryPopupImages.xross} alt="" /></div>
                                    </div>
                                )
                            }) : null
                    }
                    {
                        selectedmouFilter != null ?
                            selectedmouFilter.map((data) => {
                                return (
                                    <div className="filterList">
                                        <h2 className='Filtername'>Mouth:</h2>
                                        <h2 className='Filterval'>{data}</h2>
                                        <div className="cross" onClick={() => NFTdispatch(removemouFilter(data))}><img src={GalleryPopupImages.xross} alt="" /></div>
                                    </div>
                                )
                            }) : null
                    }
                    {
                        selectedacceFilter != null ?
                            selectedacceFilter.map((data) => {
                                return (
                                    <div className="filterList">
                                        <h2 className='Filtername'>ACCESSORY:</h2>
                                        <h2 className='Filterval'>{data}</h2>
                                        <div className="cross" onClick={() => NFTdispatch(removeaceFilter(data))}><img src={GalleryPopupImages.xross} alt="" /></div>
                                    </div>
                                )
                            }) : null
                    }
                    {
                        selectedoutFilter != null ?
                            selectedoutFilter.map((data) => {
                                return (
                                    <div className="filterList">
                                        <h2 className='Filtername'>Outfit:</h2>
                                        <h2 className='Filterval'>{data}</h2>
                                        <div className="cross" onClick={() => NFTdispatch(removeoutFilter(data))}><img src={GalleryPopupImages.xross} alt="" /></div>
                                    </div>
                                )
                            }) : null
                    }


                </div>
                <div className="row">
                    <div className="column" onClick={() => {
                        setOpen(true)
                    }} >
                        <div className="heading"><h4>THAT FACE</h4></div>
                        <img src={NFtImage.yearbook1} alt="" className={open === false ? 'hover-class' : null} />
                        <h3>Splash Brother 3</h3>
                        <small>When it rains, it splashes</small>
                    </div>
                    <div className="column" onClick={click

                    }><div className="heading"><h4>TOUGHEST MOO ALIVE</h4></div>
                        <img src={NFtImage.yearbook2} alt="" />
                        <h3>Mooo The Builder</h3>
                        <small>Milk it for what it’s worth</small>
                    </div>
                    <div className="column" >
                        <div className="heading"><h4>GARBAGE</h4></div>
                        <img src={NFtImage.yearbook3} alt="" />
                        <h3>Moo Armstrong</h3>
                        <small>Kevin Spacy dude!</small>
                    </div>
                    <div className="column">
                        <div className="heading"><h4>LOOKS FAMILIAR</h4></div>
                        <img src={NFtImage.yearbook4} alt="" />
                        <h3>Mr. Moo</h3>
                        <small>When I'm ready to fight, my opponent has a better chance of surviving a forest fire wearing
                            gasoline drawers.</small>
                    </div>
                    <div className="column">
                        <div className="heading"><h4>LOOKS MOST LIKE ME</h4></div>
                        <img src={NFtImage.yearbook5} alt="" />
                        <h3>Moo Marley</h3>
                        <small>When it rains, it splashes</small>
                    </div>
                    <div className="column">
                        <div className="heading"><h4>BEST DRESSED</h4></div>
                        <img src={NFtImage.yearbook6} alt="" />
                        <h3>Dairy Bro</h3>
                        <small>When it rains, it splashes</small>
                    </div>
                    <div className="column">
                        <div className="heading"><h4>BEST FACE</h4></div>
                        <img src={NFtImage.yearbook7} alt="" />
                        <h3>Bubble Pop Pop Pop</h3>
                        <small />
                    </div>
                    <div className="column">
                        <div className="heading"><h4>BEST BODY</h4></div>
                        <img src={NFtImage.yearbook8} alt="" />
                        <h3>Salty One</h3>
                        <small>When it rains, it splashes</small>
                    </div>
                    <div className="column">
                        <div className="heading"><h4>MOST STYLISH</h4></div>
                        <a href="#popup"><img src={NFtImage.yearbook9} alt="" /></a>
                        <h3>Ever so clear</h3>
                        <small>When it rains, it splashes</small>
                    </div>
                    <div className="column">
                        <div className="heading"><h4>MOST EXPENSIVE LOOKING</h4></div>
                        <img src={NFtImage.yearbook10} alt="" />
                        <h3>NO. 83</h3>
                        <small />
                    </div>
                    <div className="column">
                        <div className="heading"><h4>THAT FACE</h4></div>
                        <a href="#"><img src={NFtImage.yearbook11} alt="" /></a>
                        <h3>NO. 7362</h3>
                        <small />
                    </div>
                    <div className="column">
                        <div className="heading"><h4>THAT FACE</h4></div>
                        <a href="#"><img src={NFtImage.yearbook12} alt="" /></a>
                        <h3>NO. 8372</h3>
                        <small />
                    </div>
                    <div className="column">
                        <div className="heading"><h4>THAT FACE</h4></div>
                        <a href="#"><img src={NFtImage.yearbook13} alt="" /></a>
                        <h3>NO. 123</h3>
                        <small />
                    </div>
                    <div className="column">
                        <div className="heading"><h4>THAT FACE</h4></div>
                        <a href="#"><img src={NFtImage.yearbook14} alt="" /></a>
                        <h3>NO. 996</h3>
                        <small />
                    </div>
                    <div className="column">
                        <div className="heading"><h4>THAT FACE</h4></div>
                        <a href="#"><img src={NFtImage.yearbook15} alt="" /></a>
                        <h3>NO. 5</h3>
                        <small />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default NFT