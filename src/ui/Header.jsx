import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase  px-4 sm:px-8 py-3 border-b border-stone-200   flex  items-center justify-between gap-1">
      <Link to={"/"} className="sm:text-2xl font-bold font-mono    ">
        Fast React Pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
