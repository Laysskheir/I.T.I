"use client";
import React from "react";
import { Icons } from "./Icons";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import { useLocale } from "next-intl";

const FloatingWhatsApp: React.FC = () => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className={`fixed bottom-4 ${isRTL ? "left-4" : "right-4"} z-50`}>
      <Button
        size="icon"
        className="rounded-md bg-[#5bf573] hover:bg-[#5bf573]"
        onClick={() => window.open(siteConfig.links.whatsapp, "_blank")}
        aria-label="Contact us on WhatsApp"
      >
        <Icons.whatsapp2 className="w-12 h-12 text-white" />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
