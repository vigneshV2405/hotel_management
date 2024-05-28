import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditHotelMutation, useGetHotelbyIdQuery, useGetHotelnamesQuery, useLazyGetHotelbyIdQuery, useLazyGetHotelnamesQuery } from '../../services/hotelApi';
import Loader from '../home/loader';

function Edithotel() {
    const [ selectedHotelId , setSelected ] = useState(null);
    const { data , isLoading } = useGetHotelnamesQuery();
    const { data:hotelDetails , isLoading:loading2 } = useGetHotelbyIdQuery(selectedHotelId);
    const [ edithotel ] = useEditHotelMutation();
    const [ relo1 ] = useLazyGetHotelnamesQuery();
    const [ relo2 ] = useLazyGetHotelbyIdQuery();
    const [ current , setCurrent ] = useState()
    const [ errors , setErrors ] = useState(null)
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('isAdmin')){
            navigate('/admin/login')
        }
        relo1();
        relo2(selectedHotelId);
    })
    useEffect(()=>{
        setCurrent({...hotelDetails?.hotel})
    },[hotelDetails])

    function handleChange(e){
        setSelected(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        edithotel({edited:{...current},id:hotelDetails.hotel._id}).then(({data})=>{
            if(data.edited===true){
                navigate('/admin/dashboard')
            }
            if(data.edited==='same details'){
                alert('entered details are same. please modily any field and try again')
            }
        })
    }
    function handleFormChange(e,type){
        if(type==='hotelname'){
            setCurrent({...current,hotelname:e.target.value})
            if(e.target.value.length===0){
                setErrors({...errors,hotelname:'required'})
            }
            else{
                setErrors({...errors,hotelname:null})
            }
        }
        if(type==='image'){
            setCurrent({...current,image:e.target.value})
            if(e.target.value.length===0){
                setErrors({...errors,image:'required'})
            }
            else{
                setErrors({...errors,image:null})
            }
        }
        if(type==='contact'){
            setCurrent({...current,contact:e.target.value})
            const pattern = /^\d+$/;
            if(pattern.test(e.target.value)){
                if(e.target.value.length!==10){
                    setErrors({...errors,contact:'must be 10 characters'})
                }
                else{
                    setErrors({...errors,contact:null})
                }
            }
            else{
                setErrors({...errors,contact:'invalid contact'})
            }
        }
        if(type==='location'){
            setCurrent({...current,location:e.target.value})
            if(e.target.value.length===0){
                setErrors({...errors,location:'required'})
            }
            else{
                setErrors({...errors,location:null})
            }
        }
    }

  return (
    <div className='mt-4 ms-4' >
        {
            isLoading &&
            <Loader/>
        }
        {
            data &&
            <div>
                <select onChange={(event)=>{handleChange(event)}} >
                    <option disabled selected >select a hotel to edit </option>
                    {
                        data.hotelnames.map((hotel)=>{
                            return (
                                <option
                                    key={hotel._id}
                                    value={hotel._id}
                                >
                                    {hotel.hotelname}
                                </option>
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
            <div className='w-75 mt-5 ms-5' >
                <div className='h1 text-light text-center bg-secondary p-3 mb-0'>
                    Edit Hotel
                </div>
                <form 
                    className='bg-light p-3' 
                    onSubmit={(e)=>{handleSubmit(e)}}
                >
                    <label className='mb-1 mt-3'>Hotel name</label>
                    <input 
                        className='form-control'
                        placeholder='hotel name'
                        value={current?.hotelname}
                        onChange={(e)=>{handleFormChange(e,'hotelname')}}
                        name='hotelname'
                        type='text'
                    />
                    {
                        errors?.hotelname &&
                        <p className='text-danger mb-0'>{errors.hotelname}</p>
                    }
                    <label className='mb-1 mt-3'>image</label>
                    <input 
                        className='form-control'
                        placeholder='image url'
                        value={current?.image}
                        onChange={(e)=>{handleFormChange(e,'image')}}
                        name='image'
                        type='text'
                    />
                    {
                        errors?.image &&
                        <p className='text-danger mb-0'>{errors.image}</p>
                    }
                    <label className='mb-1 mt-3'>contact</label>
                    <input 
                        className='form-control'
                        placeholder='contact'
                        value={current?.contact}
                        onChange={(e)=>{handleFormChange(e,'contact')}}
                        name='contact'
                        type='number'
                    />
                    {
                        errors?.contact &&
                        <p className='text-danger mb-0'>{errors.contact}</p>
                    }
                    <label className='mb-1 mt-3'>location</label>
                    <input 
                        className='form-control'
                        placeholder='location'
                        value={current?.location}
                        onChange={(e)=>{handleFormChange(e,'location')}}
                        name='location'
                        type='text'
                    />
                    {
                        errors?.location &&
                        <p className='text-danger mb-0'>{errors.location}</p>
                    }
                    <button
                        className='btn btn-success p-0 mt-4'
                        type='submit'
                        disabled={!(!errors?.hotelname && !errors?.image && !errors?.contact && !errors?.location)}
                    >
                        make changes
                    </button>
                </form>
            </div>
        }
    </div>
  )
}

export default Edithotel