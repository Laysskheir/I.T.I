"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations("contact");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl ">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">
        {t("title")}
      </h1>
      <p className="text-lg text-muted-foreground mb-20 text-center max-w-2xl mx-auto">
      {t("description")}
      </p>
      <div className="bg-background w-full">
        <form onSubmit={handleSubmit} className="space-y-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg font-medium">
                {t("form.name.label")}
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder={t("form.name.placeholder")}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg font-medium">
                {t("form.email.label")}
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder={t("form.email.placeholder")}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-lg font-medium">
              {t("form.message.label")}
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              placeholder={t("form.message.placeholder")}
              required
            ></Textarea>
          </div>
          <div className="flex justify-end">
            <Button type="submit">{t("form.submit")}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
