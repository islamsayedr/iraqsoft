export default function BrandLogo({ img = "" }) {
  return (
    <div className=" aspect-video min-h-[128px] bg-center grayscale hover:grayscale-0 border-[2px] border-[var(--b16)] flex items-center justify-center">
      <img src={img} alt={img} className="h-full max-w-full" />
    </div>
  );
}
