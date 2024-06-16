import React, { useEffect } from 'react';
import { useGetAllhotelsQuery, useLazyGetAllhotelsQuery } from '../../services/hotelApi';
import Hotelcard from '../hotel/hotelcard';
import Loader from './loader';

function Home() {
  const { data , isLoading } = useGetAllhotelsQuery();
  const [ refreshHotels ] = useLazyGetAllhotelsQuery();
  useEffect(()=>{
    document.title = 'Hotels';
    refreshHotels()
  },[])
  return (
    <div>
      {
        isLoading &&
        <Loader/>
      }
      {
        !isLoading &&
        <>
          <div className='d-flex flex-wrap justify-content-between'>
            {
              data.data.map((hotel)=>{
                return (
                  <Hotelcard key={hotel._id} hotel={hotel} />
                )
              })
            }
          </div>
        </>
      }
    </div>
  )
}

export default Home