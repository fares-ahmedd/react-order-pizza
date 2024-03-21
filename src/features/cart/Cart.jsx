import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "./cartSlice";
import EmptyCart from "./EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import { useEffect, useState } from "react";
import Loader from "../../ui/Loader";

function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalCartPrice);
  const totalAmount = useSelector(getTotalCartQuantity);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 700);
  }, []);

  if (!cart.length) return <EmptyCart />;
  return showLoader ? (
    <Loader />
  ) : (
    <div className="px-4 py-3 sm:px-6">
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      <h2 className="my-6 font-semibold">
        Your cart,{" "}
        <span className="text-xl font-extrabold uppercase">{userName}</span>
      </h2>
      <ul className="mb-6 mt-4 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <span className="block">
        total pizzas : <strong>{totalAmount}</strong>
      </span>
      <span>
        total price : <strong>{formatCurrency(totalPrice)}</strong>
      </span>
      <div className="space-x-4 space-y-6">
        <Button to="/order/new">Order pizzas</Button>
        <Button
          custom={"bg-red-600 text-[#eee] hover:bg-red-800"}
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
