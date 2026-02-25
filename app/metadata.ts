import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Just Pour",
  description: "Your GSAP project",
  icons: {
    icon: [
      { url: '/images/fav.ico', type: 'image/x-icon' },
      { url: '/images/logo.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/images/fav.ico',
    shortcut: '/images/fav.ico',
  },
};
