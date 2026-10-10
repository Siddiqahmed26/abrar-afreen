/*
 * Wedding invitation content.
 * Everything a guest reads lives here. Edit this file to change names, dates,
 * venues and wording; the layout and animations pick it up automatically.
 */
window.INVITE = {
  // Event name as printed on the card
  event: "Dawat-E-Valima",

  couple: {
    groom: {
      name: "Abrar Ahmed",
      initial: "A",
      lines: ["B.E., Software Engineer"],
    },
    bride: {
      name: "Afreen Bokhari",
      initial: "A",
      lines: ["B.E., Software Engineer"],
    },
    // Used in the browser tab and the closing note
    shortNames: "Abrar & Afreen",
  },

  hosts: {
    names: "Mr. Mustaq Ahmed & Mrs. Nazhath Unnisa",
    place: "Bengaluru",
  },

  // Main event date in ISO format with timezone. Drives the countdown.
  date: "2026-12-17T20:00:00+05:30",
  dateLabel: "Thursday, 17 December 2026",
  hijriLabel: "8th Rajab 1448 Hijri",
  timeLabel: "Dinner · 8:00 PM onwards",
  medalDate: "17 · 12 · 2026",

  hero: {
    welcome: "You and your family are cordially invited to the Dawat-E-Valima of",
  },

  // Words wrapped in *asterisks* are shown in script lettering
  intro:
    "Mr. Mustaq Ahmed & Mrs. Nazhath Unnisa are delighted to invite you to the " +
    "Valima ceremony of their beloved son *Abrar Ahmed* with *Afreen Bokhari*",

  // Revealed under the scratch heart
  reveal: {
    eyebrow: "Insha Allah",
    title: "Your name is in our heart",
    note: "You and your family are cordially invited",
  },

  // Set to an image path (e.g. "assets/couple.jpg") to show the photo section
  photo: null,

  timeline: [
    {
      title: "Dawat-E-Valima",
      when: "Thursday, 17 December 2026",
      time: "8:00 PM onwards",
      text: "Dinner & Reception",
    },
  ],

  venue: {
    name: "Shams Convention Centre",
    address: "#67, Haines Road, Sulthangunta, Shivaji Nagar, Bengaluru – 560 001",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shams+Convention+Centre%2C+67+Haines+Road%2C+Sulthangunta%2C+Shivaji+Nagar%2C+Bengaluru+560001",
  },

  // Calendar entry (times in UTC: 8:00 PM–11:30 PM IST)
  calendar: {
    title: "Dawat-E-Valima · Abrar & Afreen",
    start: "20261217T143000Z",
    end: "20261217T180000Z",
    details: "Dinner & Reception from 8:00 PM onwards at Shams Convention Centre.",
  },

  gifts: "Your presence, prayers and blessings are the greatest gift of all.",

  closing: "Your presence, prayers and blessings will add joy to our celebration.",
  compliments: "With best compliments from relatives and friends",

  // Background music (Jashn-E-Bahaaraa, flute instrumental). If the file is
  // ever missing, a soft built-in flute melody plays instead.
  music: "assets/music.mp3",
};
