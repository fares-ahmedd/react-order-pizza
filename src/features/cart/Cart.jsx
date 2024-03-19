import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-4 py-3 sm:px-6">
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      <h2 className="my-6 font-semibold">Your cart, %NAME%</h2>
      <ul className="mb-6 mt-4 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="space-x-4 space-y-6">
        <Button to="/order/new">Order pizzas</Button>
        <Button custom={"bg-red-600 text-[#eee] hover:bg-red-800"}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
