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

export default function AsosPants() {
  return (
    <div className="bg-cream text-ink flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-2xl flex-col items-center gap-2 px-6 py-10 text-center sm:px-10">
        <div className="text-ink-faint text-xs font-medium uppercase tracking-[0.3em]">
          as seen in my videos
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          ASOS Tall Summer Pants
        </h1>
        <p className="text-ink-soft mt-1 text-sm leading-6 max-w-xs">
          Tall-girl tested, honest opinions.
        </p>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-20 sm:px-10">
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <a
              key={product.href}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chalk border border-sand/40 hover:border-sand hover:bg-bone group flex items-center gap-5 rounded-2xl p-4 transition-colors"
            >
              <div className="bg-bone relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <div className="text-ink-faint text-xs font-medium uppercase tracking-wider">
                  {product.brand}
                </div>
                <div className="text-ink text-base font-semibold leading-snug tracking-tight">
                  {product.name}
                </div>
              </div>

              <div className="text-sand group-hover:text-ink-soft shrink-0 transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer className="text-ink-faint mx-auto w-full max-w-2xl px-6 py-8 text-center text-xs sm:px-10">
        Tallish Girl
      </footer>
    </div>
  );
}
