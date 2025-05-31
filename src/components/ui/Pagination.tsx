import type { IPagination } from "../../types/IPagination";
import { SvgChevronLeft } from "./svg/SvgChevronLeft";
import { SvgChevronRight } from "./svg/SvgChevronRight";
import ReactPaginate from "react-paginate";

interface IPaginationProps {
  pageCount: number;
  pagination: IPagination;
  onPageChange: (selected: number) => void;
}

export const Pagination = ({
  pagination,
  pageCount,
  onPageChange,
}: IPaginationProps) => {
  const handlePageClick = (selected: { selected: number }) => {
    onPageChange(selected.selected + 1);
  };

  return (
    <ReactPaginate
      initialPage={pagination.page - 1}
      containerClassName="flex gap-2 items-center pt-8 justify-end pr-8 pb-10"
      pageLinkClassName="w-10 h-8 flex items-center justify-center rounded-[4px] cursor-pointer transition-colors ease-in hover:bg-white-100 focus-visible:bg-white-100 text-xs font-medium text-black-500"
      activeLinkClassName=" bg-white-100 text-black-900"
      previousLinkClassName="h-10 w-10 transition-colors ease-in hover:bg-white-100 focus-visible:bg-white-100 flex items-center justify-center cursor-pointer rounded-[4px] text-black-500 hover:text-black-900 "
      nextLinkClassName="h-10 w-10 transition-colors ease-in hover:bg-white-100 focus-visible:bg-white-100 flex items-center justify-center cursor-pointer rounded-[4px] text-black-500 hover:text-black-900"
      breakLabel="..."
      disabledClassName="  pointer-events-none opacity-20"
      nextLabel={<SvgChevronRight />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel={<SvgChevronLeft />}
      renderOnZeroPageCount={null}
      prevPageRel={null}
    />
  );
};

//   return (
//     <div className="flex">
//       <button onClick={prev} className="p-[13px]">
//         <SvgChevronLeft className="" />
//       </button>

//       <div className=""></div>

//       {pagination.page !== products && (
//         <button onClick={next} className="p-[13px]">
//           <SvgChevronRight />
//         </button>
//       )}
//     </div>
//   );
// };
