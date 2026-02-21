"use client";

import { useEffect, useState } from "react";
import { getDayOfYear, getWordsForDayOfYear, type UrduWord } from "@/data/words";

const WORDS_PER_DAY = 5;

export default function TodayWords() {
  const [words, setWords] = useState<UrduWord[] | null>(null);

  useEffect(() => {
    const dayOfYear = getDayOfYear(new Date());
    setWords(getWordsForDayOfYear(dayOfYear, WORDS_PER_DAY));
  }, []);

  if (words === null) {
    return (
      <section className="space-y-8" aria-label="Loading today's words">
        {Array.from({ length: WORDS_PER_DAY }).map((_, i) => (
          <article
            key={i}
            className="rounded-2xl bg-white/50 border border-blush-200/60 p-8 animate-pulse"
          >
            <div className="h-10 bg-blush-100/50 rounded mb-3 w-3/4" />
            <div className="h-4 bg-blush-100/50 rounded mb-2 w-1/2" />
            <div className="h-5 bg-blush-100/50 rounded w-full" />
          </article>
        ))}
      </section>
    );
  }

  return (
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
  );
}
