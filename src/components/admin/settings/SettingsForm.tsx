import { Controller, useForm } from "react-hook-form";
import { InputWithLabel } from "../../ui/input/InputWithLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  settingSchema,
  type FormSettingsSchemaType,
} from "../../../lib/schemas/settingsSchema";
import { Button } from "../../ui/Button";

export const SettingsForm = () => {
  const { control } = useForm<FormSettingsSchemaType>({
    resolver: zodResolver(settingSchema),
  });

  const onSubmit = () => {};

  return (
    <form className="mb-20 pl-12">
      <Controller
        name="siteName"
        control={control}
        render={({ field, fieldState }) => (
          <div className="relative">
            <InputWithLabel
              {...field}
              isError={!!fieldState.error}
              title="Site Name"
              id="siteName"
              type="text"
            />
            {fieldState.error && (
              <span className="absolute left-[10%] text-xs text-red-500">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
      <Controller
        name="supportEmail"
        control={control}
        render={({ field, fieldState }) => (
          <div className="relative">
            <InputWithLabel
              {...field}
              isError={!!fieldState.error}
              title="Support Email"
              id="supportEmail"
              type="email"
            />
            {fieldState.error && (
              <span className="absolute left-[10%] text-xs text-red-500">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
      <Controller
        name="monthlyOrderGoal"
        control={control}
        render={({ field, fieldState }) => (
          <div className="relative mb-[74px]">
            <InputWithLabel
              {...field}
              isError={!!fieldState.error}
              title="Monthly Order Goal"
              id="monthlyOrderGoal"
              type="text"
            />
            {fieldState.error && (
              <span className="absolute left-[10%] text-xs text-red-500">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
      <Button>Save Changes</Button>
    </form>
  );
};
