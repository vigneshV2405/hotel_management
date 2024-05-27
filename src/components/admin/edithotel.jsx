import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetHotelbyIdQuery, useGetHotelnamesQuery } from '../../services/hotelApi';
import Loader from '../home/loader';

function Edithotel() {
    const [ selectedHotelId , setSelected ] = useState(null);
    const { data , isLoading } = useGetHotelnamesQuery();
    const { data:hotelDetails , isLoading:loading2 } = useGetHotelbyIdQuery(selectedHotelId);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('isAdmin')){
            navigate('/admin/login')
        }
    })
    function handleChange(e){
        setSelected(e.target.value)
    }

  return (
    <div>
        {
            isLoading &&
            <Loader/>
        }
        {
            data &&
            <div>
                <select onChange={(event)=>{handleChange(event)}} >
                    <option disabled selected={true} >select a hotel to edit </option>
                    {
                        data.hotelnames.map((hotel)=>{
                            return (
                                <option
                                    key={hotel._id}
                                    value={hotel._id}
                                >{hotel.hotelname}</option>
                            )
                        })
                    }
                </select>
            </div>
        }
        {
            loading2 &&
            <Loader/>
        }
        {
            hotelDetails &&
            <h1>{`lets edit ${hotelDetails.hotel.hotelname} details`}</h1>
        }
    </div>
  )
}

export default Edithotel