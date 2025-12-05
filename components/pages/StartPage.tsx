"use client";

import { useTranslations } from "next-intl";
import AboutUs from "@/components/home/AboutUs";
import Feedback from "@/components/home/Feedback";
import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import ComparisonSection from "@/components/home/ComparisonSection";
import Lenis from "@studio-freight/lenis";

import { useEffect } from "react";
import Script from "next/script";
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

          <Script src="https://unpkg.com/hollo-embed" strategy="afterInteractive" />
          <hollo-embed agent-id="e9cb80ee-08da-4fa1-b42e-9fa2090b2b2c"></hollo-embed>

          {/* Hollo Live Video Embed with agent-id */}
          <iframe
            src="https://live.next.hollo.ai/live?agent-id=laysskheir"
            width="100%"
            height="600"
          />
          <AboutUs />
          <Solutions />
          <ComparisonSection />
          <Feedback />
        </div>
      </main>
    </>
  );
}
