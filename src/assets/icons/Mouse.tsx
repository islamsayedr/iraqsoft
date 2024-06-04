import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
export const Mouse = (props: React.SVGProps<SVGSVGElement>) => {
  const container = useRef<SVGSVGElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, duration: 1 });
      tl.to(".box", {
        duration: 0.8,
        y: 3,
        scaleY: 1.5,
        ease: "circ.inOut",
        yoyo: true,
      });
    },
    { scope: container }
  );
  return (
    <svg
      ref={container}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#fff"}
      fill={"none"}
      {...props}
    >
      <path
        d="M12 22C18 22 19.5 17.49 19.5 12C19.5 6.50998 18 2 12 2C5.99993 2 4.5 6.50996 4.5 12C4.5 17.49 5.99993 22 12 22Z"
        stroke="#fff"
        strokeWidth="1.5"
      />

      <path
        d="M12 9V6"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="box"
      />
    </svg>
  );
};
