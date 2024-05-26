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
    if(localStorage.getItem('isAdmin')){
      navigate('/admin/dashboard')
    }
  })
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      function handleSubmit(e){
        e.preventDefault();
        if(!formik.errors.email && !formik.errors.password){
          if(formik.values.email===Admin.username && +formik.values.password===Admin.password){
            dispatch(changeUser({isAdmin:true,user:{username:formik.values.email,password:formik.values.password}}))
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
                      <label htmlFor="password">Password</label>
                      <input
                      id="password"
                      name="password"
                      type="password"
                      className='form-control'
                      placeholder='enter password'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      />
                      {formik.touched.password && formik.errors.password ? (
                      <div className='text-danger'>{formik.errors.password}</div>
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