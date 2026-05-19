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
        image: "/products/jdy-tall-charcoal-pinstripes.png",
        href: "https://www.asos.com/us/jdy-tall/jdy-tall-pull-on-wide-leg-pants-in-charcoal-pinstripes/prd/209774276?ctaRef=my+orders",
        tags: ["extra wide leg", "36\" inseam", "lightweight", "workwear", "high waist or slouchy", "summer 2026"],
      },
      {
        name: "Tall Wide Leg Linen Look Pants in Brown",
        brand: "Only Tall",
        image: "/products/only-tall-linen-look-brown.png",
        href: "https://www.asos.com/us/only-tall/only-tall-wide-leg-linen-look-pants-in-brown/prd/209956241?ctaRef=my+orders",
        tags: ["31\" inseam", "linen pants", "brown", "summer 2026", "relaxed leg"],
      },
      {
        name: "Tall High Rise Wide Leg Tailored Pants in Cream",
        brand: "Only Tall",
        image: "/products/only-tall-tailored-cream.png",
        href: "https://www.asos.com/us/only-tall/only-tall-high-rise-wide-leg-tailored-pants-in-cream/prd/210353173?ctaRef=my+orders",
        tags: ["extra wide leg", "36\" inseam", "lightweight", "workwear", "high waist or slouchy", "summer 2026", "cream"],
      },
      {
        name: "Tall Dad Fit Tailored Pants in Chocolate",
        brand: "Vero Moda Tall",
        image: "/products/vero-moda-tall-chocolate.png",
        href: "https://www.asos.com/us/vero-moda-tall/vero-moda-tall-dad-fit-tailored-pants-in-chocolate/prd/208884796?ctaRef=my+orders",
        tags: ["brown", "extra wide leg", "32\" inseam", "lightweight", "workwear", "high waist or slouchy", "summer 2026"],
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
    title: "Tall American Tall Pants",
    subtitle: "Summer 2026",
    href: "/american-tall-pants",
    season: "Summer 2026",
    coverImage: "/products/american-tall-relaxed-pull-on-espresso.webp",
    products: [
      {
        name: "Relaxed Pull-On Pants in Espresso",
        brand: "American Tall",
        image: "/products/american-tall-relaxed-pull-on-espresso.webp",
        href: "https://americantall.com/products/relaxed-pull-on-pants-in-espresso",
        tags: ["summer 2026", "brown", "wide leg", "33\" inseam"],
      },
      {
        name: "Pull-On Breezy Wide Leg Pants in Espresso",
        brand: "American Tall",
        image: "/products/american-tall-breezy-wide-leg-espresso.webp",
        href: "https://americantall.com/products/pull-on-breezy-wide-leg-pant-in-espresso",
        tags: ["summer 2026", "athletic", "relaxed leg", "34\" inseam"],
      },
      {
        name: "Stretch Cotton Linen Blend Pleated Shorts in Black",
        brand: "American Tall",
        image: "/products/american-tall-pleated-shorts-black.webp",
        href: "https://americantall.com/products/stretch-cotton-linen-blend-pleated-shorts-in-black",
        tags: ["7.25\" inseam", "shorts", "workwear", "summer 2026"],
      },
      {
        name: "Long Sleeve Chambray Shirt in Light Blue",
        brand: "American Tall",
        image: "/products/american-tall-chambray-shirt-blue.webp",
        href: "https://americantall.com/products/long-sleeve-chambray-shirt-in-light-blue-chambray",
        tags: ["long sleeves", "summer 2026"],
      },
      {
        name: "Cotton Blend Tube Top in Espresso",
        brand: "American Tall",
        image: "/products/american-tall-tube-top-espresso.webp",
        href: "https://americantall.com/products/cotton-blend-tube-top-in-espresso",
        tags: ["summer 2026"],
      },
      {
        name: "Balance Bike Shorts in Black",
        brand: "American Tall",
        image: "/products/american-tall-bike-shorts-black.webp",
        href: "https://americantall.com/products/balance-bike-shorts-womens-in-black",
        tags: ["activewear", "summer 2026", "8\" inseam"],
      },
    ],
  },
  {
    title: "Tall Express Pants",
    subtitle: "Summer 2026",
    href: "/express-pants",
    season: "Summer 2026",
    coverImage: "/products/express-low-slung-ivory-baggy.avif",
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
    title: "Tall Gap Clothing",
    subtitle: "Summer 2026",
    href: "/gap-pants",
    season: "Summer 2026",
    coverImage: "/products/gap-cotton-gauze-barrel.avif",
    products: [
      {
        name: "Cotton Gauze Easy Barrel Pants",
        brand: "Gap",
        image: "/products/gap-cotton-gauze-barrel.avif",
        href: "https://www.gap.com/browse/product.do?pid=8776460320104&locale=en_US&vid=2#pdp-page-content",
        tags: ["barrel leg", "high or low rise", "brown", "linen", "summer 2026", "lightweight"],
      },
      {
        name: "Linen-Blend Easy Barrel Pants",
        brand: "Gap",
        image: "/products/gap-linen-blend-barrel.avif",
        href: "https://www.gap.com/browse/product.do?pid=8776270220104&locale=en_US&vid=2#pdp-page-content",
        tags: ["barrel leg", "high or low rise", "brown", "linen", "summer 2026", "lightweight"],
      },
      {
        name: "100% Linen Oversized Button-Down Shirt",
        brand: "Gap",
        image: "/products/gap-linen-oversized-shirt.avif",
        href: "https://www.gap.com/browse/product.do?pid=8829241420104&locale=en_US&vid=2#pdp-page-content",
        tags: ["summer 2026", "linen"],
      },
      {
        name: "GapFit Tech Windbreaker Jacket",
        brand: "Gap",
        image: "/products/gap-tech-windbreaker.avif",
        href: "https://www.gap.com/browse/product.do?pid=8746330020104&locale=en_US&vid=2#pdp-page-content",
        tags: ["activewear", "black", "summer 2026"],
      },
      {
        name: "GapFit Tech High Rise Running Shorts in Brown",
        brand: "Gap",
        image: "/products/gap-tech-shorts-1.avif",
        href: "https://www.gap.com/browse/product.do?pid=8746460620104&locale=en_US&vid=2#pdp-page-content",
        tags: ["activewear", "brown", "summer 2026"],
      },
      {
        name: "GapFit Tech High Rise Running Pants in Black",
        brand: "Gap",
        image: "/products/gap-tech-shorts-2.avif",
        href: "https://www.gap.com/browse/product.do?pid=8746460320104&locale=en_US&vid=2#pdp-page-content",
        tags: ["activewear", "black", "summer 2026"],
      },
    ],
  },
  {
    title: "Tall Brown Pants",
    subtitle: "Summer 2026",
    href: "/brown-pants",
    season: "Summer 2026",
    coverImage: "/products/gap-cotton-gauze-barrel.avif",
    products: [
      {
        name: "Cotton Gauze Easy Barrel Pants",
        brand: "Gap",
        image: "/products/gap-cotton-gauze-barrel.avif",
        href: "https://www.gap.com/browse/product.do?pid=8776460320104&locale=en_US&vid=2#pdp-page-content",
        tags: ["barrel leg", "high or low rise", "brown", "linen", "summer 2026", "lightweight"],
      },
      {
        name: "Linen-Blend Easy Barrel Pants",
        brand: "Gap",
        image: "/products/gap-linen-blend-barrel.avif",
        href: "https://www.gap.com/browse/product.do?pid=8776270220104&locale=en_US&vid=2#pdp-page-content",
        tags: ["barrel leg", "high or low rise", "brown", "linen", "summer 2026", "lightweight"],
      },
      {
        name: "Relaxed Pull-On Pants in Espresso",
        brand: "American Tall",
        image: "/products/american-tall-relaxed-pull-on-espresso.webp",
        href: "https://americantall.com/products/relaxed-pull-on-pants-in-espresso",
        tags: ["summer 2026", "brown", "wide leg", "33\" inseam"],
      },
      {
        name: "Pull-On Breezy Wide Leg Pants in Espresso",
        brand: "American Tall",
        image: "/products/american-tall-breezy-wide-leg-espresso.webp",
        href: "https://americantall.com/products/pull-on-breezy-wide-leg-pant-in-espresso",
        tags: ["summer 2026", "athletic", "relaxed leg", "34\" inseam"],
      },
    ],
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
