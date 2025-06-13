import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../lib/queriesProducts";
import type { IPaginationResponse } from "../../../types/IPaginationResponse";
import { Input } from "../../ui/input/Input";
import { Pagination } from "../../ui/Pagination";
import { SvgSearch } from "../../ui/svg/SvgSearch";
import { ReviewsTable } from "./ReviewsTable";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { setPage } from "./reviewsSlice";
import type { IReview } from "../../../types/IReview";

const getAllReviews = async (page: number, limit: number) => {
  const res = await fetch(
    `${API_URL}/reviews?_page=${page}&_per_page=${limit}`,
  );
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  } else {
    return (await res.json()) as IPaginationResponse<IReview>;
  }
};

export const ReviewsContent = () => {
  const pagination = useSelector((state: RootState) => state.reviewsPage);
  const dispatch = useDispatch();

  const {
    data: reviews,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reviews", pagination.page, pagination.limit],
    queryFn: () => getAllReviews(pagination.page, pagination.limit),
  });

  if (isLoading) return <h1 className="text-center text-3xl">Loading...</h1>;
  if (isError)
    return (
      <div className="text-center text-3xl text-red-900">
        Error: {(error as Error).message}
      </div>
    );

  return (
    <section className="bg-white-900 flex h-[727px] flex-col rounded-lg">
      <div className="flex items-center justify-between py-6 pr-10 pl-12">
        <h4 className="text-lg leading-normal font-medium">Reviews</h4>
        <div className="flex gap-4">
          <label className="relative">
            <SvgSearch className="text-black-500 absolute top-[12px] left-[15px] cursor-pointer" />
            <Input className="pl-10" placeholder="Search products" />
          </label>
        </div>
      </div>

      <div className="flex-grow overflow-hidden">
        <ReviewsTable reviews={reviews?.data} />
      </div>

      <Pagination
        pageCount={reviews?.pages ? reviews.pages : 1}
        pagination={pagination}
        onPageChange={(selected) => dispatch(setPage(selected))}
      />
    </section>
  );
};
