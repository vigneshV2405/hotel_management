// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const hotelApi = createApi({
  reducerPath: 'hospApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/'}),
  endpoints: (builder) => ({
    getAllhotels:builder.query({
        query:()=>{
            return 'getallhotels'
        }
    }),
    getHotelbyId:builder.query({
        query: (id)=>{
            return `gethotel/${id}`
        }
    }),
    addHotel:builder.mutation({
        query: (body)=>{
            return {
                url:'addhotel',
                method:'post',
                body:body
            }
        }
    })
  }),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAllhotelsQuery,
    useGetHotelbyIdQuery,
    useLazyGetAllhotelsQuery,
    useAddHotelMutation
 } = hotelApi;
