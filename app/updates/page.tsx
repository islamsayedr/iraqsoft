// import { updates } from "@/app/lib/dummyData";
import UpdateCard from "../ui/components/molecules/UpdateCard";
import { fetchUpdates } from "../lib/data";
import { Updates } from "../lib/definitions";

export default async function page() {
  const updates: Updates[] = await fetchUpdates();

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
                  date={event.date.toLocaleDateString()}
                  cover={event.cover}
                />
              
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
