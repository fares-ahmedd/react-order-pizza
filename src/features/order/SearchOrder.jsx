import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit} className="ml-4 flex-1 ">
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[80%] rounded-3xl bg-yellow-100 p-1 px-2 transition-all  duration-300 placeholder:text-stone-400 focus:w-[83%] focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 "
      />
    </form>
  );
}

export default SearchOrder;
