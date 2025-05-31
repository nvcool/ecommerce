import type { IReview } from "../../../types/IReview";
import { SvgMore } from "../../ui/svg/SvgMore";
import { SvgSort } from "../../ui/svg/SvgSort";
import { UserAvatar } from "../../UserAvatar";

interface IReviewsTableProps {
  reviews?: IReview[];
}

export const ReviewsTable = ({ reviews }: IReviewsTableProps) => {
  return (
    <table className="text-black-500 min-w-full table-fixed border-spacing-8">
      <thead className="">
        <tr className="border-white-100 mb-8 ml-[67px] items-center border-y text-left">
          <th className="py-2.5 pl-[67px]">
            <SvgSort />
          </th>
          <th className="font-medium">Name</th>
          <th className="font-medium">Review</th>
          <th className="font-medium">Action</th>
        </tr>
      </thead>

      <tbody className="font-medium">
        {reviews?.map((review) => (
          <tr
            className="border-white-100 items-center border-b font-medium"
            key={review.id}
          >
            <td className="w-[12%] py-4 pl-12">
              <UserAvatar
                imageUrl={review.user.image}
                name={review.user.name}
              />
            </td>

            <td className="w-[15%]">{review.user.name}</td>
            <td className="w-[65%] max-w-[550px] truncate overflow-hidden pr-20 text-ellipsis whitespace-nowrap">
              {review.text}
            </td>

            <td>
              <button className="cursor-pointer pl-3">
                <SvgMore />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
