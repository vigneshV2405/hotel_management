import React, { useEffect } from 'react';

function Aboutus() {
    useEffect(()=>{
        document.title = 'Hotels - About us';
    },[])

  return (
    <div>
        <h1>About Us</h1>
    </div>
  )
}

export default Aboutus;