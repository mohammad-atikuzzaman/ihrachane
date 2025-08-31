// utils/menus.js
export const staticMenus = [
  {
    url: "/",
    path: "Home",
  },
  {
    url: "/home/sourcing",
    path: "Sourcing",
  },
  {
    url: "/warehouse",
    path: "Warehouse",
  },
  {
    url: "/dashboard",
    path: "Dashboard",
  },
];

// Dynamic menu fetcher
export async function getMenus() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, {
      cache: "no-store", // fresh data
    });
    const data = await res.json();

    const categoryMenus = data?.data?.map((cat) => ({
      url: `/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`, // slug বানানো হলো
      path: cat.name,
    }));

    return [...staticMenus, ...(categoryMenus || [])];
  } catch (error) {
    console.error("Failed to fetch categories", error);
    return staticMenus;
  }
}
