import BarndLogo from "../components/common/atoms/BrandLogo";
const img1 = "./imgs/client01.png";
const img2 = "./imgs/client02.png";
export default function Brands() {
  return (
    <section className="bg-white">
      <div className="container overflow-hidden relative flex flex-col">
        <div className="flex">
          <BrandLine />
          <BrandLine />
        </div>
        <div className="flex">
          <BrandLine duration="20s" />
          <BrandLine duration="20s" />
        </div>
        <div id="brandsContainerOverlay"></div>
      </div>
    </section>
  );
}

export function BrandLine({ duration = "30s" }) {
  return (
    <div
      className="brands flex no-Wrap"
      id="brandSlider"
      style={{ animationDuration: duration }}
    >
      <BarndLogo img={`${img1}`} />
      <BarndLogo img={`${img2}`} />
      <BarndLogo img={`${img1}`} />
      <BarndLogo img={`${img2}`} />
      <BarndLogo img={`${img1}`} />
      <BarndLogo img={`${img2}`} />
      <BarndLogo img={`${img1}`} />
      <BarndLogo img={`${img2}`} />
      <BarndLogo img={`${img1}`} />
      <BarndLogo img={`${img2}`} />
      <BarndLogo img={`${img1}`} />
      <BarndLogo img={`${img2}`} />
    </div>
  );
}
