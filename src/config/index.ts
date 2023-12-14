export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      { name: 'Editor Picks', href: '#', imageSrc: '/nav/ui-kits/mixed.jpeg' },
      { name: 'New Arrivals', href: '#', imageSrc: '/nav/ui-kits/blue.jpeg' },
      { name: 'Best Sellers', href: '#', imageSrc: '/nav/ui-kits/purple.jpeg' },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      { name: 'Favorite Icon Picks', href: '#', imageSrc: '/nav/icons/picks.jpeg' },
      { name: 'New Arrivals', href: '#', imageSrc: '/nav/icons/new.jpeg' },
      { name: 'Best Sellers', href: '#', imageSrc: '/nav/icons/bestsellers.jpeg' },
    ],
  },
];
