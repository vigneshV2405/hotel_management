import React from 'react';
import { useGetAllhotelsQuery } from '../../services/hotelApi';
import Hotelcard from '../hotel/hotelcard';
import Loader from './loader';
import './search.css'

function Home() {
  const { data , isLoading } = useGetAllhotelsQuery();
  return (
    <div>
      {
        isLoading &&
        <Loader/>
      }
      {
        !isLoading &&
        <>
          <div class="wrap-input-17"><div class="search-box">
            <button class="btn-search">🔍</button>
            <input type="text" class="input-search" placeholder="Type to Search..."/>
          </div>
          </div>
          <div className='d-flex flex-wrap justify-content-start'>
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