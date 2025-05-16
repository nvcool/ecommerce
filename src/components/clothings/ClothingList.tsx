import { ClothingHeader } from "../clothings/ClothingHeader";
import { ClothingItem } from "../clothings/ClothingItem";

export const ClothingList = () => {
  return (
    <table className="text-black-500 min-w-full border-spacing-8">
      <ClothingHeader />
      <ClothingItem />
    </table>
  );
};
