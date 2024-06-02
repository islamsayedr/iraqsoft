"use client";

import { useState } from "react";
import Btn from "../atoms/Btn";

export default function Subscribe({ classes = "" }) {
  const [email, setEmail] = useState("");

  const handleChange = (el: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(el.target.value);
  };
  return (
    <div
      className={`${classes} flex flex-col p-6 rounded-2xl gap-3`}
      style={{ backgroundImage: "var(--00)" }}
    >
      <p className="text-white">
        انضم الى قائمة النشرة ليصلك التحديثات وكل ما هو جديد عن عراق سوفت
      </p>
      <div className="relative">
        <input
          value={email}
          type="email"
          placeholder="البريد الالكترونى..."
          className="flex w-full h-[56px] px-6 rounded-full bg-[var(--w16)] text-white placeholder:text-[var(--w87)]"
          onChange={handleChange}
        />
        <Btn
          type="sec"
          handleClick={() => {
            setEmail("");
          }}
          classes="absolute top-[5px] left-[5px] h-[44px]"
        >
          اشتراك
        </Btn>
      </div>
    </div>
  );
}
