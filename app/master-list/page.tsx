import ProductCard from "@/components/ProductCard";
import { categories } from "@/lib/products";

const seen = new Set<string>();
const allProducts = categories
  .filter((c) => c.season === "Summer 2026")
  .flatMap((c) => c.products)
  .filter((p) => {
    if (seen.has(p.href)) return false;
    seen.add(p.href);
    return true;
  });

export default function MasterList() {
  return (
    <div className="bg-cream text-ink flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-2xl flex-col items-center gap-2 px-6 py-10 text-center sm:px-10">
        <div className="text-ink-faint text-xs font-medium uppercase tracking-[0.3em]">
          Summer 2026
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          All Summer 2026 Tall Clothing
        </h1>
        <p className="text-ink-soft mt-1 text-sm leading-6 max-w-xs">
          Every pant from every category, all in one place.
        </p>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-20 sm:px-10">
        <div className="flex flex-col gap-4">
          {allProducts.map((product) => (
            <ProductCard key={product.href} product={product} />
          ))}
        </div>
      </main>

      <footer className="text-ink-faint mx-auto w-full max-w-2xl px-6 py-8 text-center text-xs sm:px-10">
        Tallish Girl
      </footer>
    </div>
  );
}
