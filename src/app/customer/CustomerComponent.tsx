'use client'

import { useGetCustomerQuery } from "@/redux/services/customer/customer"

export default function CustomerComponent() {
  const { data, isLoading, error } = useGetCustomerQuery()

  if (isLoading) return <div className="p-4 text-gray-600">Loading...</div>
  if (error) return <div className="p-4 text-red-500">Failed to load customers</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data?.map((customer: any, index: number) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">{customer.fullName}</h2>
          <p className="text-gray-600 mb-1">Email: {customer.email}</p>
          <p className="text-gray-600">Gender: {customer.gender}</p>
        </div>
      ))}
    </div>
  )
}
