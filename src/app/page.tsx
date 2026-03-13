"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { i18n } from "@/i18n/config";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to default locale (e.g., /ko)
    router.replace(`/${i18n.defaultLocale}/`);
  }, [router]);

  return null;
}
