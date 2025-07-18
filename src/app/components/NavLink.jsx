import Link from "next/link";

const NavLink = ({ href, title, isActive }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 
        ${isActive ? "text-white border-b-2 border-amber-500 font-semibold" : "text-[#ADB7BE] hover:text-white"}
      `}
    >
      {title}
    </Link>
  );
};

export default NavLink;
