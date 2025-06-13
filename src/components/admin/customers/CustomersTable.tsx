import { useMutation } from "@tanstack/react-query";
import type { ICustomer } from "../../../types/ICustomer";
import { DropdownMenu } from "../../ui/DropdownMenu";
import { SvgSort } from "../../ui/svg/SvgSort";
import { UserAvatar } from "../../UserAvatar";
import { customersApi } from "../../../lib/queriesCustomers";
import { queryClient } from "../../../App";

interface ICustomersTableProps {
  customers?: ICustomer[];
}

export const CustomersTable = ({ customers }: ICustomersTableProps) => {
  const { mutate: deleteMutate } = useMutation({
    mutationFn: customersApi.deleteCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
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
              <DropdownMenu
                buttonClassName="p-4"
                editLink={`/customers/edit-customers/${customer.id}`}
                handleDelete={() => handleDelete(customer.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
