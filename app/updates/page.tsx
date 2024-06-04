"use client";

import { updates } from "@/app/lib/dummyData";
import UpdateCard from "../ui/components/molecules/UpdateCard";

export default function page() {
  return (
    <main>
      <section className={`bg-white`}>
        <div className={`container flex-col md:gap-12 gap-6`}>
          <h2 className="title">اخر الاخبار والتحديثات</h2>
          <div className="flex w-full gap-4 justify-center flex-wrap">
            {updates.map((event) => (
              <UpdateCard
                key={event.id}
                id={event.id}
                title={event.title}
                des={event.des}
                date={event.date}
                cover={event.cover}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
