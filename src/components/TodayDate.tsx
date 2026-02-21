"use client";

export default function TodayDate() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <p className="font-sans text-blush-600 mt-3 text-sm">{today}</p>
  );
}
