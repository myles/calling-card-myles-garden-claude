import type { APIRoute } from "astro";

import card from "@/data/card";

// Escape the characters vCard treats as delimiters in text values.
const escape = (value: string): string => value.replace(/([\\,;])/g, "\\$1");

export const GET: APIRoute = () => {
  const [givenName = "", ...rest] = card.name.split(" ");
  const familyName = rest.join(" ");

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escape(familyName)};${escape(givenName)};;;`,
    `FN:${escape(card.name)}`,
    `EMAIL;TYPE=INTERNET:${card.email}`,
    `URL:${card.url}`,
    ...card.links.map(({ href }) => `URL:${href}`),
    `NOTE:${escape(card.tagline)}`,
    "END:VCARD",
  ];

  return new Response(`${lines.join("\r\n")}\r\n`, {
    headers: { "Content-Type": "text/vcard; charset=utf-8" },
  });
};
