import ContactPage from "@/components/pages/ContactPage";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const Contact = async ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default Contact;
