export type Product = {
  name: string;
  brand: string;
  image: string;
  href: string;
  tags?: string[];
};

export type Category = {
  title: string;
  subtitle: string;
  href: string;
  season: string;
  coverImage?: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    title: "Tall ASOS Pants",
    subtitle: "Summer 2026",
    href: "/asos-pants",
    season: "Summer 2026",
    coverImage: "/products/asos-palazzo-pants-oyster.jpg.avif",
    products: [
      {
        name: "Tall Tailored Unstructured Palazzo Pants in Oyster",
        brand: "ASOS Design",
        image: "/products/asos-palazzo-pants-oyster.jpg.avif",
        href: "https://www.asos.com/us/asos-design/asos-design-tall-tailored-unstructured-palazzo-pants-in-oyster-part-of-a-set/prd/209383758?ctaRef=my+orders",
        tags: ["36\" inseam", "extra wide leg", "summer", "satin/silk pants"],
      },
      {
        name: "Tall Linen Mix Pull-On Pants in Stone",
        brand: "ASOS Design",
        image: "/products/asos-linen-pants-stone.jpg.avif",
        href: "https://www.asos.com/us/asos-tall/asos-design-tall-linen-mix-pull-on-pants-in-stone/prd/207771354?ctaRef=my+orders",
        tags: ["36\" inseam", "shrinks", "wide leg", "summer", "linen pants"],
      },
      {
        name: "Tall Pull-On Wide Leg Pants in Charcoal Pinstripes",
        brand: "JDY Tall",
        image: "/products/jdy-tall-charcoal-pinstripes.jpg",
        href: "https://www.asos.com/us/jdy-tall/jdy-tall-pull-on-wide-leg-pants-in-charcoal-pinstripes/prd/209774276?ctaRef=my+orders",
        tags: ["extra wide leg", "36\" inseam", "lightweight", "workwear", "high waist or slouchy", "summer 2026"],
      },
      {
        name: "Tall Wide Leg Linen Look Pants in Brown",
        brand: "Only Tall",
        image: "/products/only-tall-linen-look-brown.jpg",
        href: "https://www.asos.com/us/only-tall/only-tall-wide-leg-linen-look-pants-in-brown/prd/209956241?ctaRef=my+orders",
        tags: ["33\" inseam", "linen pants", "brown", "summer 2026", "relaxed leg"],
      },
      {
        name: "Tall High Rise Wide Leg Tailored Pants in Cream",
        brand: "Only Tall",
        image: "/products/only-tall-tailored-cream.jpg",
        href: "https://www.asos.com/us/only-tall/only-tall-high-rise-wide-leg-tailored-pants-in-cream/prd/210353173?ctaRef=my+orders",
        tags: ["extra wide leg", "36\" inseam", "lightweight", "workwear", "high waist or slouchy", "summer 2026", "cream"],
      },
      {
        name: "Tall Dad Fit Tailored Pants in Chocolate",
        brand: "Vero Moda Tall",
        image: "/products/vero-moda-tall-chocolate.jpg",
        href: "https://www.asos.com/us/vero-moda-tall/vero-moda-tall-dad-fit-tailored-pants-in-chocolate/prd/208884796?ctaRef=my+orders",
        tags: ["brown", "extra wide leg", "36\" inseam", "lightweight", "workwear", "high waist or slouchy", "summer 2026"],
      },
    ],
  },
  {
    title: "Tall Revolve Pants",
    subtitle: "Summer 2026",
    href: "/revolve-pants",
    season: "Summer 2026",
    coverImage: "/products/all-the-ways-larissa-satin-taupe.avif",
    products: [
      {
        name: "Larissa Satin Pant in Taupe",
        brand: "All The Ways",
        image: "/products/all-the-ways-larissa-satin-taupe.avif",
        href: "https://www.revolve.com/all-the-ways-larissa-satin-pant-in-taupe/dp/AAYR-WP31/",
        tags: ["silk/satin pants", "high waist or slouchy", "relaxed leg", "cream", "brown", "summer 2026"],
      },
    ],
  },
  {
    title: "Tall Express Pants",
    subtitle: "Summer 2026",
    href: "/express-pants",
    season: "Summer 2026",
    products: [
      {
        name: "Low Slung Ivory Baggy Jeans",
        brand: "Express",
        image: "/products/express-low-slung-ivory-baggy.avif",
        href: "https://www.express.com/clothing/men/Low-Slung-Ivory-Baggy-Jeans/pro/06713264/color/Ivory/e/regular/",
        tags: ["low rise", "31.5\" inseam", "relaxed leg", "cream", "summer 2026"],
      },
      {
        name: "Low Slung Medium Wash Baggy Jeans",
        brand: "Express",
        image: "/products/express-low-slung-medium-wash-baggy.avif",
        href: "https://www.express.com/clothing/men/Low-Slung-Medium-Wash-Baggy-Jeans/pro/06712997/color/Medium%20Wash/e/regular/",
        tags: ["wide leg", "low rise", "31.5\" inseam", "summer 2026"],
      },
      {
        name: "High Waisted Light Wash Relaxed Wide Leg Jeans",
        brand: "Express",
        image: "/products/express-high-waist-light-wash-wide-leg.avif",
        href: "https://www.express.com/clothing/men/High-Waisted-Light-Wash-Relaxed-Wide-Leg-Jeans/pro/07029411/color/Light%20wash/e/regular/",
        tags: ["wide leg", "high rise", "33\" inseam", "summer 2026"],
      },
      {
        name: "High Waisted Relaxed Wide Leg Stretch Jeans",
        brand: "Express",
        image: "/products/express-high-waist-wide-leg-stretch.avif",
        href: "https://www.express.com/clothing/men/High-Waisted-Relaxed-Wide-Leg-Stretch-Jeans/pro/07023272/color/Light%20Wash/e/regular/",
        tags: ["wide leg", "high rise", "33.5\" inseam", "summer 2026"],
      },
    ],
  },
  {
    title: "Tall Brown Pants",
    subtitle: "Summer 2026",
    href: "/brown-pants",
    season: "Summer 2026",
    products: [],
  },
  {
    title: "Tall Amazon Pants",
    subtitle: "Summer 2026",
    href: "/amazon-pants",
    season: "Summer 2026",
    products: [],
  },
  {
    title: "Tall Silk & Satin Pants",
    subtitle: "Summer 2026",
    href: "/silk-satin-pants",
    season: "Summer 2026",
    coverImage: "/products/all-the-ways-larissa-satin-taupe.avif",
    products: [
      {
        name: "Larissa Satin Pant in Taupe",
        brand: "All The Ways",
        image: "/products/all-the-ways-larissa-satin-taupe.jpg",
        href: "https://www.revolve.com/all-the-ways-larissa-satin-pant-in-taupe/dp/AAYR-WP31/",
        tags: ["silk/satin pants", "high waist or slouchy", "relaxed leg", "cream", "brown", "summer 2026"],
      },
    ],
  },
];
