import Banner from "./ui/sec/Banner";
import Brands from "./ui/sec/Brands";
import Hero from "./ui/sec/Hero";
import LatestUpdates from "./ui/sec/LatestUpdates";
import PopularProducts from "./ui/sec/PopularProducts";
import ServiceSec from "./ui/sec/ServiceSec";
import Statistics from "./ui/sec/Statistics";
// latest updates api
import { getLatestUpdates } from "./lib/talkToDBa";
import { UpdateResponse, Update } from "./lib/definitions";
export default async function Home() {
  const updates: UpdateResponse = await getLatestUpdates();

  return (
    <main>
      <Hero />
      <Statistics />
      {Array.isArray(updates) ? (
        <LatestUpdates updates={updates} />
      ) : (
        <LatestUpdates updates={[]} error={updates.error} />
      )}
      <PopularProducts />
      <ServiceSec />
      <Banner />
      <Brands />
    </main>
  );
}
