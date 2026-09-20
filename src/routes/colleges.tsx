import { createFileRoute } from "@tanstack/react-router";
import { InstitutionPage } from "@/components/institution-page";
import { colleges } from "@/content/institutions";

export const Route = createFileRoute("/colleges")({
  head: () => ({
    meta: [
      { title: colleges.meta.title },
      { name: "description", content: colleges.meta.description },
      { property: "og:title", content: colleges.meta.title },
      { property: "og:description", content: colleges.meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <InstitutionPage content={colleges} />,
});
