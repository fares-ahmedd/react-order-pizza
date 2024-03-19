import { Link } from "react-router-dom";

function Button({ children, disabled, onClick, to, custom }) {
  const className = `${custom ? custom : "bg-yellow-500 p-3 text-stone-800 hover:bg-yellow-400 focus:bg-yellow-300 md:px-[50px]"} rounded-full p-3   font-semibold uppercase tracking-wide  transition-colors duration-300  focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed  `;
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
