<script setup lang="ts">
withDefaults(
  defineProps<{
    name?: string;
    role?: string;
    tagline?: string;
    location?: string;
    website?: string;
    photo?: string;
    accent?: string;

    siteUrl?: string;
    linkedinUrl?: string;
    githubUrl?: string;
  }>(),
  {
    name: "Ersan Karimi",
    role: "Front-End Developer",
    tagline:
      "I build clean, responsive web interfaces and ship improvements with care—one step at a time.",
    location: "Balikpapan, Indonesia",
    website: "ersankarimi.dev",
    photo: "https://avatars.githubusercontent.com/u/73420137?v=4",
    accent: "#BD93F9",

    siteUrl: "https://ersankarimi.vercel.app",
    linkedinUrl: "https://linkedin.com/in/ersankarimi",
    githubUrl: "https://github.com/ersankarimi",
  },
);
</script>

<template>
  <!-- Root -->
  <div class="w-full h-full flex items-center justify-center" style="background:#0b0b10;">
    <!-- Card -->
    <div
      class="relative w-300 h-157.5 overflow-hidden rounded-[56px] flex"
      style="background: radial-gradient(1200px 630px at 20% 15%, #2b2d42 0%, #1b1c27 48%, #0b0b10 100%);"
    >
      <!-- Soft glow -->
      <div class="absolute inset-0 flex">
        <div
          class="absolute -right-44 -top-52 w-183 h-183 rounded-full blur-3xl opacity-20"
          :style="{ background: accent }"
        />
        <div
          class="absolute inset-[20px] rounded-[44px]"
          style="border:1px solid rgba(248,248,242,0.10);"
        />
      </div>

      <!-- Content -->
      <div class="relative w-full h-full flex flex-col px-23 py-21">
        <!-- Main row -->
        <div class="flex flex-1 items-center gap-13">
          <!-- Avatar -->
          <div class="flex items-center">
            <div
              class="w-43 h-43 rounded-full p-1.75 flex"
              :style="{ background: `linear-gradient(135deg, ${accent} 0%, rgba(189,147,249,0.12) 55%, rgba(0,0,0,0) 100%)` }"
            >
              <div class="w-full h-full rounded-full flex p-1.75" style="background: rgba(18,18,26,0.96);">
                <img
                  width="158"
                  height="158"
                  class="w-full h-full rounded-full object-cover"
                  style="background:#44475A;"
                  alt="Profile photo"
                  :src="photo"
                >
              </div>
            </div>
          </div>

          <!-- Text -->
          <div class="flex-1 flex flex-col" style="color:#F8F8F2;">
            <div class="text-[76px] font-black leading-[1.02] tracking-[-0.03em]">
              {{ name }}
            </div>

            <div class="mt-3.5 text-[28px] font-semibold" style="color: rgba(248,248,242,0.86);">
              {{ role }}
            </div>

            <div class="mt-4.5 text-[22px] leading-[1.55] max-w-210" style="color: rgba(248,248,242,0.70);">
              {{ tagline }}
            </div>
          </div>
        </div>

        <!-- Footer row -->
        <div class="flex items-end justify-between">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col items-end gap-0.5">
              <div class="text-4.5 font-medium" style="color: rgba(248,248,242,0.60);">
                {{ location }}
              </div>

              <!-- <div class="text-[20px] font-bold" :style="{ color: accent }">
                {{ website }}
              </div> -->
            </div>

            <!-- Links row -->
            <div class="flex items-center gap-6">
              <!-- Website -->
              <a :href="siteUrl" class="flex items-center gap-2">
                <!-- Globe icon (lucide-like) -->
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  :stroke="accent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span class="text-[16px] font-semibold" style="color: rgba(248,248,242,0.78);">
                  ersankarimi.vercel.app
                </span>
              </a>

              <!-- LinkedIn -->
              <a :href="linkedinUrl" class="flex items-center gap-2">
                <!-- LinkedIn icon -->
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  :stroke="accent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span class="text-[16px] font-semibold" style="color: rgba(248,248,242,0.78);">
                  linkedin.com/in/ersankarimi
                </span>
              </a>

              <!-- GitHub -->
              <a :href="githubUrl" class="flex items-center gap-2">
                <!-- GitHub icon (simple) -->
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  :stroke="accent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                >
                  <path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.38 13.38 0 0 0-5 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span class="text-[16px] font-semibold" style="color: rgba(248,248,242,0.78);">
                  github.com/ersankarimi
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
