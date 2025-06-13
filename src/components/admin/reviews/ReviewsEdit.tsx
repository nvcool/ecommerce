import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { reviewsApi } from "../../../lib/queriesReviews";
import { AdminHeader } from "../AdminHeader";
import { FormReviews } from "../formProduct/FormReviews";
import { ReviewsEditor } from "./ReviewsEditor";

export const ReviewsEdit = () => {
  const { id } = useParams();

  const { data: review } = useQuery({
    queryKey: ["reviews", id],
    queryFn: () => reviewsApi.getReviewById(id!),
    enabled: !!id,
  });

  return (
    <section>
      <AdminHeader
        breadcrumbs={[
          { link: "/admin", text: "Admin" },
          { link: "/admin/reviews", text: "Reviews" },
          { text: "Edit Reviews" },
        ]}
      />
      <ReviewsEditor review={review} />
    </section>
  );
};
