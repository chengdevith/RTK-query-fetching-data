import { baseApi } from "@/redux/baseApi";
import { CustomerResponse,CreateCustomerType,UpdateCustomerType } from "@/lib/customers";
import { url } from "inspector";


export const customerApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getCustomer: builder.query<CustomerResponse[],void>({
            query: ()=> `/customers`
        }),
        createCustomer: builder.mutation<CustomerResponse,{newCustomer:CreateCustomerType}>({
            query: ({newCustomer})=> ({
                url: 'customers',
                method: 'POST',
                body: newCustomer
            })
        }),
        updateCustomer: builder.mutation<CustomerResponse,{updateCustomer:UpdateCustomerType,phoneNumber:string}>({
            query: ({updateCustomer,phoneNumber})=>({
                url: `customers/${phoneNumber}`,
                method: 'PATCH',
                body: updateCustomer
            })
        }),
        disableCustomer: builder.mutation<void,{phoneNumber:string}>({
            query: ({phoneNumber})=>({
                url: `customers/${phoneNumber}}`,
                method: 'PUT'
            })
        })
    })
})

export const{
    useGetCustomerQuery,
    useCreateCustomerMutation,
    useDisableCustomerMutation,
    useUpdateCustomerMutation
}=customerApi