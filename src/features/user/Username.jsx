import { useSelector } from "react-redux";

function Username() {
  const user = useSelector((state) => state.user.userName);
  if (!user) return;
  return (
    <div className="hidden text-lg font-semibold sm:block ">
      Welcome, Fares
    </div>
  );
}

export default Username;
