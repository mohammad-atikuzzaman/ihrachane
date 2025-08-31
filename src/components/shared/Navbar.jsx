// components/Navbar.jsx
import NavbarClient from "./NavbarClient";

const staticMenus = [
  { url: "/", path: "Home" },
  { url: "/home/sourcing", path: "Sourcing" },
  { url: "/dashboard", path: "Dashboard" },
];

const fetchCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
      next: { revalidate: 60 }, // ISR
    });
    const data = await res.json();
    if (data.success) {
      return data.data.map((cat) => ({
        url: `/home/${cat.name.toLowerCase().replace(/\s+/g, "-")}`,
        path: cat.name,
      }));
    }
    return [];
  } catch {
    return [];
  }
};

export default async function Navbar() {
  const categories = await fetchCategories();
  const menus = [...staticMenus, ...categories];

  // Pass menus to client component
  return <NavbarClient menus={menus} />;
}
