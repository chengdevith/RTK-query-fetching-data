'use client'

import { useGetCustomerQuery } from "@/redux/services/customer/customer"

export default function CustomerComponent() {

    const {data, isLoading} = useGetCustomerQuery()

    console.log(data)
    console.log(isLoading)

  return (
    <div>
      
    </div>
  )
}
