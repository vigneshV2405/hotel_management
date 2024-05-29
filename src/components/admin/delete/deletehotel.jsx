import React, { useState } from 'react';
import Back from '../../features/back/back';
import { useNavigate } from 'react-router-dom';
import './deletehotel.css'
import { useGetHotelnamesQuery } from '../../../services/hotelApi';
import Loader from '../../home/loader';

function Deletehotel() {
    const navigate = useNavigate();
    const { data , isLoading } = useGetHotelnamesQuery();
    const [ selectedHotel , setSelected ] = useState("");


    function back(){
        navigate('/admin/dashboard');
    }
    function handlechange(e){
      setSelected(e.target.value)
    }
  return (
    <div>
        <Back onClick={back} />
        {
          isLoading &&
          <Loader/>
        }
        <div className='radio-group mt-3' >
          {
            data &&
            data.hotelnames.map((name)=>{
              return (
                <>
                  <input
                   className="radio-input"
                   name="radio-group"
                   onChange={(e)=>{handlechange(e)}}
                   id={name.hotelname}
                   type="radio"
                   value={name.hotelname}
                  />
                  <label className="radio-label" for={name.hotelname}>
                    <span className="radio-inner-circle"></span>
                    {name.hotelname}
                  </label>
                </>
              )
            })
          }
        </div>
    </div>
  )
}

export default Deletehotel