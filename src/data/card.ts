export type CardLink = {
  label: string;
  href: string;
  rel?: string;
};

export type Card = {
  name: string;
  greeting: string;
  tagline: string;
  location: string;
  email: string;
  url: string;
  links: CardLink[];
};

const card: Card = {
  name: "Myles Braithwaite",
  greeting: "hello, my name is",
  tagline: "Tending a small digital garden on the IndieWeb.",
  location: "Toronto, Ontario",
  email: "myles@myles.garden",
  url: "https://myles.garden",
  links: [{ label: "GitHub", href: "https://github.com/myles", rel: "me" }],
};

export default card;
