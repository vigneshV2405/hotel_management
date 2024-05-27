import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Edithotel() {
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('isAdmin')){
            navigate('/admin/login')
        }
    })
  return (
    <div>
        
    </div>
  )
}

export default Edithotel