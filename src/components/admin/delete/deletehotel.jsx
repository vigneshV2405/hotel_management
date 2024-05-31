import React, { useEffect, useRef, useState } from 'react';
import Back from '../../features/back/back';
import { useNavigate } from 'react-router-dom';
import './deletehotel.css'
import { useDeleteHotelMutation, useGetHotelnamesQuery, useLazyGetHotelnamesQuery } from '../../../services/hotelApi';
import Loader from '../../home/loader';
import Deletebtn from './deletebtn/deletebtn';

function Deletehotel() {
    const navigate = useNavigate();
    const { data , isLoading } = useGetHotelnamesQuery();
    const [ refetchNames ] = useLazyGetHotelnamesQuery();
    const [ selectedHotel , setSelected ] = useState(null);
    const [ deleteHotel ] = useDeleteHotelMutation();
    const inpref = useRef();

    useEffect(()=>{
      document.title = 'Hotels - Delete Hotel';
      refetchNames();
    },[])
    function back(){
      navigate('/admin/dashboard');
    }
    function handlechange(e){
      setSelected(e.target.value)
    }
    function handleDelete(){
      deleteHotel({selectedHotel}).then(({data})=>{
        if(data.deleted){
          refetchNames()
          inpref.current.click();
        }
        if(data.error){
          console.log('could not delete the item!!!')
        }
      })
    }
    function resetSelected(){
      setSelected(null)
    }

  return (
    <div>
        <Back onClick={back} />
        {
          isLoading &&
          <Loader/>
        }
        <div className='radio-group mt-3 w-75' >
          <form>
            {
              data &&
              data.hotelnames.map((name)=>{
                return (
                  <>
                    <input
                    className="radio-input"
                    name="radio-group"
                    onClick={(e)=>{handlechange(e)}}
                    id={name.hotelname}
                    type="radio"
                    value={name._id}
                    key={name._id}
                    />
                    <label className="radio-label" for={name.hotelname}>
                      <span className="radio-inner-circle"></span>
                      {name.hotelname}
                    </label>
                  </>
                )
              })
            }
            <input
              type='reset'
              alt='clear selection'
              className='btn btn-warning mt-4'
              onClick={resetSelected}
              ref={inpref}
            />
          </form>
          {
            !isLoading &&
            !selectedHotel &&
            <button className='btn btn-danger disabled w-25 mt-2' >Delete</button>
          }
          {
            !isLoading &&
            selectedHotel &&
            <Deletebtn onclick={handleDelete} />
          }
        </div>
    </div>
  )
}

export default Deletehotel