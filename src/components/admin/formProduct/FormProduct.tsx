import {
  Controller,
  useFieldArray,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import { Button } from "../../ui/Button";
import { InputWithLabel } from "../../ui/input/InputWithLabel";
import { TextareaWithLabel } from "../../ui/textarea/TextareaWithLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formSchemaProduct,
  type formSchemaProductType,
} from "../../../lib/schemas/schemasProduct";
import { useEffect } from "react";
import type { IProduct } from "../../../types/IProduct";

interface IFormProductProps {
  onSubmit: SubmitHandler<formSchemaProductType>;
  product?: IProduct;
  isSuccess?: boolean;
  isLoading?: boolean;
}

export const FormProduct = ({
  onSubmit,
  isSuccess,
  isLoading,
  product,
}: IFormProductProps) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<formSchemaProductType>({
    resolver: zodResolver(formSchemaProduct),
  });

  const {
    fields: sizes,
    append: appendSizes,
    remove: removeSizes,
  } = useFieldArray({
    control,
    name: "sizes",
  });

  const {
    fields: colors,
    append: appendColors,
    remove: removeColors,
  } = useFieldArray({
    control,
    name: "colors",
  });

  const {
    fields: images,
    append: appendImages,
    remove: removeImages,
  } = useFieldArray({
    control,
    name: "images",
  });

  // Этот useEffect срабатывает, когда форма была успешно отправлена
  useEffect(() => {
    if (isSuccess && !product) {
      // Если отправка была успешной, сбрасываем форму
      reset({
        title: "",
        price: 0,
        category: "",
        sku: 0,
        description: "",
        stock: "",
        images: [],
        colors: [],
        sizes: [],
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (product) {
      reset({
        title: product.title,
        price: product.price,
        category: product.category,
        sku: product.sku,
        description: product.description,
        stock: product.stock,
        images: product.images.map((image) => ({ name: image })),
        colors: product.colors,
        sizes: product.sizes,
      });
    } else {
      reset();
    }
  }, [product]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full flex-col pl-12"
    >
      <div className="mb-12 flex flex-grow gap-[74px]">
        <div className="flex flex-col gap-4">
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    title="Title"
                    id="title"
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
            name="price"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    title="Price"
                    id="price"
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
            name="category"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    id="category"
                    type="text"
                    title="Category"
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
            name="sku"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    id="sku"
                    type="number"
                    title="Sku"
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
            name="description"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <TextareaWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    id="description"
                    title="Description"
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
        <div className="flex flex-grow flex-col gap-4">
          <Controller
            name="stock"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <div className="relative">
                  <InputWithLabel
                    {...field}
                    isError={!!fieldState.error}
                    id="stock"
                    type="text"
                    title="Stock status"
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

          {images.map((image, index) => (
            <div key={image.id} className="flex gap-2">
              <Controller
                name={`images.${index}.name`}
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <div className="relative">
                      <InputWithLabel
                        {...field}
                        isError={!!fieldState.error}
                        type="text"
                        title="Images"
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
                type="button"
                className="mt-auto block h-fit"
                onClick={() => removeImages(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            className="w-fit"
            onClick={() => appendImages({ name: "" })}
          >
            Add Image
          </Button>
          {errors.images && (
            <span className="text-xs text-red-500">
              {errors.images.message}
            </span>
          )}

          {colors.map((color, index) => (
            <div key={color.id} className="flex gap-2">
              <Controller
                name={`colors.${index}.name`}
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <div className="relative">
                      <InputWithLabel
                        {...field}
                        isError={!!fieldState.error}
                        type="text"
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
                name={`colors.${index}.hex`}
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <div className="relative">
                      <InputWithLabel
                        {...field}
                        isError={!!fieldState.error}
                        type="text"
                        title="#Hex"
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
                type="button"
                className="mt-auto block h-fit"
                onClick={() => removeColors(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            className="w-fit"
            onClick={() => appendColors({ name: "", hex: "" })}
          >
            Add Color
          </Button>
          {errors.colors && (
            <span className="text-xs text-red-500">
              {errors.colors.message}
            </span>
          )}

          {sizes.map((size, index) => (
            <div key={size.id} className="flex gap-2">
              <Controller
                name={`sizes.${index}.name`}
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <div className="relative">
                      <InputWithLabel
                        {...field}
                        isError={!!fieldState.error}
                        type="text"
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
                name={`sizes.${index}.amount`}
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <div className="relative">
                      <InputWithLabel
                        {...field}
                        isError={!!fieldState.error}
                        type="number"
                        title="Amount"
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
                className="mt-auto block h-fit"
                type="button"
                onClick={() => removeSizes(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            className="w-fit"
            type="button"
            onClick={() => appendSizes({ name: "", amount: 1 })}
          >
            Add size
          </Button>
          {errors.sizes && (
            <span className="text-xs text-red-500">{errors.sizes.message}</span>
          )}
        </div>
      </div>

      <Button disabled={isLoading} className="mb-10 w-fit">
        {isLoading ? "Loading . . ." : "SaveProduct"}
      </Button>
    </form>
  );
};
