import type { BookDetailT, BookSummaryT } from '@/apis/BooksApi.ts';

export const book1: BookSummaryT = {
  id: 427971,
  title: 'All Systems Red',
  subtitle: 'The Murderbot Diaries',
  slug: 'all-systems-red',
  authors: [
    {
      author: {
        id: 168073,
        name: 'Martha Wells',
      },
    },
  ],
  rating: 3,
};

export const book2: BookSummaryT = {
  id: 446681,
  title: 'Dungeon Crawler Carl',
  subtitle: 'A LitRPG/Gamelit Adventure',
  slug: 'dungeon-crawler-carl',
  authors: [
    {
      author: {
        id: 241306,
        name: 'Matt Dinniman',
      },
    },
  ],
  rating: 3.2,
};

export const book3: BookSummaryT = {
  id: 1389888,
  title: 'Sunrise on the Reaping',
  subtitle: null,
  slug: 'sunrise-on-the-reaping',
  authors: [
    {
      author: {
        id: 155743,
        name: 'Suzanne Collins',
      },
    },
  ],
  rating: 4,
};

export const book1Detail: BookDetailT = {
  id: 427971,
  title: 'All Systems Red',
  subtitle: 'The Murderbot Diaries',
  reviews_count:23,
  image: {
    url: 'https://assets.hardcover.app/edition/31464805/75e1c503a87dc7b039ca67ed843a25af3e616ae4.jpeg',
  },
  release_year:2021,
  description:
    "In a corporate-dominated spacefaring future, planetary missions must be approved and supplied by the Company. Exploratory teams are accompanied by Company-supplied security androids, for their own safety.\n\nBut in a society where contracts are awarded to the lowest bidder, safety isn't a primary concern.\n\nOn a distant planet, a team of scientists are conducting surface tests, shadowed by their Company-supplied 'droid -- a self-aware SecUnit that has hacked its own governor module, and refers to itself (though never out loud) as \"Murderbot.\" Scornful of humans, all it really wants is to be left alone long enough to figure out who it is.\n\nBut when a neighboring mission goes dark, it's up to the scientists and their Murderbot to get to the truth.",
  slug: 'all-systems-red',
  rating: 3,
  authors: [
    {
      author: {
        id: 168073,
        name: 'Martha Wells',
      },
    },
  ],
  reviews: [
    {
      rating: 2.5,
      review_raw: 'I was curious about this one, based on the name and the amount of people talking about it. I found a nice science-fiction novella told through the eyes of a "murderbot" with quite an apathetic view on its life and work and some nice jokes. I wasn\'t really captivated by the story but it made me want to read the next novellas and see what becomes of it, so we\'ll see how it goes!',
      reviewed_at: '2025-05-21T00:00:00',
      user: {
        id: 10,
        name: 'aaa'
      }
    },
    {
      rating: 2.5,
      review_raw: "I feel like there's a lot to explore in the theme of something along the lines \"AI becomes conscious\". This book doesn't do that. Maybe other entries of the series might, but Murderbot is basically just an introverted human, there's nothing \"robotic\" about it whatsoever, apart from having cybernetic parts.I guess that may be the point, as killing machines are made of organic matter along with cybernetics, but I'm not sure how much of that organic matter is used and how exactly does hacking the government module affect things: Did Murderbot become conscious after that or was it always conscious but suppressed because of modules dictating behaviour(and beneath lies a regular human)?If it's the latter then it's an okay book with some cheesy humor which I personally didn't enjoy and a mystery that would be uncovered fully only in the later booksIf it's the former then it's a book I personally wouldn't recommend because of the sheer amount of potential lost, because the idea of an emerging consciousness isn't explored whatsoever(you can imagine Murderbot as a very introverted teenager who is really uncomfortable with socializing, not as a murderous killing machine that became self-aware)",
      reviewed_at: '2025-05-10T00:00:00',
      user: {
        id: 11,
        name: 'baaa'
      }
    },
    {
      rating: 5.0,
      review_raw: 'Earlier this year, I fell victim to a devastating cryptocurrency scam that cost me $79,000 worth of Dogecoin (DOGE). I met a scammer through a Telegram investment group—a woman named “Clara” who posed as an experienced crypto broker. She shared impressive-looking client testimonials and promised a 35% return in just seven days. Her website looked professional, and despite my initial doubts, I eventually transferred 500,000 DOGE, worth about $79,000 at the time.For the first week, everything looked fine—the trading platform showed my balance growing steadily. But when I tried to withdraw my funds, I was told I needed to pay a $12,000 “withdrawal fee.” Clara reassured me this was standard and fully refundable, so I paid it. Unfortunately, that was just the beginning. More unexpected charges followed: a tax clearance fee, a network fee, a security deposit. Before I knew it, I had lost an additional $8,000.I was crushed—emotionally and financially. My savings were gone, and I blamed myself for ignoring the red flags. A friend eventually suggested I reach out to JBEE SPY TEAM RECOVERY, a company known for helping scam victims recover stolen cryptocurrency.Although I was skeptical, I was also desperate. I contacted them and provided every detail I could: wallet addresses, transaction history, chat logs—everything. Their team got to work right away. Using advanced blockchain tracking techniques, they traced the stolen DOGE, identified the scammer’s wallet, and worked with relevant authorities to freeze the funds before they were moved any further.Throughout the process, they kept me informed and reassured. After days of relentless effort, JBEE SYP TEAM RECOVERY successfully recovered the majority of my stolen Dogecoin. Their professionalism, expertise, and transparency turned what felt like a hopeless situation into a story of redemption.If you’ve been a victim of crypto fraud, I highly recommend contacting them: Email conleyjbeespy606@gmail.comTelegram +44 7456 058620you can also contact on instagram ',
      reviewed_at: '2025-05-05T00:00:00',
      user: {
        id: 12,
        name: 'caa'
      }
    },
    {
      rating: 4.0,
      review_raw: "Objectively it took me 4 days to read this but subjectively it felt like 20 minutes, did not expect it to be so funny and fun, I especially appreciate the way it ends, I'm really excited to see where the series goes after this!“You don't blame humans for what you were forced to do? For what happened to you?” This is why I'm glad I'm not human. They come up with stuff like this. I said, “No. That's a human thing to do. Constructs aren't that stupid.”",
      reviewed_at: '2025-05-02T00:00:00',
      user: {
        id: 13,
        name: 'kk'
      }    },
    {
      rating: 3.5,
      review_raw: 'I dunno, this novella just isn’t for me. It’s quick, it’s sorta fun, it’s a unique interpretation of what murderous robot is but I don’t vibe with the vibe.',
      reviewed_at: '2025-02-18T00:00:00',
      user: {
        id: 14,
        name: 'dd'
      }
    },
  ],
};

export const book1DetailResponse = {
  data: {
    books_by_pk: book1Detail,
  },
};

export const trendingBooksResponse = {
  data: { books_trending: { ids: [book1.id, book3.id, book2.id] } },
};

export const booksSummariesResponse = {
  data: { books: [book1, book2, book3] },
};
