import tShirt from "../../assets/products/t-shirt-1.png";
import { SvgMore } from "../../components/ui/svg/SvgMore";

const products = [
  {
    id: 1,
    image: tShirt,
    name: "Raw Black T-Shirt Lineup",
    sku: 47514501,
    price: "$75.00",
    stock: "In Stock",
    categories: "T-shirt, Men",
  },
  {
    id: 2,
    image: tShirt,
    name: "Classic Monochrome Tees",
    sku: 47514501,
    price: "$35.00",
    stock: "In Stock",
    categories: "T-shirt, Men",
  },
  {
    id: 3,
    image: tShirt,
    name: "Monochromatic Wardrobe",
    sku: 47514501,
    price: "$27.00",
    stock: "In Stock",
    categories: "T-shirt",
  },
  {
    id: 4,
    image: tShirt,
    name: "Essential Neutrals",
    sku: 47514501,
    price: "$22.00",
    stock: "In Stock",
    categories: "T-shirt, Raw",
  },
  {
    id: 5,
    image: tShirt,
    name: "UTRAANET Black",
    sku: 47514501,
    price: "$43.00",
    stock: "In Stock",
    categories: "T-shirt, Trend",
  },
  {
    id: 6,
    image: tShirt,
    name: "Elegant Ebony Sweatshirts",
    sku: 47514501,
    price: "$57.00",
    stock: "In Stock",
    categories: "Hoodie",
  },
  {
    id: 7,
    image: tShirt,
    name: "Sleek and Cozy Black",
    sku: 47514501,
    price: "$30.00",
    stock: "In Stock",
    categories: "T-shirt",
  },
];

export const ClothingItem = () => {
  return (
    <tbody className="font-medium">
      {products.map((product) => (
        <tr
          className="border-white-100 items-center border-b px-8 py-4 font-medium"
          key={product.id}
        >
          <td className="w-[12%] py-4 pl-12">
            <img
              className="bg-white-100 rounded-sm px-2 pb-[3px]"
              src={product.image}
              alt=""
            />
          </td>

          <td className="w-[25%]">{product.name}</td>
          <td>{product.sku}</td>
          <td>{product.price}</td>
          <td>{product.stock}</td>
          <td>{product.categories}</td>
          <td>
            <button className="cursor-pointer pl-3">
              <SvgMore />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
