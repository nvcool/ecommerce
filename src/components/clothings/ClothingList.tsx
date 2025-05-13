import { ClothingHeader } from "../clothings/ClothingHeader";
import { ClothingItem } from "../clothings/ClothingItem";

export const ClothingList = () => {
  return (
    <table className="min-w-full border-spacing-8">
      <ClothingHeader />
      <ClothingItem />
    </table>
  );
};
