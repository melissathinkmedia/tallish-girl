"use client";

type Product = {
  name: string;
  brand: string;
  image: string;
  href: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-chalk border border-sand/40 hover:border-sand hover:bg-bone group flex items-center gap-5 rounded-2xl p-4 transition-colors"
    >
      <div className="bg-bone relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
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
  );
}
