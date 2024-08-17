"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "./Icons";

const Header = () => {
  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isRTL = locale === "ar";

  const switchLanguage = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${currentPath}`);
  };

  const menuItems = [
    { key: "services", route: "services" },
    { key: "portfolio", route: "portfolio" },
    { key: "about", route: "about" },
    { key: "contact", route: "contact" },
  ];

  const isActiveRoute = (route: string) => {
    return pathname.includes(`/${locale}/${route}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full lg:px-12 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto py-2">
        <div className="flex items-center justify-between">
          <Logo />
          {isDesktop ? (
            <>
              <div className="flex space-x-6 items-center">
                {menuItems.map((item) => (
                  <Button key={item.key} variant="link" asChild>
                    <Link
                      href={`/${locale}/${item.route}`}
                      className={isActiveRoute(item.route) ? "underline" : ""}
                    >
                      {t(item.key)}
                    </Link>
                  </Button>
                ))}
              </div>
              <Select onValueChange={switchLanguage} defaultValue={locale}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder={t("language")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">
                    <div className="flex items-center">
                      <Icons.english className="mr-2 w-4 h-4" />
                      English
                    </div>
                  </SelectItem>
                  <SelectItem value="ar">
                    <div className="flex items-center">
                      <Icons.arabic className="mr-2 w-4 h-4" />
                      العربية
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icons.menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={isRTL ? "left" : "right"}>
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <Button
                      key={item.key}
                      variant="link"
                      asChild
                      className={`justify-start ${
                        isActiveRoute(item.route) ? "underline" : ""
                      }`}
                    >
                      <Link href={`/${locale}/${item.route}`}>
                        {t(item.key)}
                      </Link>
                    </Button>
                  ))}
                  <Select onValueChange={switchLanguage} defaultValue={locale}>
                    <SelectTrigger className="w-full justify-start">
                      <SelectValue placeholder={t("language")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">
                        <div className="flex items-center">
                          <Icons.english className="mr-2 w-4 h-4" />
                          English
                        </div>
                      </SelectItem>
                      <SelectItem value="ar">
                        <div className="flex items-center">
                          <Icons.arabic className="mr-2 w-4 h-4" />
                          العربية
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
