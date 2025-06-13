import {
  Controller,
  useFieldArray,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import type { IOrder } from "../../../types/IOrder";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formSchemaOrder,
  type formSchemaOrderType,
} from "../../../lib/schemas/shemasOrder";
import { useEffect } from "react";
import { Button } from "../../ui/Button";
import { InputWithLabel } from "../../ui/input/InputWithLabel";
import { Select } from "../../ui/Select";

import type { IProduct } from "../../../types/IProduct";

interface IFormOrderProps {
  onSubmit: SubmitHandler<formSchemaOrderType>;
  order: IOrder;
  products: IProduct[];
  isSuccess?: boolean;
  isLoading?: boolean;
}

const statusSelectOptions = [
  { value: "processing", label: "Processing" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
];

const sizesSelectOptions = [
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
  { value: "xxl", label: "XXL" },
];

export const FormOrder = ({
  order,
  onSubmit,
  isSuccess,
  isLoading,
  products,
}: IFormOrderProps) => {
  const { handleSubmit, reset, control } = useForm<formSchemaOrderType>({
    resolver: zodResolver(formSchemaOrder),
  });

  const {
    fields: productsFields,
    append: appendProductField,
    remove: removeProductField,
  } = useFieldArray({
    control,
    name: "products",
  });

  useEffect(() => {
    reset({
      date: order.date,
      total: order.total,
      status: order.status,
      products: order.products.map((item) => {
        return {
          productId: item.id,
          size: item.size.name,
          amount: item.quantity,
        };
      }),
    });
  }, [order]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full flex-col pl-12"
    >
      <div className="mb-12 flex flex-grow gap-[74px]">
        <div className="flex flex-col gap-4">
          <Controller
            name="date"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    title="Date"
                    id="date"
                    type="text"
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
            name="total"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    title="Total"
                    id="total"
                    type="number"
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
            name="status"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <Select
                    value={field.value}
                    name="status"
                    isError={!!fieldState.error}
                    onValueChange={(value) => {
                      if (value) {
                        field.onChange(value);
                      }
                    }}
                    options={statusSelectOptions}
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
          {productsFields.map((product, index) => (
            <div key={product.id} className="flex items-center gap-2">
              <Controller
                name={`products.${index}.productId`}
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <div className="relative">
                      <span className="text-black-600 leading-[175%] font-medium">
                        Product
                      </span>
                      <Select
                        value={field.value}
                        isError={!!fieldState.error}
                        id={product.id}
                        onValueChange={(value) => {
                          if (value) {
                            field.onChange(value);
                          }
                        }}
                        options={products.map((item) => ({
                          value: item.id,
                          label: item.title,
                        }))}
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
                name={`products.${index}.amount`}
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <div className="relative">
                      <InputWithLabel
                        {...field}
                        isError={!!fieldState.error}
                        title="Amount"
                        type="number"
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
                name={`products.${index}.size`}
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <div className="relative">
                      <span className="text-black-600 leading-[175%] font-medium">
                        Size
                      </span>
                      <Select
                        id={product.id}
                        value={field.value}
                        isError={!!fieldState.error}
                        onValueChange={(value) => {
                          if (value) {
                            field.onChange(value);
                          }
                        }}
                        options={sizesSelectOptions}
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
              <Button
                className="mt-auto"
                type="button"
                onClick={() => removeProductField(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() =>
              appendProductField({ productId: "", amount: 1, size: "s" })
            }
          >
            Add Product
          </Button>
        </div>
      </div>

      <Button disabled={isLoading} className="mb-10 w-fit">
        {isLoading ? "Loading . . ." : "SaveProduct"}
      </Button>
    </form>
  );
};
