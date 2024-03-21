import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!totalCartPrice) return null;
  return (
    <div className="flex items-center justify-evenly bg-stone-800 p-4 uppercase text-stone-200 sm:px-6 ">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6 sm:text-xl ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Button to={"/cart"}>Open cart &rarr;</Button>
    </div>
  );
}

export default CartOverview;
