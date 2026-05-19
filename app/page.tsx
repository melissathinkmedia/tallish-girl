import ProductCard from "@/components/ProductCard";

// Add products here — images go in /public/products/
const products = [
  {
    name: "Tall Tailored Unstructured Palazzo Pants in Oyster",
    brand: "ASOS Design",
    image: "/products/asos-palazzo-pants-oyster.jpg",
    href: "https://www.asos.com/us/asos-design/asos-design-tall-tailored-unstructured-palazzo-pants-in-oyster-part-of-a-set/prd/209383758?ctaRef=my+orders",
  },
  {
    name: "Tall Linen Mix Pull-On Pants in Stone",
    brand: "ASOS Design",
    image: "/products/asos-linen-pants-stone.jpg",
    href: "https://www.asos.com/us/asos-tall/asos-design-tall-linen-mix-pull-on-pants-in-stone/prd/207771354?ctaRef=my+orders",
  },
];

export default function Home() {
  return (
    <div className="bg-cream text-ink flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-2xl flex-col items-center gap-2 px-6 py-10 text-center sm:px-10">
        <div className="text-ink-faint text-xs font-medium uppercase tracking-[0.3em]">
          as seen in my videos
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Tallish Girl
        </h1>
        <p className="text-ink-soft mt-1 text-sm leading-6 max-w-xs">
          Everything I&apos;ve linked — tall-girl tested, honest opinions.
        </p>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-20 sm:px-10">
        <div className="flex flex-col gap-4">
          {products.map((product) => (
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
