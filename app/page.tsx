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
    }, 2250);
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
          <div className="flex gap-3 text-base font-light">
            <NavLink href="/blog" icon="/globe.svg" label="Blog" />
            <NavLink href="/resume" icon="/file.svg" label="Résumé" />
            <NavLink href="/projects" icon="/window.svg" label="Projects" />
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <ExternalLink href="https://github.com/Kastenhal" icon="/github.svg" />
        <ExternalLink href="https://www.linkedin.com/in/markus-smith-504666357/" icon="/linkedin.svg" />
        <ExternalLink href="https://www.youtube.com/@Kastenhal/" icon="/youtube.svg" />
      </footer>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  icon: string;
  label: string;
}

interface ExternalLinkProps {
  href: string;
  icon: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, label }) => (
  <Link href={href} className="flex items-center gap-2 hover:underline hover:underline-offset-4">
    <Image className="dark:invert" src={icon} alt={`${label} icon`} width={16} height={16} />
    {label}
  </Link>
);

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, icon }) => (
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image className="dark:invert" src={icon} alt="External link icon" width={16} height={16} />
  </a>
);