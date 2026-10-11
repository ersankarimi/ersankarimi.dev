<script setup lang="ts">
import type { BodyCollectionItem } from "@nuxt/content";

definePageMeta({ layout: "body" });

const { data: page } = await useAsyncData("body-program", () => queryCollection("body").first());

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Program tidak tersedia", fatal: true });
}

const program = computed(() => page.value!);

// Content references must remain valid when the active YAML program changes.
const idGroups = [program.value.schedule, program.value.sessions, program.value.core, program.value.guides, program.value.progression.phases];
const duplicateIds = idGroups.some(items => new Set(items.map(item => item.id)).size !== items.length);
const invalidSession = program.value.schedule.some(day => day.sessionId && !program.value.sessions.some(session => session.id === day.sessionId));
const invalidCore = program.value.sessions.some(session => session.coreId && !program.value.core.some(core => core.id === session.coreId));

if (duplicateIds || invalidSession || invalidCore || !program.value.sessions.length) {
  throw createError({ statusCode: 500, statusMessage: "Referensi program tidak valid", fatal: true });
}

const selectedSession = ref(program.value.sessions[0]!.id);
const selectedDay = ref<string | null>(null);
const dayDetail = computed(() => program.value.schedule.find(day => day.id === selectedDay.value));
const sessionItems = computed(() => program.value.sessions.map(session => ({
  label: session.title,
  value: session.id,
  session,
})));

useHead({ htmlAttrs: { lang: "id" } });
useSeoMeta({
  title: () => program.value.title,
  description: () => program.value.description,
  ogTitle: () => program.value.title,
  ogDescription: () => program.value.description,
  ogLocale: "id_ID",
  robots: "noindex, nofollow",
});

function coreFor(session: BodyCollectionItem["sessions"][number]) {
  return program.value.core.find(core => core.id === session.coreId);
}

function selectSession(value: string | number) {
  selectedSession.value = String(value);
  selectedDay.value = program.value.schedule.find(day => day.sessionId === value)?.id ?? null;
}

async function selectDay(day: BodyCollectionItem["schedule"][number]) {
  selectedDay.value = day.id;
  if (!day.sessionId) return;
  selectedSession.value = day.sessionId;
  await nextTick();
  const target = document.getElementById("sesi");
  target?.focus({ preventScroll: true });
  target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
}
</script>

<template>
  <div v-if="page" class="min-w-0 pb-10 sm:pb-16">
    <a href="#jadwal" class="sr-only focus:not-sr-only focus:inline-block focus:p-3 print:hidden">Lewati ke jadwal</a>
    <PBodyHeader :program="program" />

    <nav aria-label="Bagian program" class="sticky top-0 z-20 -mx-4 mb-7 border-y border-default bg-default/95 px-4 py-3 backdrop-blur-sm sm:mx-0 sm:px-0 print:hidden">
      <ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-toned">
        <li><a href="#jadwal" class="hover:text-primary">Jadwal</a></li>
        <li><a href="#sesi" class="hover:text-primary">Sesi</a></li>
        <li><a href="#panduan" class="hover:text-primary">Panduan</a></li>
        <li><a href="#progresi" class="hover:text-primary">Progresi</a></li>
        <li><a href="#pemulihan" class="hover:text-primary">Pemulihan</a></li>
        <li><a href="#catatan" class="hover:text-primary">Catatan</a></li>
      </ul>
    </nav>

    <div class="space-y-10 sm:space-y-12">
      <PBodySchedule :days="program.schedule" :selected-day="selectedDay" @select="selectDay" />
      <div v-if="dayDetail && !dayDetail.sessionId" class="rounded-lg border border-primary/30 bg-primary/5 p-4 print:hidden" role="status">
        <p class="font-medium text-highlighted">{{ dayDetail.day }} · {{ dayDetail.activity }}</p>
        <p class="mt-1 text-sm text-toned">{{ dayDetail.description }} · {{ dayDetail.duration }}</p>
      </div>

      <section id="sesi" tabindex="-1" class="scroll-mt-28 rounded-sm focus-visible:outline-2 focus-visible:outline-primary" aria-labelledby="sessions-title">
        <h2 id="sessions-title" class="text-xl font-semibold text-highlighted">Sesi latihan</h2>
        <div class="mt-3 space-y-2 text-sm leading-relaxed text-toned">
          <p v-for="note in program.sessionGuidance" :key="note">{{ note }}</p>
        </div>
        <UTabs
          v-model="selectedSession"
          :items="sessionItems"
          variant="link"
          class="mt-5 min-w-0 print:hidden"
          :ui="{
            list: 'w-full overflow-x-auto',
            trigger: 'shrink-0 min-h-11 min-w-max',
            content: 'pt-5',
          }"
          @update:model-value="selectSession"
        >
          <template #content="{ item }">
            <PBodySession :session="item.session" :core="coreFor(item.session)" />
          </template>
        </UTabs>
        <div class="hidden space-y-8 print:block">
          <div v-for="session in program.sessions" :key="session.id" class="mt-5">
            <PBodySession :session="session" :core="coreFor(session)" />
          </div>
        </div>
      </section>

      <PBodyGuides :guides="program.guides" :equipment="program.equipment" />
      <PBodyProgression :progression="program.progression" />

      <section id="pemulihan" class="scroll-mt-28" aria-labelledby="recovery-title">
        <h2 id="recovery-title" class="text-xl font-semibold text-highlighted">Pemulihan dan kardio</h2>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <article v-for="item in program.recovery" :key="item.title" class="rounded-lg border border-default p-4">
            <h3 class="font-medium text-highlighted">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-toned">{{ item.description }}</p>
          </article>
        </div>
      </section>

      <section id="catatan" class="scroll-mt-28" aria-labelledby="logging-title">
        <h2 id="logging-title" class="text-xl font-semibold text-highlighted">Catatan latihan</h2>
        <p class="mt-3 text-sm leading-relaxed text-toned">{{ program.logging.description }}</p>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-toned">
          <li v-for="field in program.logging.fields" :key="field">{{ field }}</li>
        </ul>
        <p v-for="note in program.logging.notes" :key="note" class="mt-3 text-sm leading-relaxed text-toned">{{ note }}</p>
      </section>

      <aside class="body-print-card rounded-lg border border-default bg-elevated/50 p-4 sm:p-5" aria-labelledby="safety-title">
        <h2 id="safety-title" class="font-semibold text-highlighted">Latih dengan aman</h2>
        <p v-for="note in program.safety" :key="note" class="mt-2 text-sm leading-relaxed text-toned">{{ note }}</p>
      </aside>

      <footer class="border-t border-default pt-5">
        <h2 class="text-sm font-semibold text-highlighted">Referensi</h2>
        <ul class="mt-3 space-y-3 text-sm">
          <li v-for="reference in program.references" :key="reference.url">
            <a :href="reference.url" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-4">
              {{ reference.title }}<span class="sr-only"> — buka tab baru</span>
            </a>
            <p class="mt-1 text-muted">{{ reference.description }}</p>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>
