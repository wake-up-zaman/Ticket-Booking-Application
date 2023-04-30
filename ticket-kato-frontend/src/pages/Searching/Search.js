import React, { useEffect, useState } from 'react';
import { BiBus } from "react-icons/bi";
import { IoMdTrain } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { RiShipLine } from "react-icons/ri";
import { GiCommercialAirplane } from "react-icons/gi";
import './Search.css';

import { NavLink, Outlet } from "react-router-dom";


const Search = () => {
    return (
        <div className='searchContainer flex justify-center'>
            <div className='searchMain'>
                <div className=''>
                    <p className='searchTitle'>Find Your Tickets</p>
                </div>
                <div className='flex justify-center text-center '>
                            <div className='flex justify-evenly sm:flex sm:justify-evenly search-icon-container'>
                                <div className='text-center'>
                                    <NavLink className='search-bar' to='/'>
                                        <div className=''>
                                            <BiBus className='search-icon' />
                                            <p className='icon-name'>Buses</p>
                                        </div>

                                    </NavLink>
                                </div>
                                <div className='text-center'>
                                    <NavLink className='search-bar' to='/flight'>
                                        <GiCommercialAirplane className='search-icon' />
                                        <p className='icon-name'>Flights</p>
                                    </NavLink>
                                </div>

                                <div className='text-center'>
                                    <NavLink className='search-bar' to='/train'>
                                        <IoMdTrain className='search-icon' />
                                        <p className='icon-name'>Trains</p>
                                    </NavLink>
                                </div>
                                <div className='text-center'>
                                    <NavLink className='search-bar' to='/launch'>
                                        <RiShipLine className='search-icon search-icon-launch' />
                                        <p className='icon-name'>Launches</p>
                                    </NavLink>
                                </div>
                          
                        

                    </div>
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default Search;