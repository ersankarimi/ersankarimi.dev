export default defineAppConfig({
  global: {
    picture: {
      src: "/profile.jpg",
      alt: "Ersan Profile Picture",
    },
    meetingLink: "https://calendly.com/ersankarimi-dev/30min",
    email: "ersankarimi.dev@gmail.com",
    available: true,
  },
  ui: {
    colors: {
      primary: "violet",
      neutral: "neutral",
    },
    pageHero: {
      slots: {
        container: "py-18 sm:py-24 lg:py-32",
        title: "mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl",
        description: "mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted",
      },
    },
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        "icon": "i-simple-icons-readdotcv",
        "to": "https://drive.google.com/file/d/1cXnL4p0aGOdC758f29qXsVbYlT0_wo-G/view?usp=sharing",
        "target": "_blank",
        "aria-label": "Link to Resume",
      },
      {
        "icon": "i-simple-icons-github",
        "to": "https://github.com/ersankarimi",
        "target": "_blank",
        "aria-label": "GitHub Profile",
      },
      {
        "icon": "i-simple-icons-linkedin",
        "to": "https://www.linkedin.com/in/ersankarimi/",
        "target": "_blank",
        "aria-label": "LinkedIn Profile",
      },
      {
        "icon": "i-simple-icons-youtube",
        "to": "https://youtube.com/c/HajiKoding",
        "target": "_blank",
        "aria-label": "YouTube Channel",
      },
    ],
  },
});
