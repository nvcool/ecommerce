import { Outlet } from "react-router";
import { Header } from "../header/Header";

export const AppLayout = () => {
  return (
    <div className="">
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};
