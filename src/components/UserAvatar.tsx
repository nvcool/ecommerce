import * as Avatar from "@radix-ui/react-avatar";
import clsx from "clsx";

interface UserAvatarProps {
  name: string;
  imageUrl?: string;
}

export const UserAvatar = ({ name, imageUrl }: UserAvatarProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Avatar.Root
      className={"flex h-12 w-12 items-center justify-center rounded-sm"}
    >
      <Avatar.Image
        src={imageUrl}
        alt={name}
        className="h-full w-full rounded-full object-cover"
      />
      <Avatar.Fallback
        delayMs={200}
        className="text-primary-900 bg-white-100 flex h-full w-full items-center justify-center rounded-sm text-sm font-medium uppercase"
      >
        {initials}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};
