// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://github.com/Abhi-Bhat18/mailman-docs",
  integrations: [
    starlight({
      title: "Mailman",
      social: {
        github: "https://github.com/Mailman-Org/mailman",
      },
      sidebar: [
        {
          label: "Getting started",
          items: [
            { label: "Introduction", slug: "introduction" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Configuration", slug: "getting-started/configuration" },
          ],
        },
        {
          label: "Concepts",
          items: [
            { label: "Campaigns", slug: "features/campaigns" },
            { label: "Contact List", slug: "features/contact-lists" },
            { label: "Templates", slug: "features/templates" },
            { label: "Contacts", slug: "features/contacts" },
            { label: "Roles", slug: "features/roles" },
          ],
        },
        {
          label: "API Reference",
          autogenerate: { directory: "api-references" },
        },
      ],
    }),
  ],
});
