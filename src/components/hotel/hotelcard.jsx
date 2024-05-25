import React from 'react'
import { Link } from 'react-router-dom';
import './hotelcard.css'

function Hotelcard({hotel}) {
    
  return (
    <div className='hotel-card'>
        <div className="" style={{width: "18rem"}}>
            <img src={hotel.image} className="card-img-top" alt={hotel.hotelname}/>
            <div className="card-body">
                <h5 className="card-title">{hotel.hotelname}</h5>
                <p className="card-text">{hotel.contact}</p>
                <Link to={`/hotel/${hotel._id}`} className="btn btn-danger">know more..</Link>
            </div>
        </div>
    </div>
  )
}

export default Hotelcard