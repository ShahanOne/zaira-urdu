import TodayDate from "@/components/TodayDate";
import TodayWords from "@/components/TodayWords";

export default function Home() {
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
          <TodayDate />
        </header>

        <TodayWords />

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
