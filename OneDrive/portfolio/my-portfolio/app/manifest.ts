import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chinmayi B | AI & Software Portfolio",
    short_name: "Chinmayi",
    description:
      "Portfolio of Chinmayi B featuring AI-driven systems, machine learning projects, and scalable software engineering work.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f5ef",
    theme_color: "#0f172a",
    lang: "en",
  };
}
