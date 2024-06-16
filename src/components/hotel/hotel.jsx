import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetHotelbyIdQuery } from '../../services/hotelApi';
import './hotel.css'
import Loader from '../home/loader';

function Hotel() {
    const params = useParams();
    const { data , isLoading } = useGetHotelbyIdQuery(params._id);
    if(!isLoading){
        document.title = data.hotel.hotelname
    }
  return (
    <div>
        {
            !data &&
            <Loader/>
        }
        {
            data &&
            <div>
                <h1 className="hotel-name" >{data.hotel.hotelname}</h1>
            </div>
        }
    </div>
  )
}

export default Hotel