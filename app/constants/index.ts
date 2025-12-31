export const MOTION_OPTIONS = {
  initial: {
    scale: 1.1,
    opacity: 0,
    filter: "blur(20px)",
  },
  whileInView: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
  },
  transition: {
    duration: 0.6,
  },
  inViewOptions: { once: true },
};
