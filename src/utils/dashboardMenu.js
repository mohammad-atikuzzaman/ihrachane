const icons = {
  dashboard: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
    </svg>
  ),
  apps: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>
    </svg>
  ),
  categories: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  ),
  services: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  ),
  client: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="4"/><path d="M6 21v-2a6 6 0 0112 0v2"/>
    </svg>
  ),
  partner: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  testimonial: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polygon points="12 2 15 10 23 10 17 14 19 22 12 18 5 22 7 14 1 10 9 10 12 2"/>
    </svg>
  ),
  contents: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 19.5A2.5 2.5 0 006.5 22h11a2.5 2.5 0 002.5-2.5V6l-7-4H6.5A2.5 2.5 0 004 4.5v15z"/>
    </svg>
  ),
  about: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 21h18V7H3v14zM9 21V3h6v18"/>
    </svg>
  ),
  link: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 00-7.07-7.07l-1.41 1.41"/>
      <path d="M14 11a5 5 0 00-7.07 0l-1.41 1.41a5 5 0 007.07 7.07l1.41-1.41"/>
    </svg>
  ),
  contact: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22 16.92V19a2 2 0 01-2.18 2 19.72 19.72 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.72 19.72 0 012 6.18 2 2 0 014 4h2.09a2 2 0 012 1.72c.12.81.37 1.6.73 2.34a2 2 0 01-.45 2.11l-.7.71a16 16 0 006 6l.71-.7a2 2 0 012.11-.45c.74.36 1.53.61 2.34.73A2 2 0 0122 16.92z"/>
    </svg>
  ),
};

export const menuItems = [
  { name: "Dashboard", icon: icons.dashboard, path: "/dashboard" },
  { name: "APPS", icon: icons.apps, isHeader: true },
  {
    name: "Categories",
    icon: icons.categories,
    path: "/dashboard/categories",
    hasSubmenu: true,
    subItems: [
      { name: "Category List", icon: icons.categories, path: "/dashboard/categories/list" },
      { name: "Sub-Category List", icon: icons.categories, path: "/dashboard/categories/sub-list" },
      { name: "Sub-Category Service", icon: icons.services, path: "/dashboard/categories/service" },
    ],
  },
  { name: "Services", icon: icons.services, path: "/dashboard/services" },
  { name: "Client", icon: icons.client, path: "/dashboard/client" },
  { name: "Partner", icon: icons.partner, path: "/dashboard/partner" },
  { name: "Testimonial", icon: icons.testimonial, path: "/dashboard/testimonial" },
  { name: "CLASSIC CONTENTS", icon: icons.contents, isHeader: true },
  {
    name: "About Company",
    icon: icons.about,
    path: "/dashboard/about",
    hasSubmenu: true,
    subItems: [
      { name: "Company Details", icon: icons.about, path: "/dashboard/about/details" },
      { name: "Social Links", icon: icons.link, path: "/dashboard/about/social-links" },
    ],
  },
  { name: "Contact Form", icon: icons.contact, path: "/dashboard/contact" },
];
