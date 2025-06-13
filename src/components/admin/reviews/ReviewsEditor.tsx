import { useMutation, useQuery } from "@tanstack/react-query";
import { FormReviews } from "../formProduct/FormReviews";
import { reviewsApi } from "../../../lib/queriesReviews";
import type { IReview } from "../../../types/IReview";
import { customersApi } from "../../../lib/queriesCustomers";

type ICustomersEditorProps = {
  review?: IReview;
};

export const ReviewsEditor = ({ review }: ICustomersEditorProps) => {
  const {
    mutate: editReview,
    isSuccess: editSuccess,
    error: editError,
    isPending: editPending,
  } = useMutation({
    mutationFn: reviewsApi.putReview,
  });

  const { data: users } = useQuery({
    queryKey: ["customers"],
    queryFn: () => customersApi.getAllCustomers(1, 99999, ""),
  });

  return (
    <section className="bg-white-900 flex flex-col rounded-lg">
      <div className="border-white-200 mb-16 flex items-center justify-between border-b py-6 pr-10 pl-12">
        <h4 className="text-lg leading-normal font-medium">
          {review ? "Edit" : "Add"} Review
        </h4>
      </div>

      {editSuccess && (
        <span className="mx-auto block text-2xl">YEP YEP DOING !</span>
      )}
      {editError && (
        <span className="mx-auto block text-2xl">{editError.message}</span>
      )}
      {review && users && (
        <FormReviews
          review={review}
          users={users?.data}
          onSubmit={(parametr) => {
            const originalCustomer = users.data.find(
              (item) => item.id === parametr.userId,
            );

            const userData = {
              id: originalCustomer?.id || "",
              name: originalCustomer?.name || "",
              email: originalCustomer?.email || "",
              address: originalCustomer?.address || "",
              image: originalCustomer?.image || "",
            };

            editReview({
              id: review.id,
              reviewsData: parametr,
              userData,
            });
          }}
          isSuccess={editSuccess}
          isLoading={editPending}
        />
      )}
    </section>
  );
};
