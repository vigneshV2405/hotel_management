import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetHotelbyIdQuery } from '../../services/hotelApi';
import './hotel.css'

function Hotel() {
    const params = useParams();
    const { data , isLoading } = useGetHotelbyIdQuery(params._id)
    if(!isLoading){
        console.log(data)
    }
  return (
    <div>
        {
            !data &&
            <h1>Loading...</h1>
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