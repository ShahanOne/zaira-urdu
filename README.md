# For Zaira

A gentle web app that shows **5 new Urdu words** (with meanings) every day. Built for Zaira, with a clean light pink vibe and beautiful typography.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS**
- **TypeScript**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How it works

- The same 5 words are shown for the whole day, then rotate to the next set.
- Words are chosen from a curated list; the index is based on the day of the year so it’s consistent and repeatable.
