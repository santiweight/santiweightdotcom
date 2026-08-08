import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        draft: fields.checkbox({ label: "Draft", defaultValue: false }),
        date: fields.date({ label: "Date" }),
        description: fields.text({ label: "Description" }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
