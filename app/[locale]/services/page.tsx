import ServicesPage from "@/components/pages/ServicesPage";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const Services = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <ServicesPage />
    </div>
  );
};

export default Services;
