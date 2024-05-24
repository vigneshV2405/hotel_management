import React  from 'react';
import { useGetAllhotelsQuery } from '../services/hotelApi';

function Home() {
  const { data , isLoading } = useGetAllhotelsQuery();
  console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home