import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CoolText() {
  return (
    <section className="py-20 relative">
      <h5 className="text-primary/10 text-[120px] md:text-[300px] lg:text-[400px] leading-none text-center pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        {siteConfig.name}
      </h5>
      <div className="container mx-auto px-4  text-center relative z-10">
        <h1 className="text-4xl sm:text-6xl ">
          We're Halo. We develop custom AI solutions for innovative companies.
        </h1>

        <Button asChild>
          <Link href="/contact" passHref>
            Get in touch
          </Link>
        </Button>
      </div>
    </section>
  );
}
