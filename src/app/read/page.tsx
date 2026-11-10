import type { Metadata } from "next";
import Link from "next/link";
import { AllReaders } from "@/components/historical-events/all-readers";

export const metadata: Metadata = {
  title: "Read the evidence | India Through Time",
  description: "Server-rendered historical records, evidence notes and sources for every chapter.",
};

export default function ReadingPage() {
  return (
    <main>
      <header className="bg-[#162523] px-6 py-10 text-[#f5ead3] sm:px-10">
        <div className="mx-auto max-w-4xl">
          <Link className="text-sm underline" href="/">
            ← Return to the timeline
          </Link>
          <p className="mt-8 text-sm font-semibold tracking-widest text-[#e0b66d] uppercase">
            India Through Time
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Read the evidence</h1>
          <p className="mt-5 max-w-2xl leading-7 text-[#d5d4ca]">
            Browse all eight chapters without the animated timeline. Event IDs, dates, citations and
            source links are shared with the journey.
          </p>
        </div>
      </header>
      <AllReaders />
    </main>
  );
}
