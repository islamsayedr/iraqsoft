import Link from "next/link";
import { ReactNode } from "react";

type navBarLinkProps = {
  to: string;
  text: string;
  icon: ReactNode;
  isActive: boolean;
  handleClick: () => void;
};
export default function NavBarLink({
  to,
  text,
  icon,
  isActive,
  handleClick,
}: navBarLinkProps) {
  return (
    <div
      className={` flex-1 rounded-[12px] ${
        isActive && "bg-[#FED32B16]"
      }`}
    >

      <Link href={to} passHref>
        <span
          className={`flex items-center justify-center flex-col gap-1 p-3  ${
            isActive ? "text-[var(--yo)] font-bold" : "text-white"
          } text-md`}
          onClick={handleClick}
        >
          {/* {icon} */}
          {text}
        </span>
      </Link>
    </div>
  );
}
