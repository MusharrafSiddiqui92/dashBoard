import React from 'react'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { HiUsers } from "react-icons/hi2";
import { HiMiniBellAlert } from "react-icons/hi2";

const Cards = () => {
    return (
        <div className="container  mt-4 d-flex justify-content-end">
            <div className="row w-75 ">
                <div className="col"><div className="card text-bg-primary mb-3" style={{ maxWidth: "18rem", height: "10rem" }}>
                    {/* <div className="card-header">Header</div> */}
                    <div className="card-body">
                        <h5 className="card-title text-start">PRODUCTS <span className='ps-2'><MdOutlineProductionQuantityLimits /></span></h5>
                        <p className="card-text text-start pt-5 fs-4">
                            245
                        </p>
                    </div>
                </div>
                </div>

                <div className="col"><div className="col"><div className="card text-bg-danger mb-3" style={{ maxWidth: "18rem", height: "10rem" }}>
                    {/* <div className="card-header">Header</div> */}
                    <div className="card-body">
                        <h5 className="card-title text-start">CATEGORIES <span className='ps-2'><TbCategory2 /></span></h5>
                        <p className="card-text text-start pt-5 fs-4">
                            35
                        </p>
                    </div>
                </div>
                </div>
                </div>
                <div className="col">
                    <div className="card text-bg-success mb-3" style={{ maxWidth: "18rem", height: "10rem" }}>
                        {/* <div className="card-header">Header</div> */}
                        <div className="card-body">
                            <h5 className="card-title text-start">CUSTOMERS <span className='ps-2'><HiUsers /></span></h5>
                            <p className="card-text text-start pt-5 fs-4">
                                1500
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card text-bg-warning mb-3" style={{ maxWidth: "18rem", height: "10rem" }}>
                        {/* <div className="card-header">Header</div> */}
                        <div className="card-body">
                            <h5 className="card-title text-start">ALERTS <span className='ps-4'><HiMiniBellAlert />
                            </span></h5>
                            <p className="card-text text-start pt-5 fs-4">
                                56
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cards
