export const getApi = async (path) => {
  const base =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_BASE_URL // server side
      : ""; // client side (relative path)

  const res = await fetch(`${base}${path}`, {
    next: { revalidate: 60 }, // ISR: refresh data every 60s
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}, status: ${res.status}`);
  }

  return res.json();
};
