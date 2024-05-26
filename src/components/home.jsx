import React from 'react';
import { useGetAllhotelsQuery } from '../services/hotelApi';
import Hotelcard from './hotel/hotelcard';

function Home() {
  const { data , isLoading } = useGetAllhotelsQuery();
  console.log(data)
  return (
    <div>
      {
        isLoading &&
          <h2>Loading...</h2>
      }
      {
        !isLoading &&
          <div className='d-flex flex-wrap'>
            {
              data.data.map((hotel)=>{
                return (
                  <Hotelcard key={hotel._id} hotel={hotel} />
                )
              })
            }
          </div>
      }
    </div>
  )
}

export default Home