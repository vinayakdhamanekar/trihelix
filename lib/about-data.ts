/** People, straight out of TRX About Us 3.0.fig — names, roles and the row each
 *  one belongs to. Portraits are the originals from the 10-Sep drive folder. */

export type Person = { img: string; name: string; role: string };

export const leaders: Person[] = [
  { img: "/assets/p-lc.webp", name: "L C Singh (LC)", role: "FOUNDER & EXECUTIVE CHAIRMAN" },
  { img: "/assets/p-minoo.webp", name: "Minoo Dastur", role: "DIRECTOR, PRESIDENT & CEO" },
  { img: "/assets/p-shubhabrata.webp", name: "Shubhabrata Banerjee", role: "DIRECTOR, GROUP CFO AND EVP" },
  { img: "/assets/p-munishk.webp", name: "Munishk Gupta", role: "GROUP COO" },
  { img: "/assets/p-vineet.webp", name: "Vineet Bahal", role: "PRESIDENT - CORPORATE STRATEGY, TECHNOLOGY & INNOVATION" },
  { img: "/assets/p-pops.webp", name: "Pops K V Sridhar", role: "CHIEF CREATIVE OFFICER" },
  { img: "/assets/p-cdr.webp", name: "Cdr Das Mallya (Retd)", role: "GROUP VP - HUMAN CAPITAL" },
  { img: "/assets/p-chris.webp", name: "Chris Chapman", role: "CHAIRMAN - NIHILENT AUSTRALIA PTY LTD." },
  { img: "/assets/p-milind.webp", name: "Milind Rathi", role: "PRESIDENT - ERP DIVISION (INTELLECT BIZWARE)" },
  { img: "/assets/p-rahul.webp", name: "Rahul Bhandari", role: "COMPANY SECRETARY" },
];

export const regional: Person[] = [
  { img: "/assets/p-deepak.webp", name: "Deepak Prabhu", role: "REGIONAL HEAD (AMERICAS) AND VP - CONSULTING & DESIGN THINKING" },
  { img: "/assets/p-pankaj.webp", name: "Pankaj Gadekar", role: "REGIONAL HEAD (EUROPE)" },
  { img: "/assets/p-prabith.webp", name: "Prabith Kalathil", role: "REGIONAL HEAD (AFRICA)" },
  { img: "/assets/p-vikash.webp", name: "Vikash Gokul", role: "COUNTRY HEAD (SOUTH AFRICA)" },
  { img: "/assets/p-robin.webp", name: "Robin Rastogi", role: "REGIONAL HEAD (APAC)" },
  { img: "/assets/p-manu.webp", name: "Manu Nair", role: "COUNTRY HEAD (INDIA)" },
];

export const experts: Person[] = [
  { img: "/assets/p-manish.webp", name: "Manish Deshmukh", role: "PRINCIPAL CONSULTANT" },
  { img: "/assets/p-dipyoman.webp", name: "Dipyoman Baneerjee", role: "PRINCIPAL CONSULTANT" },
];
