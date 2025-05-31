import type { ICustomer } from "../../../types/ICustomer";
import { SvgMore } from "../../ui/svg/SvgMore";
import { SvgSort } from "../../ui/svg/SvgSort";
import { UserAvatar } from "../../UserAvatar";

interface ICustomersTableProps {
  customers?: ICustomer[];
}

export const CustomersTable = ({ customers }: ICustomersTableProps) => {
  return (
    <table className="text-black-500 min-w-full table-fixed border-spacing-8">
      <thead className="">
        <tr className="border-white-100 mb-8 ml-[67px] items-center border-y text-left">
          <th className="py-2.5 pl-[67px]">
            <SvgSort />
          </th>
          <th className="font-medium">Name</th>
          <th className="font-medium">Email</th>
          <th className="font-medium">Shipping Address</th>
          <th className="font-medium">Action</th>
        </tr>
      </thead>
      <tbody className="font-medium">
        {customers?.map((customer) => (
          <tr
            className="border-white-100 items-center border-b font-medium last:border-b-0"
            key={customer.id}
          >
            <td className="w-[12%] py-4 pl-12">
              <UserAvatar imageUrl={customer.image} name={customer.name} />
            </td>

            <td className="w-[20%]">{customer.name}</td>
            <td className="w-[25%]">{customer.email}</td>
            <td className="w-[30%]">{customer.address}</td>

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
