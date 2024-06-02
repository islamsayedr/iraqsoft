import { ProductsData } from "@/src/data/dummyData";
import ProductCard from "@/src/ui/components/common/molecules/ProductCard";

export default function page() {
  return (
    <main>
      <section className={`bg-white`}>
        <div className={`container flex-col md:gap-12 gap-4`}>
          <h2 className="title">قائمة الانظمة والبرامج</h2>
          <div className="flex w-full   flex-wrap">
            {ProductsData.map((product) => (
              <div key={product.id} className="2xl:w-2/4 w-full 2xl:p-2 py-2">
                <ProductCard
                  data={product}
                  key={product.id}
                  classes="w-full "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
