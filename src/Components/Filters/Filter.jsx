import { React, useState } from "react";
import './Filter.css'
import { HeaderImages } from "../../assets/image-assets";
import Close from '../../assets/images/x.png'
import { Background, Body, Outfit, Accesories, Eyes, Mouth } from "./FilterList";
import { useDispatch } from "react-redux";
import {
    addbgFilter,
    addbdFilter,
    removebgFilter,
    removebdFilter,
    addyeFilter,
    removeyeFilter,
    addmouFilter,
    removemouFilter,
    addaceFilter,
    removeaceFilter,
    addoutFilter,
    removeoutFilter
} from "../../Redux/Fiterstate";
import { useSelector } from 'react-redux';

const Filter = ({ Click, List }) => {
    const [CrossState, setCross] = useState(true)
    const [FilterClick, setFilterClick] = useState(0)
    const ChangeImg = () => {
        setFilterClick(!FilterClick)
    }
    const dispatch = useDispatch()
    const { selectedbgFilter, selectedbdFilter } = useSelector((state) => state.Fiterstate)
    // const [checkedState, setCheckedState] = useState([]);
    // const handlecheckClick = (index) => {
    //     setCheckedState(s => [...checkedState, Background[index - 1].val])
    //     List(checkedState)
    //     console.log(checkedState)
    // }
    return (
        <div className={Click && CrossState === true ? 'filters opened' : "filters"
        }>
            <div className="filter-header">
                <h1 className="filter-heading">FILTERS</h1>
                <div className="b" onClick={() => {
                    setCross(false)
                }}> <img className="close-btn" src={Close} alt="" />
                </div>
            </div>

            <ul className="filter">
                <li >
                    <div className={FilterClick === 1 ? "borderbt filter-data-link" : 'filter-data-link'}
                        onClick={() => {
                            if (FilterClick === 1) setFilterClick(0)
                            else setFilterClick(1)
                        }}>

                        <div className="detail">
                            <div className="image">
                                <img src={HeaderImages.side1} alt="" />
                            </div>
                            <span className="detail-text">background</span>
                        </div>
                        <div className="image" >
                            {FilterClick === 1 ? <img src={HeaderImages.minus} alt="" />
                                : <img src={HeaderImages.plus} alt="" />}
                        </div>                    </div>
                    {FilterClick === 1 ?

                        <ul className="filter-sub-item" id="filter-sub-item">
                            {

                                Background.map(({ id, val }, index) => {
                                    return (
                                        <li key={index} className="subitem">
                                            <input type="checkbox" className="box" id={id} onClick={(e) => {
                                                e.target.checked ? dispatch(addbgFilter(Background[index].val))
                                                    : dispatch(removebgFilter(Background[index].val))
                                            }
                                            } />
                                            {/* <input type="checkbox" className="box" id={id} onClick={() => dispatch(addFilter(Background[index].val))} /> */}
                                            <label htmlFor={id} />
                                            <span>{val}</span>
                                        </li>
                                    )
                                })
                            }

                        </ul> : ''
                    }
                </li>
                <li>
                    <div className={FilterClick === 2 ? "borderbt filter-data-link" : 'filter-data-link'} onClick={() => {
                        if (FilterClick === 2) setFilterClick(0)
                        else setFilterClick(2)
                    }}>

                        <div className="detail" onClick={() => {
                            if (FilterClick === 2) setFilterClick(0)
                            else setFilterClick(2)
                        }}>
                            <div className="image side2">
                                <img src={HeaderImages.side2} alt="" />
                            </div>
                            <span className="detail-text">BODY</span>
                        </div>
                        <div className="image" onClick={() => {
                            if (FilterClick === 2) setFilterClick(0)
                            else setFilterClick(2)
                        }}>
                            {FilterClick === 2 ? <img src={HeaderImages.minus} alt="" />
                                : <img src={HeaderImages.plus} alt="" />}
                        </div>                    </div>
                    {FilterClick === 2 ?
                        <ul className="filter-sub-item" id="filter-sub-item">
                            {
                                Body.map(({ id, val }, index) => {
                                    return (
                                        <li key={index} className="subitem">
                                            <input type="checkbox" className="box" id={id} onClick={(e) => {
                                                e.target.checked ? dispatch(addbdFilter(Body[index].val))
                                                    : dispatch(removebdFilter(Body[index].val))
                                            }
                                            } />
                                            <label htmlFor={id} />
                                            <span>{val}</span>
                                        </li>
                                    )
                                })
                            }

                        </ul> : ''
                    }
                </li>
                <li>
                    <div className={FilterClick === 3 ? "borderbt filter-data-link" : 'filter-data-link'} onClick={() => {
                        if (FilterClick === 3) setFilterClick(0)
                        else setFilterClick(3)
                    }}>
                        <div className="detail" >
                            <div className="image">
                                <img src={HeaderImages.side3} alt="" />
                            </div>
                            <span className="detail-text">EYES</span>
                        </div>
                        <div className="image" onClick={() => {
                            if (FilterClick === 3) setFilterClick(0)
                            else setFilterClick(3)
                        }}>
                            {FilterClick === 3 ? <img src={HeaderImages.minus} alt="" />
                                : <img src={HeaderImages.plus} alt="" />}
                        </div>                    </div>
                    {FilterClick === 3 ?
                        <ul className="filter-sub-item" id="filter-sub-item">
                            {
                                Eyes.map(({ id, val }, index) => {
                                    return (
                                        <li key={index} className="subitem">
                                            <input type="checkbox" className="box" id={id} onClick={(e) => {
                                                e.target.checked ? dispatch(addyeFilter(Eyes[index].val))
                                                    : dispatch(removeyeFilter(Eyes[index].val))
                                            }
                                            } />
                                            <label htmlFor={id} />
                                            <span>{val}</span>
                                        </li>
                                    )
                                })
                            }

                        </ul> : ''
                    }
                </li>
                <li>
                    <div className={FilterClick === 4 ? "borderbt filter-data-link" : 'filter-data-link'} onClick={() => {
                        if (FilterClick === 4) setFilterClick(0)
                        else setFilterClick(4)
                    }}>

                        <div className="detail" >
                            <div className="image">
                                <img src={HeaderImages.side4} alt="" />
                            </div>
                            <span className="detail-text">MOUTH</span>
                        </div>
                        <div className="image" onClick={() => {
                            if (FilterClick === 4) setFilterClick(0)
                            else setFilterClick(4)
                        }}>
                            {FilterClick === 4 ? <img src={HeaderImages.minus} alt="" />
                                : <img src={HeaderImages.plus} alt="" />}</div>
                    </div>
                    {FilterClick === 4 ?
                        <ul className="filter-sub-item" id="filter-sub-item">
                            {
                                Mouth.map(({ id, val }, index) => {
                                    return (
                                        <li key={index} className="subitem">
                                            <input type="checkbox" className="box" id={id} onClick={(e) => {
                                                e.target.checked ? dispatch(addmouFilter(Mouth[index].val))
                                                    : dispatch(removemouFilter(Mouth[index].val))
                                            }
                                            } />
                                            <label htmlFor={id} />
                                            <span>{val}</span>
                                        </li>
                                    )
                                })
                            }

                        </ul> : ''
                    }
                </li>
                <li>
                    <div className={FilterClick === 5 ? "borderbt filter-data-link" : 'filter-data-link'} onClick={() => {
                        if (FilterClick === 5) setFilterClick(0)
                        else setFilterClick(5)
                    }}>
                        <div className="detail" >
                            <div className="image">
                                <img src={HeaderImages.side5} alt="" />
                            </div>
                            <span className="detail-text">ACCESSORY</span>
                        </div>
                        <div className="image" onClick={() => {
                            if (FilterClick === 5) setFilterClick(0)
                            else setFilterClick(5)
                        }}>
                            {FilterClick === 5 ? <img src={HeaderImages.minus} alt="" />
                                : <img src={HeaderImages.plus} alt="" />}</div>
                    </div>

                    {FilterClick === 5 ?
                        <ul className="filter-sub-item" id="filter-sub-item">
                            {
                                Accesories.map(({ id, val }, index) => {
                                    return (
                                        <li key={index} className="subitem">
                                            <input type="checkbox" className="box" id={id} onClick={(e) => {
                                                e.target.checked ? dispatch(addaceFilter(Accesories[index].val))
                                                    : dispatch(removeaceFilter(Accesories[index].val))
                                            }
                                            } />                                            <label htmlFor={id} />
                                            <span>{val}</span>
                                        </li>
                                    )
                                })
                            }

                        </ul> : ''}
                </li>


                <li>
                    <div className={FilterClick === 6 ? "borderbt filter-data-link" : 'filter-data-link'} onClick={() => {
                        if (FilterClick === 6) setFilterClick(0)
                        else setFilterClick(6)
                    }}>

                        <div className="detail" >
                            <div className="image">
                                <img src={HeaderImages.side6} alt="" />
                            </div>
                            <span className="detail-text">OUTFIT</span>
                        </div>
                        <div className="image" onClick={() => {
                            if (FilterClick === 6) setFilterClick(0)
                            else setFilterClick(6)
                        }}>
                            {FilterClick === 6 ? <img src={HeaderImages.minus} alt="" />
                                : <img src={HeaderImages.plus} alt="" />}
                        </div>
                    </div>
                    {FilterClick === 6 ?
                        <ul className="filter-sub-item" id="filter-sub-item">
                            {
                                Outfit.map(({ id, val }, index) => {
                                    return (
                                        <li key={index} className="subitem">
                                            <input type="checkbox" className="box" id={id} onClick={(e) => {
                                                e.target.checked ? dispatch(addoutFilter(Outfit[index].val))
                                                    : dispatch(removeoutFilter(Outfit[index].val))
                                            }
                                            } />                                            <label htmlFor={id} />
                                            <span>{val}</span>
                                        </li>
                                    )
                                })
                            }

                        </ul> : ''
                    }
                </li>
            </ul>
        </div >
    )
}
export default Filter