import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAddHotelMutation } from '../../services/hotelApi';
import { useNavigate } from 'react-router-dom';
import Back from '../features/back/back';

function Addhotel() {
    const [ addHotel ] = useAddHotelMutation();
    const navigate = useNavigate();
    useEffect(()=>{
      document.title = 'Hotels - Add hotel'
        if(!localStorage.getItem('isAdmin')){
            navigate('/admin/login')
        }
    },[])
    const formik = useFormik({
        initialValues: {
          hotelname: '',
          image: '',
          contact:0,
          location:''
        },
        validationSchema: Yup.object({
          hotelname: Yup.string().required('Required'),
          image: Yup.string().required('Required'),
          contact: Yup.string().min(10, 'mobile must be 10 characters').max(10,'mobile must be 10 characters').required('Required'),
          location: Yup.string().required('required')
        })
      });
      function handleSubmit(e){
        e.preventDefault();
        if(!formik.errors.hotelname && !formik.errors.image && !formik.errors.contact && !formik.errors.location && formik.values.hotelname!=='' && formik.values.image!=='' && formik.values.contact!==0 && formik.values.location!==''){
          addHotel(formik.values).then((res)=>{
            if(res.data.added){
                navigate('/admin/dashboard')
            }
          })
        }
      }
      function back(){
        navigate('/admin/dashboard')
      }

      return (
        <div className='w-75 text-dark mt-5 ms-5'>
          <Back onClick={back} />
          {
            ('hello') &&
            <div>
                <div style={{textAlign:'center'}} className='w-100 bg-secondary mb-4 p-3 text-white'>
                    <h1>Add Hotel</h1>
                </div>
              <form onSubmit={(event)=>{handleSubmit(event)}} className='bg-light bg-gradient p-4'>
                  <div>
                      <label htmlFor="hotelname" className='mb-2'>hotelname</label>
                      <input
                      id="hotelname"
                      name="hotelname"
                      type="text"
                      className='form-control'
                      placeholder='enter hotel name'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.hotelname}
                      />
                      {formik.touched.hotelname && formik.errors.hotelname ? (
                      <div className='text-danger'>{formik.errors.hotelname}</div>
                      ) : null}
                  </div>

                  <div className='mt-3'>
                      <label htmlFor="password" className='mb-2'>image</label>
                      <input
                      id="image"
                      name="image"
                      type="url"
                      className='form-control'
                      placeholder='enter image url'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.image}
                      />
                      {formik.touched.image && formik.errors.image ? (
                      <div className='text-danger'>{formik.errors.image}</div>
                      ) : null}
                  </div>

                  <div className='mt-3'>
                      <label htmlFor="password" className='mb-2'>contact no.</label>
                      <input
                      id="contact"
                      name="contact"
                      type="number"
                      className='form-control'
                      placeholder='enter contact no.'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.contact}
                      />
                      {formik.touched.contact && formik.errors.contact ? (
                      <div className='text-danger'>{formik.errors.contact}</div>
                      ) : null}
                  </div>

                  <div className='mt-3'>
                      <label htmlFor="password" className='mb-2'>location</label>
                      <input
                      id="location"
                      name="location"
                      type="text"
                      className='form-control'
                      placeholder='enter hotel location'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.location}
                      />
                      {formik.touched.location && formik.errors.location ? (
                      <div className='text-danger'>{formik.errors.location}</div>
                      ) : null}
                  </div>
              
                  <button
                    type="submit"
                    className='btn btn-success mt-5 p-0'
                    disabled={!(!formik.errors.hotelname && !formik.errors.image && !formik.errors.contact && !formik.errors.location && formik.values.hotelname!=='' && formik.values.image!=='' && formik.values.contact!==0 && formik.values.location!=='')}
                  >
                    Add hotel
                  </button>
              </form>
            </div>
          }
        </div>
      );
}

export default Addhotel