"use client";

import Banner from "./ui/sec/Banner";
import Brands from "./ui/sec/Brands";
import Hero from "./ui/sec/Hero";
import LatestUpdates from "./ui/sec/LatestUpdates";
import PopularProducts from "./ui/sec/PopularProducts";
import ServiceSec from "./ui/sec/ServiceSec";
import Statistics from "./ui/sec/Statistics";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <LatestUpdates />
      <PopularProducts />
      <ServiceSec />
      <Banner />
      <Brands />
    </main>
  );
}
