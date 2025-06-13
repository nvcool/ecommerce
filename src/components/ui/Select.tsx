import * as SelectRadix from "@radix-ui/react-select";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { SvgCheck } from "./svg/SvgCheck";

interface ISelectProps extends SelectRadix.SelectProps {
  options: { value: string; label: string }[];
  isError?: boolean;
  className?: string;
  id?: string;
}

export const Select = forwardRef<HTMLButtonElement, ISelectProps>(
  ({ options, className, id, isError, ...props }, ref) => {
    return (
      <SelectRadix.Root {...props}>
        <SelectRadix.Trigger
          ref={ref}
          className={twMerge(
            `placeholder:text-black-300 flex w-full max-w-[290px] justify-between rounded-md border px-[15px] py-2.5 transition-colors ease-in outline-none ${isError ? "border-red-900 text-red-900 hover:border-red-200 focus:border-red-200 active:border-red-200" : "border-black-100 text-black-900 hover:border-black-200 active:border-black-200 focus:border-black-200"}`,
            className,
          )}
        >
          <SelectRadix.Value />
          <SelectRadix.Icon />
        </SelectRadix.Trigger>

        <SelectRadix.Portal>
          <SelectRadix.Content
            className="border-black-100 text-black-900 hover:border-black-200 active:border-black-200 focus:border-black-200 w-[var(--radix-select-trigger-width)] rounded-lg border bg-white p-2"
            side="bottom"
            position="popper"
          >
            <SelectRadix.ScrollUpButton className="flex h-6 cursor-default items-center justify-center">
              !!
            </SelectRadix.ScrollUpButton>
            <SelectRadix.Viewport>
              {options.map((option) => (
                <SelectRadix.Item
                  className="cursor-pointer py-2 outline-none"
                  key={`${id}_${option.value}`}
                  value={option.value}
                >
                  <SelectRadix.ItemText>{option.label}</SelectRadix.ItemText>
                  <SelectRadix.ItemIndicator className="absolute right-0 inline-flex w-6 items-center justify-center">
                    <SvgCheck className="h-4 w-4" />
                  </SelectRadix.ItemIndicator>
                </SelectRadix.Item>
              ))}
            </SelectRadix.Viewport>
            <SelectRadix.ScrollDownButton />
            <SelectRadix.Arrow />
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    );
  },
);
