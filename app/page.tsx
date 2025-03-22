"use client";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(false);
  const [hideFirstCursor, setHideFirstCursor] = useState(false);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondTypewriter(true);
      setHideFirstCursor(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col font-[family-name:var(--font-geist-mono)] gap-[10px]">
          <h1 className="text-xl font-semibold">
            <Typewriter
              words={["Markus Smith"]}
              cursor={!hideFirstCursor}
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </h1>

          {showSecondTypewriter && (
            <h1 className="text-xl font-semibold transition-opacity duration-500 ease-in-out opacity-100 text-red-400">
              <Typewriter
                words={["Software Developer"]}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </h1>
          )}

          <h2 className="text-base font-light">North Carolina, United States</h2>
          <div className="flex flex-row gap-[12px] text-base font-light">
            <Link
              href="/blog"
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            >
              <Image
                className="dark:invert"
                src="/globe.svg"
                alt="Globe icon"
                width={20}
                height={20}
              />
              Blog
            </Link>

            <Link
              href="/resume"
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            >
              <Image
                className="dark:invert"
                src="/file.svg"
                alt="File icon"
                width={20}
                height={20}
              />
              Résumé
            </Link>

            <Link
              href="/projects"
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            >
              <Image
                className="dark:invert"
                src="/window.svg"
                alt="Window icon"
                width={20}
                height={20}
              />
              Projects
            </Link>
          </div>
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
