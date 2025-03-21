"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col font-[family-name:var(--font-geist-mono)]">
          <h1 className="text-xl font-semibold">
            <Typewriter
              words={["Markus Smith", "Full Stack Developer"]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </h1>
          <h2 className="text-base font-light">North Carolina, United States</h2>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Kastenhal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/github.svg"
            alt="Github icon"
            width={20}
            height={20}
          />
        </a>

        <a
          className="flex item-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/markus-smith-504666357/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/linkedin.svg"
            alt="LinkedIn icon"
            width={20}
            height={20}
          />
        </a>
      </footer>
    </div>
  );
}
