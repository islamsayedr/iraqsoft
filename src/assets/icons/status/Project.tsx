import gsap from "gsap";
import { useEffect } from "react";

export function Project(props: React.SVGProps<SVGSVGElement>) {
  useEffect(() => {
    gsap.to("#project", {
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
      <g clipPath="url(#clip0_80_1341)">
        <path
          d="M27.2433 11.7031C18.589 12.1045 11.6665 19.25 11.6665 28C11.6665 34.4983 15.4908 40.1064 20.9998 42.7337V49C20.9998 51.5737 23.0928 53.6667 25.6665 53.6667H30.3332C32.9068 53.6667 34.9998 51.5737 34.9998 49V42.7337C38.3948 41.1144 41.1417 38.3585 42.7563 34.9635C42.502 34.9752 42.2565 35 41.9998 35C32.9792 35 25.6665 27.6873 25.6665 18.6667C25.6665 16.1723 26.2447 13.8195 27.2433 11.7031Z"
          fill="url(#paint0_linear_80_1341)"
        />
        <path
          d="M26.326 0.675628C26.7566 0.232192 27.3455 -0.022281 27.9636 -0.0319419C28.2757 -0.0368177 28.5857 0.0209963 28.8751 0.138077C29.1646 0.255157 29.4275 0.429123 29.6485 0.649672C29.8695 0.870221 30.044 1.13287 30.1616 1.42206C30.2792 1.71126 30.3376 2.02112 30.3334 2.33329V4.66663C30.3377 4.97582 30.2806 5.2828 30.1653 5.56973C30.05 5.85665 29.8788 6.1178 29.6617 6.338C29.4446 6.55819 29.1859 6.73304 28.9007 6.85239C28.6154 6.97173 28.3093 7.03319 28 7.03319C27.6908 7.03319 27.3847 6.97173 27.0994 6.85239C26.8141 6.73304 26.5554 6.55819 26.3383 6.338C26.1212 6.1178 25.95 5.85665 25.8347 5.56973C25.7194 5.2828 25.6623 4.97582 25.6667 4.66663V2.33329C25.6582 1.71523 25.8953 1.11906 26.326 0.675628Z"
          fill="var(--yo)"
        />
        <path
          d="M8.52135 7.89094C8.90667 7.6311 9.3608 7.49224 9.82555 7.49215C10.1385 7.49215 10.4482 7.55509 10.7363 7.67722C11.0244 7.79935 11.285 7.97819 11.5026 8.20308L13.1524 9.85282C13.3763 10.0678 13.5551 10.3254 13.6783 10.6103C13.8014 10.8953 13.8665 11.202 13.8696 11.5124C13.8728 11.8228 13.814 12.1307 13.6966 12.4182C13.5793 12.7056 13.4058 12.9667 13.1863 13.1862C12.9668 13.4057 12.7056 13.5792 12.4182 13.6966C12.1308 13.8139 11.8229 13.8727 11.5125 13.8696C11.202 13.8664 10.8954 13.8013 10.6104 13.6782C10.3254 13.555 10.0679 13.3762 9.85289 13.1523L8.20315 11.5026C7.8692 11.1794 7.63935 10.7638 7.54308 10.3091C7.4468 9.85446 7.48848 9.38141 7.66277 8.95058C7.83706 8.51975 8.13602 8.15078 8.52135 7.89094Z"
          fill="var(--yo)"
        />
        <path
          d="M1.43026 25.8347C1.71719 25.7194 2.02417 25.6623 2.33336 25.6666H4.6667C4.97589 25.6623 5.28287 25.7194 5.5698 25.8347C5.85672 25.95 6.11787 26.1211 6.33807 26.3383C6.55826 26.5554 6.73312 26.8141 6.85246 27.0993C6.9718 27.3846 7.03326 27.6907 7.03326 28C7.03326 28.3092 6.9718 28.6153 6.85246 28.9006C6.73312 29.1859 6.55826 29.4446 6.33807 29.6617C6.11787 29.8788 5.85672 30.0499 5.5698 30.1652C5.28287 30.2805 4.97589 30.3377 4.6667 30.3333H2.33336C2.02417 30.3377 1.71719 30.2805 1.43026 30.1652C1.14334 30.0499 0.882187 29.8788 0.661991 29.6617C0.441795 29.4446 0.266944 29.1859 0.1476 28.9006C0.028255 28.6153 -0.0332031 28.3092 -0.0332031 28C-0.0332031 27.6907 0.028255 27.3846 0.1476 27.0993C0.266944 26.8141 0.441795 26.5554 0.661991 26.3383C0.882187 26.1211 1.14334 25.95 1.43026 25.8347Z"
          fill="var(--yo)"
        />
        <path
          d="M9.85289 42.8476C10.2755 42.4126 10.8509 42.1593 11.4571 42.1412C11.9271 42.1274 12.3903 42.2558 12.7861 42.5098C13.1818 42.7637 13.4916 43.1313 13.6749 43.5643C13.8582 43.9973 13.9063 44.4756 13.8131 44.9365C13.7198 45.3974 13.4895 45.8193 13.1524 46.1471L11.5026 47.7968C11.2876 48.0208 11.0301 48.1995 10.7451 48.3227C10.4602 48.4459 10.1535 48.5109 9.84307 48.5141C9.53265 48.5172 9.22471 48.4584 8.9373 48.3411C8.64989 48.2237 8.38879 48.0502 8.16927 47.8307C7.94976 47.6112 7.77625 47.3501 7.65891 47.0627C7.54157 46.7753 7.48275 46.4673 7.48591 46.1569C7.48906 45.8465 7.55412 45.5398 7.67728 45.2549C7.80044 44.9699 7.97922 44.7124 8.20315 44.4974L9.85289 42.8476Z"
          fill="var(--yo)"
        />
        <path
          d="M43.1718 42.5392C43.5569 42.2799 44.0105 42.1414 44.4746 42.1412C44.7865 42.1413 45.0951 42.2038 45.3824 42.3251C45.6697 42.4464 45.9297 42.6241 46.1472 42.8476L47.7969 44.4974C48.0208 44.7124 48.1996 44.9699 48.3228 45.2549C48.4459 45.5398 48.511 45.8465 48.5141 46.1569C48.5173 46.4673 48.4585 46.7753 48.3411 47.0627C48.2238 47.3501 48.0503 47.6112 47.8308 47.8307C47.6113 48.0502 47.3502 48.2237 47.0627 48.3411C46.7753 48.4584 46.4674 48.5172 46.157 48.5141C45.8466 48.5109 45.5399 48.4459 45.2549 48.3227C44.97 48.1995 44.7124 48.0208 44.4974 47.7968L42.8477 46.1471C42.515 45.8233 42.2865 45.4078 42.1913 44.9534C42.0961 44.4991 42.1385 44.0268 42.3132 43.5967C42.4879 43.1666 42.7868 42.7984 43.1718 42.5392Z"
          fill="var(--yo)"
        />
        <path
          id="project"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.8444 7C39.5434 7 39.2915 7.22542 39.2565 7.52409L38.9831 9.88477C37.8554 10.2767 36.8366 10.8738 35.9525 11.6393L33.765 10.696C33.4897 10.577 33.1669 10.6807 33.0176 10.9421L30.8347 14.7246C30.683 14.9836 30.7538 15.3151 30.9942 15.4948L32.8763 16.8939C32.7657 17.4685 32.6986 18.0598 32.6986 18.6667C32.6986 19.2736 32.7657 19.8648 32.8763 20.4395L30.9942 21.8385C30.7538 22.0159 30.6853 22.3474 30.8347 22.6087L33.0176 26.3913C33.1669 26.6526 33.4897 26.7609 33.765 26.6419L35.9525 25.694C36.8366 26.4595 37.8554 27.0566 38.9831 27.4486L39.2565 29.8092C39.2915 30.1079 39.5434 30.3333 39.8444 30.3333H44.2149C44.5159 30.3333 44.7678 30.1079 44.8028 29.8092L45.0762 27.4486C46.205 27.0566 47.2265 26.4601 48.1114 25.694L50.2943 26.6328C50.5696 26.7518 50.8924 26.6481 51.0417 26.3867L53.2246 22.6042C53.3763 22.3452 53.3055 22.0136 53.0651 21.834L51.183 20.4395C51.2936 19.8648 51.3653 19.2736 51.3653 18.6667C51.3653 18.0597 51.2936 17.4685 51.183 16.8939L53.0651 15.4948C53.3055 15.3175 53.374 14.9859 53.2246 14.7246L51.0417 10.9421C50.8924 10.6807 50.5696 10.5724 50.2943 10.6914L48.1114 11.6393C47.2265 10.8732 46.205 10.2767 45.0762 9.88477L44.8028 7.52409C44.7678 7.22542 44.5159 7 44.2149 7H39.8444ZM42.0321 14.5833C44.2861 14.5833 46.1154 16.4126 46.1154 18.6666C46.1154 20.9229 44.2861 22.7499 42.0321 22.7499C39.7781 22.7499 37.9487 20.9229 37.9487 18.6666C37.9487 16.4126 39.7781 14.5833 42.0321 14.5833Z"
          fill="var(--yo)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_80_1341"
          x1="11.6665"
          y1="32.2653"
          x2="42.7564"
          y2="32.2192"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4FA375" />
          <stop offset="1" stopColor="#2087A2" />
        </linearGradient>
        
        
        <clipPath id="clip0_80_1341">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
