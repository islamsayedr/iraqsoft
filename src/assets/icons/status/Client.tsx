

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useEffect } from "react";

export function Client(props: React.SVGProps<SVGSVGElement>) {
  useEffect(() => {
    gsap.set("#client", {
      transformOrigin: "0% 0%",
      rotate: -15,
      ease: "power2",
    });
    gsap.to("#client", {
      duration: 1,
      rotate: 5,
      repeat: -1,
      yoyo: true,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0,0 0.26,0.523 0.525,0.754 0.781,0.976 1,1 1,1 "
      ),
    });
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      {...props}
    >
      <path
        d="M32.4606 52.1171H6.1157C5.01175 52.1171 4.11578 51.2232 4.11578 50.1172C4.11578 40.1916 12.1914 32.118 22.115 32.118C22.675 32.118 23.227 32.152 23.773 32.202L23.313 37.9777C23.081 40.8936 24.133 43.7535 26.1969 45.8274L32.4626 52.1191L32.4606 52.1171ZM20.1151 28.1181C13.4974 28.1181 8.11562 22.7364 8.11562 16.1186C8.11562 9.50092 13.4974 4.11914 20.1151 4.11914C26.7328 4.11914 32.1146 9.50092 32.1146 16.1186C32.1146 22.7364 26.7328 28.1181 20.1151 28.1181Z"
        fill="url(#paint0_linear_89_1827)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.452 36.3617L43.0563 28.938C41.7424 27.6221 39.8585 26.9721 38.0205 27.2261L31.8748 28.036C29.6749 28.328 27.951 30.146 27.775 32.3559L27.299 38.3136C27.161 40.0635 27.791 41.7795 29.0289 43.0234L36.4446 50.4691C37.5146 51.5331 38.9325 52.119 40.4404 52.119H40.4644C41.9824 52.113 43.4043 51.5151 44.4703 50.4351L50.48 44.3474C52.6639 42.1375 52.6479 38.5516 50.452 36.3617ZM36.1146 39.1396C34.4587 39.1396 33.1147 37.7957 33.1147 36.1398C33.1147 34.4838 34.4587 33.1399 36.1146 33.1399C37.7706 33.1399 39.1145 34.4838 39.1145 36.1398C39.1145 37.7957 37.7706 39.1396 36.1146 39.1396Z"
        fill="#FED32B"
        id="client"
      />
      <defs>
        <linearGradient
          id="paint0_linear_89_1827"
          x1="4.11578"
          y1="27.6391"
          x2="32.4627"
          y2="27.6057"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4FA375" />
          <stop offset="1" stopColor="#2087A2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
