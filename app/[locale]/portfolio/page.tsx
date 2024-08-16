import PortfolioPage from "@/components/pages/PortfolioPage";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const Portfolio = async ({ params: { locale } }: { params: { locale: string } }) => {
    unstable_setRequestLocale(locale);

  return (
    <div>
      <PortfolioPage />
    </div>
  );
};

export default Portfolio;
