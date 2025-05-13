export const RecentOrdersHeader = () => {
  return (
    <thead>
      <tr className="border-white-200 mb-6 border-y text-left">
        <th className="text-black-500 w-[40%] py-2.5 pl-12 font-medium">
          Item
        </th>
        <th className="text-black-500 w-[20%] font-medium">Date</th>
        <th className="text-black-500 w-[20%] font-medium">Total</th>
        <th className="text-black-500 font-medium">Status</th>
      </tr>
    </thead>
  );
};
