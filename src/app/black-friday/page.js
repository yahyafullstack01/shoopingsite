import BlackFridayPageClient from "./BlackFridayPageClient";

export const metadata = {
  title: "Black Friday % | Latore Atelier",
  description:
    "Black Friday offers at Latore Atelier — selected women's clothing with limited-time deals.",
  alternates: { canonical: "https://www.latore.store/black-friday" },
  openGraph: {
    title: "Black Friday % | Latore Atelier",
    description:
      "Selected atelier pieces with Black Friday offers at Latore Atelier.",
    url: "https://www.latore.store/black-friday",
    type: "website",
  },
};

export default function BlackFridayPage() {
  return <BlackFridayPageClient />;
}
