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
import { CreateCustomerType } from "@/lib/customers";
import { useCreateCustomerMutation } from "@/redux/services/customer/customer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const createFormSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().min(1),
  gender: z.string().min(1),
  dob: z.coerce.number().int().gte(1886).lte(new Date().getFullYear()),
  phoneNumber: z.string().min(1),
  remark: z.string().min(1),
  segmentType: z.string().min(1),
  nationalCardId: z.string().min(1),
});

export default function CreateCustomerComponent() {
  const [createCustomer, { isLoading, data }] = useCreateCustomerMutation();

  useEffect(() => {
    if (data) {
      alert("Customer created successfully [!]");
      form.reset();
    }
  }, [data]);

  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema) as never,
    defaultValues: {
      fullName: "",
      email: "",
      gender: "",
      dob: new Date().getFullYear(),
      phoneNumber: "",
      remark: "",
      segmentType: "",
      nationalCardId: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createFormSchema>) {
    const newCustomer: CreateCustomerType = { ...values };
    createCustomer({ newCustomer });
  }

  return (
    <div className="w-[500px] border p-8 rounded-lg mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Email" />
                </FormControl>
              </FormItem>
            )}
          />

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

          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input {...field} type="number" placeholder="Year of Birth" />
                </FormControl>
              </FormItem>
            )}
          />

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

          <FormField
            control={form.control}
            name="segmentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Segment Type</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Segment Type" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationalCardId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>National Card ID</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="National Card ID" />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Customer"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
