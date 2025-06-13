import { useMutation } from "@tanstack/react-query";
import type { IReview } from "../../../types/IReview";
import { DropdownMenu } from "../../ui/DropdownMenu";
import { SvgSort } from "../../ui/svg/SvgSort";
import { UserAvatar } from "../../UserAvatar";
import { reviewsApi } from "../../../lib/queriesReviews";
import { queryClient } from "../../../App";

interface IReviewsTableProps {
  reviews?: IReview[];
}

export const ReviewsTable = ({ reviews }: IReviewsTableProps) => {
  const { mutate: deleteMutate } = useMutation({
    mutationFn: reviewsApi.deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });

  const handleDelete = (id: string) => {
    deleteMutate(id);
  };

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
              <DropdownMenu
                buttonClassName="p-4"
                editLink={`/reviews/edit-reviews/${review.id}`}
                handleDelete={() => handleDelete(review.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
