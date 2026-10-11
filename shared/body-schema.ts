import { z } from "@nuxt/content";

const text = z.string().min(1);
const exercise = z.object({
  name: text,
  url: z.string().url(),
  dose: text,
  equipment: text,
  notes: z.array(text),
  alternative: z.object({
    name: text,
    url: z.string().url(),
    dose: text,
    equipment: text,
    when: text,
  }).optional(),
});

export const bodySchema = z.object({
  title: text,
  description: text,
  summary: z.array(text),
  equipment: z.array(text),
  schedule: z.array(z.object({
    id: text,
    day: text,
    activity: text,
    description: text,
    duration: text,
    sessionId: text.optional(),
  })).min(1),
  sessions: z.array(z.object({
    id: text,
    title: text,
    focus: text,
    duration: text,
    exercises: z.array(exercise).min(1),
    notes: z.array(text),
    coreId: text.optional(),
    coreOptional: z.boolean(),
  })).min(1),
  core: z.array(z.object({
    id: text,
    title: text,
    description: text,
    exercises: z.array(exercise).min(1),
  })),
  sessionGuidance: z.array(text),
  guides: z.array(z.object({
    id: text,
    title: text,
    paragraphs: z.array(text),
    steps: z.array(text),
  })),
  progression: z.object({
    title: text,
    phases: z.array(z.object({
      id: text,
      label: text,
      title: text,
      description: text,
    })).min(1),
    notes: z.array(text),
  }),
  recovery: z.array(z.object({
    title: text,
    description: text,
  })),
  logging: z.object({
    description: text,
    fields: z.array(text),
    notes: z.array(text),
  }),
  safety: z.array(text),
  references: z.array(z.object({
    title: text,
    url: z.string().url(),
    description: text,
  })),
});
