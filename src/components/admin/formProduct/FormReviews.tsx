import {
  Controller,
  useFieldArray,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputWithLabel } from "../../ui/input/InputWithLabel";
import { Button } from "../../ui/Button";
import { useEffect } from "react";
import {
  formSchemaReviews,
  type formSchemaReviewsType,
} from "../../../lib/schemas/schemaReviews";
import type { IReview } from "../../../types/IReview";
import { Select } from "../../ui/Select";
import type { ICustomer } from "../../../types/ICustomer";

interface IFormReviewsProps {
  onSubmit: SubmitHandler<formSchemaReviewsType>;
  review: IReview;
  users: ICustomer[];
  isSuccess?: boolean;
  isLoading?: boolean;
}

const raitingSelectOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

export const FormReviews = ({
  onSubmit,
  review,
  users,
  isLoading,
}: IFormReviewsProps) => {
  const { handleSubmit, control, reset } = useForm<formSchemaReviewsType>({
    resolver: zodResolver(formSchemaReviews),
  });

  useEffect(() => {
    if (review) {
      reset({
        text: review.text,
        raiting: Number(review.raiting),
        userId: review.user.id,
      });
    } else {
      reset();
    }
  }, [review]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full flex-col pl-12"
    >
      <div className="mb-12 flex flex-grow gap-[74px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Controller
              name="userId"
              control={control}
              render={({ field, fieldState }) => (
                <div className="relative w-full">
                  <span className="text-black-600 leading-[175%] font-medium">
                    User
                  </span>
                  <Select
                    value={field.value}
                    id="userId"
                    name="userId"
                    onValueChange={(value) => {
                      if (value) {
                        field.onChange(value);
                      }
                    }}
                    options={users.map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                    isError={!!fieldState.error}
                  />
                  {fieldState.error && (
                    <span className="absolute left-[10%] text-xs text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>

          <Controller
            name="text"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    id="text"
                    title="Review"
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
            name="raiting"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <span className="text-black-600 leading-[175%] font-medium">
                    Raiting
                  </span>
                  <Select
                    value={field.value?.toString()}
                    onValueChange={(value) => {
                      if (value) {
                        field.onChange(Number(value));
                      }
                    }}
                    options={raitingSelectOptions}
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
        {isLoading ? "Loading . . ." : "Save Review"}
      </Button>
    </form>
  );
};
