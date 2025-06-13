const orders = [
  {
    item: "Mens Black T-Shirts",
    date: "20 Mar, 2023",
    total: "$75.00",
    status: "Processing",
  },
  {
    item: "Essential Neutrals",
    date: "19 Mar, 2023",
    total: "$22.00",
    status: "Processing",
  },
  {
    item: "Sleek and Cozy Black",
    date: "7 Feb, 2023",
    total: "$57.00",
    status: "Completed",
  },
  {
    item: "MOCKUP Black",
    date: "29 Jan, 2023",
    total: "$30.00",
    status: "Completed",
  },
  {
    item: "Monochromatic Wardrobe",
    date: "27 Jan, 2023",
    total: "$27.00",
    status: "Completed",
  },
];

export const RecentOrdersList = () => {
  return (
    <table className="w-full">
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
      <tbody>
        <tr className="h-8">
          <td className=""></td>
        </tr>
        {orders.map((order) => (
          <tr
            key={order.item}
            className="border-white-100 text-black-500 mb-10 border-b font-medium last:border-none"
          >
            <td className="py-4 pl-12">{order.item}</td>
            <td>{order.date}</td>
            <td>{order.total}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
