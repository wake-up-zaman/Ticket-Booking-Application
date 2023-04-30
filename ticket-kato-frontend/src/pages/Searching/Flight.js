import React, { useEffect, useState } from 'react';
import './Search.css';
import { DatePicker } from 'antd';
import "antd/dist/antd.css";
import axios from 'axios';
import moment from 'moment';
import 'react-day-picker/dist/style.css';
import { useNavigate } from "react-router-dom";


const Flight = () => {
  const [districts, setDistricts] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([])
  const [districts2, setDistricts2] = useState([]);
  const [text2, setText2] = useState('');
  const [suggestions2, setSuggestions2] = useState([]);

  useEffect(() => {
    const loadDistricts = async () => {
      const response = await axios.get('https://bdapis.com/api/v1.1/districts');
      console.log(response.data.data);
      setDistricts(response.data.data)
    }
    loadDistricts();
  }, [])
  useEffect(() => {
    const loadDistricts2 = async () => {
      const response = await axios.get('https://bdapis.com/api/v1.1/districts');
      console.log(response);
      setDistricts2(response.data.data)
    }
    loadDistricts2();
  }, [])

  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = districts.filter(district => {
        console.log(district)
        const regex = new RegExp(`${text}`, 'gi');
        return district.district.match(regex)
      })
    }
    console.log('Matches: ', matches)
    setSuggestions(matches)
    setText(text);
  }

  const onSuggestionHandler = (text) => {
    setText(text)
    setSuggestions([])
  }
  const onChangeHandler2 = (text2) => {
    let matches2 = []
    if (text2.length > 0) {
      matches2 = districts2.filter(district2 => {
        console.log(district2)
        const regex = new RegExp(`${text2}`, 'gi');
        return district2.district.match(regex)
      })
    }
    console.log('Matches: ', matches2)
    setSuggestions2(matches2)
    setText2(text2);
  }

  const onSuggestionHandler2 = (text2) => {
    setText2(text2)
    setSuggestions2([])
  }

  const disabledDate = (select) => {
    return select && select < moment().add(-1, 'days').endOf('day');
  };

  const [selectedDate, setSelectedDate] = useState(new Date())
  const select = selectedDate?._d;
  console.log(select);
  const [selectedDate2, setSelectedDate2] = useState(new Date())
  const select2 = selectedDate2?._d;
  console.log(select2);

  const navigate = useNavigate();

const cities = ["Dhaka", "Rajshahi", "Khulna", "Rangpur","Cox's Bazar","Sylhet","Chattogram"];
const handleSearch = () => {
  if (cities.includes(text) && cities.includes(text2)) {
    navigate("/busList", { state: { text, text2, select, select2 } });
  } else {
    alert("Please enter a valid city name.");
  }
};

  return (
    <div>
      <h6 className="text-center mt-3 flight-info">
        Grab Upto 25% Off on Domestic Flights !
      </h6>
      <div className="searchInputContainer">
        <div className='searchInputField'>
          <label className='searchLabel'>From</label>
          <br></br>
          <input
            type="text"
            onChange={(e) => onChangeHandler(e.target.value)}
            value={text}
            className="searchInputForm"
            name="From"
            placeholder='        Departure Place'
            required
          />
        </div>
        <div>
          <label className='searchLabel'>To</label>
          <br></br>
          <input
            type="text"
            onChange={(e) => onChangeHandler2(e.target.value)}
            value={text2}
            className="searchInputForm"
            name="To"
            placeholder='          Arrival Place'
            required
          />
        </div>
        <div>
          <label className='searchLabel'>Travel Date</label>
          <br></br>
          <DatePicker
            className="searchInputForm"
            selected={selectedDate}
          
            onChange={(date) => setSelectedDate(date)}
            disabledDate={disabledDate}
            
          />
        </div>
        <div>
          <label className='searchLabel'>Return Date</label>
          <br></br>
          <DatePicker
             className="searchInputForm"
            selected={selectedDate2}
            onChange={(date) => setSelectedDate2(date)}
            disabledDate={disabledDate}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="search-button_all" onClick={handleSearch}>
          Search Flight
        </button>
      </div>

{/* Suggestion */}
      <div className="from-text">
        {suggestions &&
          suggestions.slice(0,10).map((suggestion, i) => (
            <div
              onClick={() => onSuggestionHandler(suggestion.district)}
              className="suggestion"
              key={i}
            >
              {suggestion.district}
            </div>
          ))}
      </div>
      <div className="from-text2">
        {suggestions2 &&
          suggestions2.slice(0,10).map((suggestion2, i) => (
            <div
              onClick={() => onSuggestionHandler2(suggestion2.district)}
              className="suggestion"
              key={i}
            >
              {suggestion2.district}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Flight;