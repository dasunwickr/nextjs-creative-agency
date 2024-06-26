import Link from "next/link";
import Links from "./Links";

const Navbar = () => {
  return (
    <div>
      <div className="logo">Logo</div>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
