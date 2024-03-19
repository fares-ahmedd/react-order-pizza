import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center  justify-between gap-1 border-b border-stone-200 bg-yellow-500   px-4  py-3 uppercase sm:px-8">
      <Link
        to={"/"}
        className="font-pizza  font-mono font-bold  italic sm:text-2xl   "
      >
        Fast React Pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
