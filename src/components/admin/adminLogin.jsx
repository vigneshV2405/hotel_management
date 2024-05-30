import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser } from '../../store/userSlice';
import {Admin} from '../../constants/admin';
import { useNavigate } from 'react-router-dom';

function Adminlogin() {
  var { user } = useSelector((state)=>{return state.common})
  const localAdmin = localStorage.getItem('isAdmin')?'yes':null
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    document.title = 'Hotels - Login'
    if(localStorage.getItem('isAdmin')){
      navigate('/admin/dashboard')
    }
  },[])
    const formik = useFormik({
        initialValues: {
          email: '',
          pas: '',
        },
        validationSchema: Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          pas: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      function handleSubmit(e){
        e.preventDefault();
        if(!formik.errors.email && !formik.errors.pas){
          if(formik.values.email===Admin.username && +formik.values.pas===Admin.pas){
            dispatch(changeUser({isAdmin:true,user:{username:formik.values.email,pas:formik.values.pas}}))
            localStorage.setItem('isAdmin','true')
            navigate('/admin/dashboard')
          }
        }
      }

      return (
        <div>
          {
            (!user && !localAdmin) &&
            <div>
              <form onSubmit={(event)=>{handleSubmit(event)}} className='position-absolute top-50 start-50 translate-middle'>
                  <div>
                      <label htmlFor="email" className=''>Email Address</label>
                      <input
                      id="email"
                      name="email"
                      type="email"
                      className='form-control'
                      placeholder='enter email'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                      <div className='text-danger'>{formik.errors.email}</div>
                      ) : null}
                  </div>

                  <div className='mt-3'>
                      <label htmlFor="pas">Pas</label>
                      <input
                      id="pas"
                      name="pas"
                      type="text"
                      className='form-control'
                      placeholder='enter pass'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.pas}
                      />
                      {formik.touched.pas && formik.errors.pas ? (
                      <div className='text-danger'>{formik.errors.pas}</div>
                      ) : null}
                  </div>
              
                  <button type="submit" className='btn btn-success mt-2'>Login as admin</button>
              </form>
            </div>
          }
        </div>
      );
}

export default Adminlogin