import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
// import BusItem from './BusItem';
import './BusList.css'
import './BusItem.css';
import RefineSearch from './RefineSearch';
import SearchBanner from './SearchBanner';
import BusItem from './BusItem';
const BusList = () => {
    const location = useLocation();
    console.log(location)
    const [departure, setDeparture] = useState(location.state.text);
    const [arrival, setArrival] = useState(location.state.text2);
    const [travelDate, setTravelDate] = useState(location.state.select);
    const [returnDate, setReturnDate] = useState(location.state.select2);
    const [operator, setOperator] = useState('');

    const { data, loading, error, refetch } = useFetch(`https://ticket-kato.onrender.com/buses?departure_city=${departure}&arrival_city=${arrival}`)
    console.log(data);

    const handleOperator = () => {
        data.slice(0, 1).map(item => (
            setOperator(item.operator_names[0])
        ))
    }
    console.log(operator);
    const [bus, setBus] = useState([]);
    useEffect(() => {
        fetch(`https://ticket-kato.onrender.com/buses?departure_city=${departure}&arrival_city=${arrival}`)
            .then(response => response.json())
            .then(data => setBus(data))
    }, [])
    const handleChange = (datas) => {
        const result = data.filter(word => {
            return word.bus_class === datas
        }
        );
        setBus(result)
    }
    const handleChangebyOparator = (datas) => {
        const result = data.filter(word => {
            return word.operator_name === datas
        }
        );
        setBus(result)
    }
    return (
        <div className='BusListContainer'>
            <SearchBanner></SearchBanner>
            <p className='text-center fs-4 busRoute'>Search Result For: {departure}-{arrival} </p>
            <div className='d-flex justify-content-center'>
            </div>
            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <p className='text-center refine'>Refine Search</p>
                        <p className='filterTitle'>Operators</p>
                        <p className='filterLine'><span></span></p>
                        {loading ? "loading" : <>
                            {data.slice(0, 1).map(item => (
                                <div className='IsItem'>
                                    <div>
                                        <div className='filterProperty'>
                                            <p value={item.operator_names[0]} onClick={() => handleChangebyOparator(item.operator_names[0])}>{item.operator_names[0]}</p>
                                            <p value={item.operator_names[1]} onClick={() => handleChangebyOparator(item.operator_names[1])}>{item.operator_names[1]}</p>
                                            <p value={item.operator_names[2]} onClick={() => handleChangebyOparator(item.operator_names[2])}>{item.operator_names[2]}</p>
                                            <p value={item.operator_names[3]} onClick={() => handleChangebyOparator(item.operator_names[3])}>{item.operator_names[3]}</p>
                                            <p value={item.operator_names[4]} onClick={() => handleChangebyOparator(item.operator_names[4])}>{item.operator_names[4]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>}
                        <p className='filterTitle'>Bus Class</p>
                        <p className='filterLine'><span></span></p>
                        {loading ? "loading" : <>
                            {data.slice(0, 1).map(item => (
                                <div className='IsItem'>
                                    <div>
                                        <div className='filterProperty'>
                                            <p value={item.bus_classes[0]} onClick={() => handleChange(item.bus_classes[0])}>{item.bus_classes[0]}</p>
                                            <p value={item.bus_classes[1]} onClick={() => handleChange(item.bus_classes[1])}>{item.bus_classes[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>}
                    </div>
                    <div className='listResult'>
                        <div className='d-flex justify-content-between'>
                            <p className='text-center travelDate'>Travel Date:{`${format(travelDate, "dd/MM/yyyy")}`}</p>
                            <p className='text-center returnDate'>Return Date:{`${format(returnDate, "dd/MM/yyyy")}`}</p>
                        </div>
                        {loading ? <div class="loading-skeleton">
                            <div class="loading-skeleton__item"></div>
                            <div class="loading-skeleton__item"></div>
                            <div class="loading-skeleton__item"></div>
                        </div> : <>
                            {bus.map(item => (
                                <BusItem
                                    item={item}
                                    key={item._id}
                                    travelDate={travelDate}
                                    returnDate={returnDate}
                                />
                            ))}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusList;