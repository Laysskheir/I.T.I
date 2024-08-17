"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useLocale, useTranslations } from "next-intl";
import { Input } from "./ui/input";
import { Icons } from "./Icons";

const Footer = () => {
  const t = useTranslations("footer");
  const locale = useLocale()

  const footerLinks = [
    {
      title: t("company"),
      links: ["about", "services", "contact"],
    },
    {
      title: t("resources"),
      links: ["portfolio", "testimonials", "faq"],
    },
  ];

  const socialLinks = [
    { icon: Icons.instagram, href: siteConfig.links.instagram },
    { icon: Icons.whatsapp, href: siteConfig.links.whatsapp },
    { icon: Icons.facebook, href: siteConfig.links.facebook },
  ];

  return (
    <footer className="bg-background py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2">
            
            <p className="text-sm text-muted-foreground mb-6">
              {t("subscribeText")}
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-grow"
                aria-label={t("emailPlaceholder")}
              />
              <Button type="submit" className="w-full sm:w-auto">
                {t("subscribeButton")}
              </Button>
            </form>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="mt-8 sm:mt-0">
              <h4 className="text-lg font-semibold text-primary mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${locale}/${link.toLowerCase()}`}
                      className="hover:text-primary transition-colors"
                    >
                      {t(link)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0 text-center sm:text-left">
            {t("copyright", {
              year: new Date().getFullYear(),
              title: siteConfig.title,
            })}
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("termsOfService")}
            </Link>
          </div>
          <div className="flex ">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${link.icon.name} page`}
              >
                <link.icon className="w-6 h-6 mx-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
