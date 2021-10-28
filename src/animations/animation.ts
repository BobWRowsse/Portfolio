export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export const itemFadeIn = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export const opacityFY = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};
