import { twMerge } from "tailwind-merge";
import { SvgMore } from "./svg/SvgMore";
import * as DropdownMenuRadix from "@radix-ui/react-dropdown-menu";
interface IDropdownMenuProps {
  handleDelete: () => void;
  buttonClassName?: string;
  className?: string;
}

export const DropdownMenu = ({
  handleDelete,
  buttonClassName,
  className,
}: IDropdownMenuProps) => (
  <DropdownMenuRadix.Root>
    <DropdownMenuRadix.Trigger
      className={twMerge("cursor-pointer outline-none", buttonClassName)}
    >
      <SvgMore />
    </DropdownMenuRadix.Trigger>

    <DropdownMenuRadix.Portal>
      <DropdownMenuRadix.Content
        className={twMerge(
          "bg-white-900 z-20 w-[128px] overflow-hidden",
          className,
        )}
      >
        <DropdownMenuRadix.Group className="border-white-200 grid gap-2 rounded-lg border p-1.5 py-4">
          <DropdownMenuRadix.Item className="hover:bg-white-100 cursor-pointer px-4 transition-colors ease-in outline-none">
            Edit
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Item
            onClick={handleDelete}
            className="hover:bg-white-100 cursor-pointer px-4 transition-colors ease-in outline-none"
          >
            Delete
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Item className="hover:bg-white-100 cursor-pointer px-4 transition-colors ease-in outline-none">
            Show
          </DropdownMenuRadix.Item>
        </DropdownMenuRadix.Group>
      </DropdownMenuRadix.Content>
    </DropdownMenuRadix.Portal>
  </DropdownMenuRadix.Root>
);
