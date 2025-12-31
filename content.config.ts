import { defineCollection, defineContentConfig, z } from "@nuxt/content";

function createBaseSchema() {
  return z.object({
    title: z.string(),
    description: z.string(),
  });
}

function createButtonSchema() {
  return z.object({
    label: z.string(),
    icon: z.string().optional(),
    to: z.string().optional(),
    color: z.enum(["primary", "neutral", "success", "warning", "error", "info"]).optional(),
    size: z.enum(["xs", "sm", "md", "lg", "xl"]).optional(),
    variant: z.enum(["solid", "outline", "subtle", "soft", "ghost", "link"]).optional(),
    target: z.enum(["_blank", "_self"]).optional(),
  });
}

function createImageSchema() {
  return z.object({
    src: z.string().editor({ input: "media" }),
    alt: z.string(),
  });
}

function createAuthorSchema() {
  return z.object({
    name: z.string(),
    description: z.string().optional(),
    username: z.string().optional(),
    twitter: z.string().optional(),
    to: z.string().optional(),
    avatar: createImageSchema().optional(),
  });
}

function createTestimonialSchema() {
  return z.object({
    quote: z.string(),
    author: createAuthorSchema(),
  });
}

export default defineContentConfig({
  collections: {
    // Index/Landing Page
    index: defineCollection({
      type: "page",
      source: "index.yml",
      schema: z.object({
        hero: z.object({
          links: z.array(createButtonSchema()),
          images: z.array(createImageSchema()),
        }),
        about: createBaseSchema().extend({
          links: z.array(createButtonSchema()),
        }),
        experience: createBaseSchema().extend({
          items: z.array(
            z.object({
              slug: z.string(),
              label: z.string().optional(),
              headline: z.string(),
              subheadline: z.string(),

              company: z.object({
                "name": z.string(),
                "url": z.string().url(),
                "logo": z.string(), // or .editor({ input: "icon" }) if your editor supports it
                "slug": z.string(),
                "color-dark": z.string(),
                "color-light": z.string(),
              }),

              // expanded content
              summary: z.string().optional(),

              roles: z.array(
                z.object({
                  title: z.string(),
                  period: z.string(),
                  meta: z.string().optional(),
                  description: z.string().optional(),
                  highlights: z.array(z.string()).optional(),
                  links: z.array(
                    z.object({
                      label: z.string(),
                      url: z.string().url(),
                    }),
                  ).optional(),
                }),
              ).optional(),
            }),
          ),
        }),

        testimonials: z.array(createTestimonialSchema()),
        blog: createBaseSchema(),
        faq: createBaseSchema().extend({
          categories: z.array(
            z.object({
              title: z.string().nonempty(),
              questions: z.array(
                z.object({
                  label: z.string().nonempty(),
                  content: z.string().nonempty(),
                }),
              ),
            }),
          ),
        }),
      }),
    }),

    // About Page
    about: defineCollection({
      type: "page",
      source: "about.yml",
      schema: z.object({
        content: z.object({}),
      }),
    }),
  },
});
