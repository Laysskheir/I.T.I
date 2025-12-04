"use client";

import { useTranslations } from "next-intl";
import AboutUs from "@/components/home/AboutUs";
import Feedback from "@/components/home/Feedback";
import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import ComparisonSection from "@/components/home/ComparisonSection";
import Lenis from "@studio-freight/lenis";

import { useEffect } from "react";
import Seo from "@/components/Seo";

export default function StartPage() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  const t = useTranslations("home");

  return (
    <>
      <Seo
        title={t("seo.title")}
        description={t("seo.description")}
        canonical="/"
      />
      <main>
        <div className="space-y-10">
          <Hero />

          {/* Hollo Live Video Embed with agent-id */}
          <h1>Hollo Live Video Embed with agent-id</h1>
          <iframe
            src="https://next.hollo.ai/live?agent-id=laysskheir"
            width="100%"
            height="600"
          />
          {/* Hollo Live Video Embed without agent-id */}
          <h1>Hollo Live Video Embed without agent-id</h1>
          <iframe
            src="https://laysskheir.next.hollo.ai/live"
            width="100%"
            height="600"
          />
          {/* Localhost Live Video Embed with agent-id */}
          <h1>Localhost Live Video Embed with agent-id</h1>
          <iframe
            src="http://localhost:3000/live?agent-id=laysskheir"
            width="100%"
            height="600"
          ></iframe>

          <AboutUs />
          <Solutions />
          <ComparisonSection />
          <Feedback />
        </div>
      </main>
    </>
  );
}
