import type { NavigationMenuItem } from "@nuxt/ui";

export const navLinks: NavigationMenuItem[] = [
  {
    label: "Home",
    icon: "i-lucide-home",
    to: "/",
  },
  {
    label: "Experience",
    icon: "i-lucide-briefcase",
    to: "/experience",
  },
  {
    label: "About",
    icon: "i-lucide-user",
    to: "/about",
  },
];
