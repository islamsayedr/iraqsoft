import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useEffect } from "react";

export function Experience(props: React.SVGProps<SVGSVGElement>) {
  useEffect(() => {
    gsap.set("#experience", {
      transformOrigin: "50% 0%",
      rotate: -20,
      ease: "power2",
    });
    gsap.to("#experience", {
      transformOrigin: "50% 0%",
      duration: 1,
      rotate: 10,
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
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.4695 30.3333H41.2876C43.3414 30.3333 45.0149 28.6597 45.0149 26.606V15.4242C45.0149 13.3648 43.347 11.6969 41.2876 11.6969H31.9695C31.9695 10.6682 31.1364 9.83325 30.1058 9.83325H22.6513C21.6207 9.83325 20.7876 10.6682 20.7876 11.6969H11.4695C9.41014 11.6969 7.74219 13.3648 7.74219 15.4242V26.606C7.74219 28.6597 9.41573 30.3333 11.4695 30.3333ZM26.3785 26.606C25.3517 26.606 24.5149 25.7692 24.5149 24.7423C24.5149 23.7155 25.3517 22.8787 26.3785 22.8787C27.4054 22.8787 28.2422 23.7155 28.2422 24.7423C28.2422 25.7692 27.4054 26.606 26.3785 26.606ZM45.0149 35.1638V33.0281C44.1371 33.5406 43.1475 33.8835 42.0927 34.0046L45.0149 35.1638ZM11.4695 34.0605C10.109 34.0605 8.84173 33.6673 7.74219 33.0262V37.7878C7.74219 39.8471 9.41014 41.5151 11.4695 41.5151H11.8869L30.7022 34.0605H11.4695Z"
        fill="url(#paint0_linear_80_1343)"
      />
      <path
        id="experience"
        d="M37.1597 36.0547L49.4858 40.9468C51.0252 41.558 51.0624 43.7236 49.5454 44.387L45.7697 46.0401V48.9697C45.7697 49.9985 44.9348 50.8334 43.9061 50.8334H29.0194C27.9906 50.8334 27.1557 49.9985 27.1557 48.9697V46.4967L23.4284 44.4225V48.9697C23.4284 49.9985 22.5935 50.8334 21.5648 50.8334C20.5361 50.8334 19.7012 49.9985 19.7012 48.9697V42.3874L35.7862 36.0547C36.2279 35.8795 36.718 35.8795 37.1597 36.0547Z"
        fill="var(--yo)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_80_1343"
          x1="7.74219"
          y1="25.3573"
          x2="45.0149"
          y2="25.2696"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4FA375" />
          <stop offset="1" stopColor="#2087A2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_80_1343"
          x1="19.7012"
          y1="43.2293"
          x2="50.6616"
          y2="43.1007"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4FA375" />
          <stop offset="1" stopColor="#2087A2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
