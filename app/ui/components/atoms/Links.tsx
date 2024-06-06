import Link from "next/link";
import { LinkIcon, Phone, Email, Location } from "./icons/index";

// nav link ---------------
type NavProps = {
  text: string;
  link: string;
};
export function NavLink({ text, link }: NavProps) {
  return (
    <Link href={link}>
      <span className="flex gap-2 leading-6 font-medium text-[var(--sc)] hover:text-[var(--pc)] hover:underline">
        <LinkIcon /> {text}
      </span>
    </Link>
  );
}

//  external link ----------------
type ExternalProps = {
  text: string;
  link: string;
};
export function Exteranl({ text, link }: ExternalProps) {
  return (
    <a
      href={link}
      className="flex gap-2 leading-6 font-medium text-[var(--sc)] hover:text-[var(--pc)] hover:underline"
      target="_blank"
    >
      <LinkIcon />
      {text}
    </a>
  );
}

type EmailProps = {
  email: string;
};
export function EmailLink({ email }: EmailProps) {
  return (
    <a
      href={`mailto:${email}`}
      className="flex gap-2 leading-6 font-medium text-[var(--sc)] hover:text-[var(--pc)] hover:underline"
    >
      <Email />
      {email}
    </a>
  );
}

type PhoneProps = {
  phone: string;
};
export function PhoneLink({ phone }: PhoneProps) {
  return (
    <a
      href={`tel:${phone}`}
      className="flex gap-2 leading-6 font-medium text-[var(--sc)] hover:text-[var(--pc)] hover:underline"
    >
      <Phone />
      {phone}
    </a>
  );
}

type LocationProps = {
  location: string;
};
export function LocationLink({ location }: LocationProps) {
  return (
    <a
      href={`https://www.google.com/maps?q=${location}`}
      target="_blank"
      className="flex gap-2 leading-6 font-medium text-[var(--sc)] hover:text-[var(--pc)] hover:underline"
    >
      <Location />
      <span className="flex-1 hover:text-[var(--pc)]">{location}</span>
    </a>
  );
}
