import { getWordsForToday } from "@/data/words";

const WORDS_PER_DAY = 5;

export default function Home() {
  const words = getWordsForToday(WORDS_PER_DAY);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen px-6 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <header className="text-center mb-16">
          <p className="font-serif text-blush-500 text-lg tracking-wide uppercase mb-1">
            For Zaira
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-blush-800 tracking-tight">
            Today&apos;s Urdu Words
          </h1>
          <p className="font-sans text-blush-600 mt-3 text-sm">{today}</p>
        </header>

        <section className="space-y-8">
          {words.map((word, i) => (
            <article
              key={`${word.urdu}-${i}`}
              className="rounded-2xl bg-white/70 backdrop-blur-sm border border-blush-200/80 shadow-sm shadow-blush-100/50 p-8 hover:border-blush-300/80 transition-colors"
            >
              <p
                className="font-serif text-4xl sm:text-5xl text-blush-800 mb-2"
                dir="rtl"
              >
                {word.urdu}
              </p>
              <p className="font-sans text-blush-500 text-sm uppercase tracking-wider mb-1">
                {word.romanization}
              </p>
              <p className="font-sans text-blush-700 text-lg">{word.meaning}</p>
            </article>
          ))}
        </section>

        <footer className="mt-20 text-center">
          <p className="font-sans text-blush-500 text-sm">
            Five new words every day.
          </p>
          <p className="font-sans text-blush-400 text-sm mt-2 italic">
            For you, from Shahan
          </p>
        </footer>
      </div>
    </main>
  );
}
