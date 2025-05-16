import * as Checkbox from "@radix-ui/react-checkbox";
import { SvgCheck } from "../svg/SvgCheck";
import { CheckboxLabel } from "./CheckboxLabel";
import { useState } from "react";

interface ICheckboxChecProps {
  children: React.ReactNode;
}

export const CheckboxCheck = ({ children }: ICheckboxChecProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const onChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <form>
      <div className="flex items-center gap-2.5">
        <Checkbox.Root
          checked={checked}
          onCheckedChange={onChange}
          className={`h-4.5 w-4.5 cursor-pointer rounded-[3px] ${checked ? "bg-black-600 text-white-900" : "border-black-100 border-2"}`}
          id="c1"
        >
          <Checkbox.Indicator className="flex justify-center">
            <SvgCheck className="h-4 w-4" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <CheckboxLabel children={children} />
      </div>
    </form>
  );
};
