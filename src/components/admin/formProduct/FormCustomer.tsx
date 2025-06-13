import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import type { ICustomer } from "../../../types/ICustomer";
import {
  formSchemaCustomers,
  type formCustomersSchemaType,
} from "../../../lib/schemas/shemasCustomer";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputWithLabel } from "../../ui/input/InputWithLabel";
import { Button } from "../../ui/Button";
import { useEffect } from "react";

interface IFormCustomerProps {
  onSubmit: SubmitHandler<formCustomersSchemaType>;
  customer?: ICustomer;
  isSuccess?: boolean;
  isLoading?: boolean;
}

export const FormCustomer = ({
  onSubmit,
  customer,
  isSuccess,
  isLoading,
}: IFormCustomerProps) => {
  const { handleSubmit, control, reset } = useForm<formCustomersSchemaType>({
    resolver: zodResolver(formSchemaCustomers),
  });

  useEffect(() => {
    if (customer) {
      reset({
        name: customer.name,
        email: customer.email,
        address: customer.address,
        image: customer.image,
      });
    } else {
      reset();
    }
  }, [customer]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full flex-col pl-12"
    >
      <div className="mb-12 flex flex-grow gap-[74px]">
        <div className="flex flex-col gap-4">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    id="name"
                    title="Name"
                  />
                  {fieldState.error && (
                    <span className="absolute left-[10%] text-xs text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              );
            }}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    id="email"
                    title="Email"
                  />
                  {fieldState.error && (
                    <span className="absolute left-[10%] text-xs text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              );
            }}
          />
          <Controller
            name="address"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    id="address"
                    title="Address"
                  />
                  {fieldState.error && (
                    <span className="absolute left-[10%] text-xs text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              );
            }}
          />
          <Controller
            name="image"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    id="image"
                    title="Image"
                  />
                  {fieldState.error && (
                    <span className="absolute left-[10%] text-xs text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              );
            }}
          />
        </div>
      </div>

      <Button disabled={isLoading} className="mb-10 w-fit">
        {isLoading ? "Loading . . ." : "SaveProduct"}
      </Button>
    </form>
  );
};
