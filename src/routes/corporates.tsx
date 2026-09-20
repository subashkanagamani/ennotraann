import { createFileRoute } from "@tanstack/react-router";
import { InstitutionPage } from "@/components/institution-page";
import { corporates } from "@/content/institutions";

export const Route = createFileRoute("/corporates")({
  head: () => ({
    meta: [
      { title: corporates.meta.title },
      { name: "description", content: corporates.meta.description },
      { property: "og:title", content: corporates.meta.title },
      { property: "og:description", content: corporates.meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <InstitutionPage content={corporates} />,
});
