import { CarCreateType, CarResponseType, CarUpdateType } from '@/lib/cars/CarResponse'
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
        //create car
        createCar: builder.mutation<CarResponseType, {newCar:CarCreateType, accessToken:string}>({
            query:({newCar,accessToken})=>({
                url: 'cars',
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${accessToken}`
                },
                body: newCar
            })
        }),
        //update car
        updateCar: builder.mutation<CarResponseType, {updateCar:CarUpdateType,accessToken:string,id:string}>({
            query:({updateCar,accessToken,id})=>({
                url:`cars/${id}`,
                method:'PUT',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${accessToken}`
                },
                body:updateCar
            })
        }),
        //dtl car
        deleteCar: builder.mutation<CarResponseType, {accessToken:string,id:string}>({
            query:({accessToken,id})=>({
                url:`car/${id}`,
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${accessToken}`
                },
            })
        })
    })
})

export const {
    useGetCarsQuery,
    useGetCarByIdQuery,
    useCreateCarMutation,
    useUpdateCarMutation,
    useDeleteCarMutation
}=carApi