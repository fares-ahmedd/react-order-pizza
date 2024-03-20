import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="flex h-[100%] flex-col-reverse items-center justify-center text-xl">
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
