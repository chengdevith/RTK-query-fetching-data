import { CarResponseType } from '@/lib/cars/CarResponse'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const carApi = createApi({
    reducerPath:"carApi",
    baseQuery: fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_BASE_URL_CAR_API}),
    endpoints: (builder) =>({
        // get cars by using get method
        getCars: builder.query<CarResponseType[],{page:number, limit:number}>({
        query: ({page,limit})=> `cars?skip=${page}&limit=${limit}`
        }),
        // get car by id 
        getCarById: builder.query<CarResponseType,string>({
            query: (id) => `cars/${id}`
        }),
        //create, delete, update
    })
})

export const {
    useGetCarsQuery,
    useGetCarByIdQuery
}=carApi