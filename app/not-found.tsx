"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen w-full flex-col space-y-6 p-4 md:p-8">
      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="w-full rounded-lg border border-border px-3 py-4 backdrop-blur-[2px] md:p-6">
            <div className="flex flex-col gap-6 p-6 sm:p-12">
              <div className="flex flex-col gap-3">
                <p className="font-medium text-muted-foreground sm:text-lg">
                  404 Page not found
                </p>
                <h2 className="font-cal text-xl sm:text-2xl">
                  Oops, something went wrong.
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  The page you are looking for doesn&apos;t exist.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  variant="link"
                  onClick={() => void router.back()}
                >
                  Go Back
                </Button>
                <Button  asChild>
                  <Link href="/">Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
