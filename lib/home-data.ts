/** Case-study carousel. Titles, subtexts and artwork all come from the
 *  10-Sep review; each card has its own subtext rather than a shared one. */

export const slides = [
  {
    "img": "/assets/home-case-1.webp",
    "title": "Know the risk before disruption",
    "body": "AI-powered multi-agent monitoring of financial, ESG, geopolitical and external signals to proactively detect supplier risk"
  },
  {
    "img": "/assets/home-case-2.webp",
    "title": "30% more effective selling time",
    "body": "Voice-enabled sales intelligence for a global industrial manufacturer, reducing administrative effort and giving sales teams more time to sell"
  },
  {
    "img": "/assets/home-case-3.png",
    "title": "IT support, without the ticket queue",
    "body": "Natural-language chat and voice over existing ITSM systems, automating L1 support with contextual L2 escalation."
  }
] as const;
