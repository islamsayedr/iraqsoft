import UpdateCard from "../ui/components/molecules/UpdateCard";
import { getUpdates } from "../lib/talkToDBa";
import { UpdateResponse, Update } from "../lib/definitions";

export default async function page() {
  const updates: UpdateResponse = await getUpdates();
  if ("error" in updates) {
    return (
      <main>
        <section className="bg-white">
          <div className="container flex-col md:gap-12 gap-6">
            <h2 className="title">اخر الاخبار والتحديثات</h2>
            <div className="flex w-full gap-4 justify-center flex-wrap">
              <p>Error: {updates.error}</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
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
                date={event.createdAt.toLocaleDateString()}
                cover={event.cover}
                video={event.video}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
