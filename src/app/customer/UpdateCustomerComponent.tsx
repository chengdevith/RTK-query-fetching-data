"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateCustomerMutation } from "@/redux/services/customer/customer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const updateFormSchema = z.object({
  fullName: z.string().min(1),
  gender: z.string().min(1),
  remark: z.string().min(1),
  phoneNumber: z.string().min(1)
});

export default function UpdateCustomerComponent() {
  const [updateCustomer, { isLoading, data }] = useUpdateCustomerMutation();

  useEffect(() => {
    if (data) {
      alert("Customer updated successfully [!]");
      form.reset();
    }
  }, [data]);

  const form = useForm<z.infer<typeof updateFormSchema>>({
    resolver: zodResolver(updateFormSchema) as never,
    defaultValues: {
      fullName: "",
      gender: "",
      remark: "",
      phoneNumber: ""
    },
  });

  async function onSubmit(values: z.infer<typeof updateFormSchema>) {
    const payload = {
    updateCustomer: {
      fullName: values.fullName,
      gender: values.gender,
      remark: values.remark,
      phoneNumber: values.phoneNumber,
    },
    phoneNumber: values.phoneNumber,
  };

  updateCustomer(payload);
  }

  return (
    <div className="w-[500px] border p-8 rounded-lg mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Full Name" />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Gender */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Gender" />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Phone Number" />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Remark */}
          <FormField
            control={form.control}
            name="remark"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remark</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Remark" />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Customer"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
