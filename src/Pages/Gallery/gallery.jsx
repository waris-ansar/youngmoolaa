import { React, useEffect, useState } from "react";
import './gallery.css'
import Secondary from "../../Components/Secondary-header/secondary-header";
import Filter from "../../Components/Filters/Filter";
import NFT from "../../Components/NFT/NFT";
import { NFtImage } from '../../assets/image-assets'
import { HeaderImages } from "../../assets/image-assets";

const Gallery = () => {
    // useEffect(
    //     () => {
    //         const provider = new ethers.providers.Web3Provider(window.ethereum);
    //         const erc20 = new ethers.Contract(contract, erc20abi, provider);
    //     }
    // )
    const [FilterClick, SetFilterClick] = useState(false)
    const BtnClick = (data) => {
        SetFilterClick(data)
    }
    const [FilterList, SetFilterList] = useState()

    return (
        <div className="gallery">
            <Secondary click={BtnClick} />
            <div className="page-body-container">
                <Filter Click={FilterClick} List={SetFilterList} />
                <NFT Flist={FilterList} />
            </div>
        </div>
    )
}
export default Gallery