import Link from "next/link";
import { categories } from "@/lib/products";

const nav = [
  ...categories.map((c) => ({
    title: c.title,
    subtitle: c.subtitle,
    href: c.href,
    count: c.products.length,
    coverImage: c.coverImage,
  })),
  {
    title: "Tall Pants — Master List",
    subtitle: "Summer 2026",
    href: "/master-list",
    count: categories
      .filter((c) => c.season === "Summer 2026")
      .reduce((sum, c) => sum + c.products.length, 0),
    coverImage: undefined,
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
          {nav.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="bg-chalk border border-sand/40 hover:border-sand hover:bg-bone group flex items-center gap-5 overflow-hidden rounded-2xl transition-colors"
            >
              {/* Cover image */}
              <div className="bg-bone h-36 w-24 shrink-0 overflow-hidden">
                {cat.coverImage ? (
                  <img
                    src={cat.coverImage}
                    alt={cat.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-sand/20" />
                )}
              </div>

              {/* Text */}
              <div className="flex min-w-0 flex-1 flex-col gap-1 py-4">
                <div className="text-sand text-xs font-semibold uppercase tracking-widest">
                  {cat.subtitle}
                  {cat.count > 0 && (
                    <span className="text-sand/70 ml-2">· {cat.count} items</span>
                  )}
                </div>
                <div className="text-ink text-lg font-semibold leading-snug tracking-tight">
                  {cat.title}
                </div>
              </div>

              {/* Arrow */}
              <div className="text-sand group-hover:text-ink-soft mr-6 shrink-0 transition-colors">
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
            </Link>
          ))}
        </div>
      </main>

      <footer className="text-ink-faint mx-auto w-full max-w-2xl px-6 py-8 text-center text-xs sm:px-10">
        Tallish Girl
      </footer>
    </div>
  );
}
