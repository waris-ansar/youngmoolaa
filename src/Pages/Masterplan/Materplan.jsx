import { React } from "react";
import { HeaderImages, Masterplan } from '../../assets/image-assets';
import './Masterplan.css'
import DairImg from '../../assets/images/dairy-coin-spin-transparent.gif'
const MasterPlan = () => {
    return (
        <div className="masterplan">
            <div className="sec-header">
                <h1>THE MASTER PLAN</h1>
                <button className="btn wallet">
                    <span>CONNECT WALLET</span>
                    <img src={HeaderImages.metamask_logo} alt="" />
                </button>
                <div className="border"></div>
            </div>
            <div className="main-masterplan">
                <div className="sec-1">
                    <div className="a1">
                        <h3 className="masterplan-h">HELLO THERE...</h3>
                        <p>
                            Welcome to Haystack, a place in the Metaverse where 10,000 unique Young Moola NFTs reside. Owning a Young Moola NFT gives you the following exclusive perks...
                            <br />
                            <br />
                            • Earn $dairy utility coins daily (see below)                            <br />
                            • Name your NFT                            <br />
                            • Attach a personal message to your NFT viewable by the community                            <br />
                            • Vote on other Moola NFTs                            <br />
                            • Contribute toward a good cause (<a href="https://www.farmsanctuary.org/" target="_blank" className="linkcolor">farmsanctuary.org</a>)                            <br />
                            • Breed Baby Moolas (Milestone activated)                            <br />
                            • Gain access to other future Haystack NFTs (Milestone activated)                            <br />
                            • Earn physical goods (Books, swags, toys, stickers, and more)                            <br />
                            • Get random airdrops                            <br />
                            • And more                            <br />

                        </p>
                    </div>
                    <img src={Masterplan.hellow} alt="" />
                </div>
                <div className="sec-2">
                    <h3 className="masterplan-h">UTILITY</h3>
                    <p>Owning Young Moola NFT starts with the ability to earn Haystack currency called $Dairy. Each Moola you own earns you $5Dairy per day that you can collect. Use $Dairy to name, add a personal quote, vote, breed, and pretty much everything else within the haystack universe.</p>
                    <img src={DairImg} alt="" />
                </div>
                <div className="sec-3">
                    <h3 className="masterplan-h">THE YEARBOOK</h3>
                    <p>The Yearbook is a directory of all Young Moola NFTs in a yearbook format. NFTs with the owner will display unique names, personal quotes, and even titles that are placed upon by vote. Eventually, the physical Yearbook will be published and shared with the owners.</p>
                    <img src={Masterplan.yearbook} alt="" />
                </div>
                <div className="sec-4">
                    <h3 className="masterplan-h">THE CAUSE</h3>
                    <p>We love animals and they need help. We will donate a portion of every Young Moola NFT sale to <a href="https://www.farmsanctuary.org/" target="_blank" className="linkcolor">farmsanctuary.org</a> . They are a non-profit organization that fights the disastrous effects of animal agriculture on animals, the environment, social justice, and public health through rescue, education, and advocacy.</p>
                    <img src={Masterplan.cause} alt="" />
                </div>
                <div className="sec-5">
                    <h3 className="masterplan-h">THE ROADMAP TIMELINE</h3>
                    <p>Plan of releases goes here</p>
                    <div className="timeline">
                        <div className="t1">
                            <div className="num">
                                <h3>PHASE</h3>
                                <h1>1</h1>
                            </div>
                            <div className="text">
                                <p>200 Young Moolas will be available!
                                    <br />
                                    0.03 eth each. We will do a private sale to the early supporters of the project.  Right from the beginning, each Young Moola will generate 5 $Dairys per day, and the personal naming, quote, and voting feature will be live. This will be limited to 1 Young Moolas per txn.</p>
                            </div>
                        </div>
                        <div className="t1">
                            <div className="num">
                                <h3>PHASE</h3>
                                <h1>2</h1>
                            </div>
                            <div className="text">
                                <p>Shortly after our first private sale, 700 Young Moolas will be available!
                                    <br />
                                    0.05 eth each. Pre-sale to the rest of the early supporters. This will be limited to 1 Young Moolas per txn.</p>
                            </div>
                        </div>
                        <div className="t1">
                            <div className="num">
                                <h3>PHASE</h3>
                                <h1>3</h1>
                            </div>
                            <div className="text">
                                <p>The rest of the 9,100 Young Moolas will be available for purchase!
                                    <br />
                                    0.07 eth each. Public sale to everyone.
                                    <br />
                                    We will also auction off 20 special edition Young Moolas. Mooo.</p>
                            </div>
                        </div>
                        <div className="t1">
                            <div className="num">
                                <h3>PHASE</h3>
                                <h1>4</h1>
                            </div>
                            <div className="text">
                                <p>When 25% of the Young Moolas are sold, we will take a snapshot. Mint #s 1-2,500 Young Moolas will be included in Vol 1 of the Haystack Directory Yearbook. Some will be given away as a prize in the raffle and the rest will be available for purchase for $Dairies.</p>
                            </div>
                        </div>
                        <div className="t1">
                            <div className="num">
                                <h3>PHASE</h3>
                                <h1>5</h1>
                            </div>
                            <div className="text">
                                <p>When 50% of the Young Moolas are sold, we will take a snapshot. Mint #s 2,501-5,000 Young Moolas will be included in Vol 2 of the Haystack Directory Yearbook. The first set of merch will also go into production. Some will be given away as a prize in the raffle and the rest will be available for purchase for $Dairies. </p>
                            </div>
                        </div>
                        <div className="t1">
                            <div className="num">
                                <h3>PHASE</h3>
                                <h1>6</h1>
                            </div>
                            <div className="text">
                                <p>When 75% of the Young Moolas are sold, we will take a snapshot. Mint #s 5,001-7,500 Young Moolas will be included in Vol 3 of the Haystack Directory Yearbook.
                                    Young Moola breeding program is unlocked. Find a match using YMAS dating feature to find a partner and together create Young Moola Baby.</p>
                            </div>
                        </div>
                        <div className="t1">
                            <div className="num">
                                <h3>PHASE</h3>
                                <h1>7</h1>
                            </div>
                            <div className="text">
                                <p>When 100% of the Young Moolas are sold, we will take a snapshot. Mint #s 7,501-10,000 Young Moolas will be included in Vol 4 of the Haystack Directory Yearbook.
                                    <br />
                                    Young Moola Travel program is unlocked. Travel to a different part of Haystack to meet the next NFT resident. Will it be a goat? Chicken? Only time will tell...</p>
                            </div>
                        </div>
                        <div className="t1">
                            <div className="num">
                                <h3>PHASE</h3>
                                <h1>8</h1>
                            </div>
                            <div className="text">
                                <p>Continue growth of Haystack metaverse. Toys? Games? Additional characters? Skys the limit.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default MasterPlan;