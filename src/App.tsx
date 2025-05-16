import { Route, Routes } from "react-router";
import { AppLayout } from "./layout/AppLayout";
import { Home } from "./pages/home/Home";
import { AdminLayout } from "./layout/AdminLayout";
import { Dashboard } from "./pages/admin/Dashboard";
import { Products } from "./components/admin/products/Products";
import { Orders } from "./components/admin/orders/Orders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
