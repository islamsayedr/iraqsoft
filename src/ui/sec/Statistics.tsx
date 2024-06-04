"use client";

import {
  Products,
  Client,
  Project,
  Experience,
} from "../../assets/icons/index";
import StatCard from "../components/common/molecules/StatCard";
// imgs
const bgart = "./imgs/bgart01.png";

export default function Statistics() {
  return (
    <section
      className="pt-[40px] pb-[128px] relative bg-bottom bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgart})` }}
    >
      <div className={`container flex flex-col xl:flex-row gap-3 `}>
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <StatCard name="المنتجات" CurrentValue={35} icon={<Products />} />
          <StatCard name="المشاريع" CurrentValue={390} icon={<Project />} />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <StatCard
            name="سنوات الخبرة"
            CurrentValue={10}
            icon={<Experience />}
          />
          <StatCard name="العملاء" CurrentValue={245} icon={<Client />} />
        </div>
      </div>
      {/* <img src="" alt="" /> */}
    </section>
  );
}
