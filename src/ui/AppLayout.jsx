import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const isLoading = useNavigation().state === "loading";
  return (
    <div className="grid h-screen	grid-rows-[auto_1fr_auto]   ">
      <Header />
      <main className="overflow-auto ">
        {isLoading ? <Loader /> : <Outlet />}
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
