import { AdminHeader } from "../AdminHeader";
import { ReviewsContent } from "./ReviewsContent";

export const Reviews = () => {
  return (
    <section>
      <AdminHeader
        breadcrumbs={[
          { link: "/admin/reviews", text: "Admin" },
          { text: "Reviews" },
        ]}
      />
      <ReviewsContent />
    </section>
  );
};
