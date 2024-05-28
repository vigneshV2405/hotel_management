// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { back_url } from '../constants/links'

// Define a service using a base URL and expected endpoints
export const hotelApi = createApi({
  reducerPath: 'hospApi',
  baseQuery: fetchBaseQuery({ baseUrl: back_url}),
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
    }),
    getHotelnames: builder.query({
        query:()=>'gethotelnames'
    }),
    editHotel: builder.mutation({
        query:(body)=>{
            return {
                url:`edithotel/${body.id}`,
                method:'put',
                body:{
                    hotelname:body.edited.hotelname,
                    image:body.edited.image,
                    contact:body.edited.contact,
                    location:body.edited.location
                }
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
    useAddHotelMutation,
    useGetHotelnamesQuery,
    useEditHotelMutation,
    useLazyGetHotelnamesQuery,
    useLazyGetHotelbyIdQuery
 } = hotelApi;