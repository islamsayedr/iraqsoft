import Link from "next/link";
import { ReactNode } from "react";
import { clsx } from "clsx";

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
      className={clsx("flex-1 rounded-[12px] w-[25%]", {
        "bg-[#FED32B16]": isActive,
      })}
    >
      <Link href={to} passHref>
        <span
          className={clsx(
            "flex items-center justify-center flex-col gap-1 p-3 max-w-full text-sm ",
            { "text-[var(--yo)] font-bold": isActive, "text-white": !isActive }
          )}
          onClick={handleClick}
        >
          {text}
        </span>
      </Link>
    </div>
  );
}
