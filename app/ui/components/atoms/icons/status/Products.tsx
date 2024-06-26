import gsap from "gsap";
import { useEffect } from "react";

export  function Products(props: React.SVGProps<SVGSVGElement>) {
  useEffect(() => {
    gsap.to("#squar", {
      transformOrigin: "50% 50%",
      duration: 3,
      rotate: 360,
      repeat: -1,
      ease: "power2",
    });
  });

  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.5335 11.2H11.2001C9.1412 11.2 7.4668 12.8744 7.4668 14.9333V24.2666C7.4668 26.3256 9.1412 28 11.2001 28H20.5335C22.5924 28 24.2668 26.3256 24.2668 24.2666V14.9333C24.2668 12.8744 22.5924 11.2 20.5335 11.2ZM20.5335 31.7333H11.2001C9.1412 31.7333 7.4668 33.4077 7.4668 35.4666V44.7999C7.4668 46.8589 9.1412 48.5333 11.2001 48.5333H20.5335C22.5924 48.5333 24.2668 46.8589 24.2668 44.7999V35.4666C24.2668 33.4077 22.5924 31.7333 20.5335 31.7333ZM41.0668 31.7333H31.7335C29.6745 31.7333 28.0001 33.4077 28.0001 35.4666V44.7999C28.0001 46.8589 29.6745 48.5333 31.7335 48.5333H41.0668C43.1257 48.5333 44.8001 46.8589 44.8001 44.7999V35.4666C44.8001 33.4077 43.1257 31.7333 41.0668 31.7333Z"
        fill="url(#paint0_linear_80_1339)"
      />
      <path
        id="squar"
        d="M40.9061 8.49337L47.5048 15.0939C48.9608 16.5499 48.9608 18.9168 47.5048 20.3728L40.9061 26.9734C40.1781 27.7014 39.2224 28.0654 38.2667 28.0654C37.3109 28.0654 36.3552 27.7014 35.6272 26.9734L29.0285 20.3728C27.5725 18.9168 27.5725 16.5499 29.0285 15.0939L35.6272 8.49337C37.0813 7.03737 39.452 7.03737 40.9061 8.49337Z"
        fill="var(--yo)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_80_1339"
          x1="7.4668"
          y1="29.4933"
          x2="44.8001"
          y2="29.4186"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4FA375" />
          <stop offset="1" stopColor="#2087A2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
