import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://dikaharis.com/",
  author: "Dika Haris Abdurahman",
  desc: "Personal blog dikaharis.com",
  title: "dikaharis.com",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/dikahariss",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/dikahariss",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/dikahariss",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/dikahariss",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:dika.webmaster@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/dikahariss",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@dikahariss?sub_confirmation=1",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/dikahariss",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
];
