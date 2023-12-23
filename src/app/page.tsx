"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import DisplayTitleText from "./components/DisplayTitleText";
import Navigation from "./components/Navigation";
import SocialMedia from "./components/SocialMedia";
import LanguageSelector from "./components/LanguageSelector";
import AboutSection from "./components/sections/About";
import ExperienceSection from "./components/sections/Experience";
import ProjectSection from "./components/sections/ProjectSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = useRef<any>();
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const y = window.pageYOffset;
    let newActiveSection = null;

    sections.current?.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (y >= top && y < top + height) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection ?? "");
  };

  const handleCursor = (e: MouseEvent) => {
    const [x, y] = [e.clientX, e.clientY];
    cursorRef.current?.setAttribute(
      "style",
      `background: radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%);`
    );
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    document.addEventListener("mousemove", handleCursor);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleCursor);
    };
  }, []);

  return (
    <main className="flex justify-between bg-slate-900 text-gray-100">
      <div
        className="pointer-events-none fixed inset-0 transition duration-300 z-30"
        ref={cursorRef}
      />
      <header className="w-1/2 sticky top-0 h-screen py-28 px-28">
        <DisplayTitleText />
        <Navigation currentActive={activeSection} />
        <SocialMedia />
        <LanguageSelector />
      </header>
      <section className="w-1/2 pr-28">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </section>
    </main>
  );
}
