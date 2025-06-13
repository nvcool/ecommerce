import { Route, Routes } from "react-router";
import { AppLayout } from "./layout/AppLayout";
import { Home } from "./pages/home/Home";
import { AdminLayout } from "./layout/AdminLayout";
import { Dashboard } from "./pages/admin/Dashboard";
import { Products } from "./components/admin/products/Products";
import { Orders } from "./components/admin/orders/Orders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AddNewProduct } from "./components/admin/formProduct/AddNewProduct";
import { Customers } from "./components/admin/customers/Customers";
import { Reviews } from "./components/admin/reviews/Reviews";
import { EditProduct } from "./components/admin/formProduct/EditProduct";
import { Settings } from "./components/admin/settings/Settings";
import { OrdersEdit } from "./components/admin/orders/OrdersEdit";
import { CustomersEdit } from "./components/admin/customers/CustomersEdit";
import { ReviewsEdit } from "./components/admin/reviews/ReviewsEdit";
export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add-product" element={<AddNewProduct />} />
          <Route path="products/edit-product/:id" element={<EditProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/edit-orders/:id" element={<OrdersEdit />} />
          <Route path="customers" element={<Customers />} />
          <Route
            path="customers/edit-customers/:id"
            element={<CustomersEdit />}
          />
          <Route path="reviews" element={<Reviews />} />
          <Route path="reviews/edit-reviews/:id" element={<ReviewsEdit />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
