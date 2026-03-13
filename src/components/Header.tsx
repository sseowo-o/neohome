"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavChild {
  label: string;
  href: string;
  children?: NavChild[];
}

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
}

interface HeaderProps {
  lang: Locale;
  dict: {
    company: string;
    technology: string;
    smartpen: string;
    neoSmartpen: string;
    neoSmartpenN2: string;
    neoSmartpenM1: string;
    neoSmartpenDimo: string;
    lamySafari: string;
    reco: string;
    appService: string;
    neoStudio: string;
    gridaboard: string;
    paperTube: string;
    notebook: string;
    digitalNotebook: string;
    soundPen: string;
    pokoro: string;
    partnership: string;
    productPurchase: string;
    neoSmartpenEshop: string;
  };
}

function getNavItems(lang: Locale, dict: HeaderProps["dict"]): NavItem[] {
  return [
    { label: dict.company, href: `/${lang}/company` },
    { label: dict.technology, href: `/${lang}/technology` },
    {
      label: dict.smartpen,
      href: `/${lang}/neosmartpen`,
      children: [
        {
          label: dict.neoSmartpen,
          href: "#",
          children: [
            { label: dict.neoSmartpenN2, href: `/${lang}/neosmartpen/product-n2` },
            { label: dict.neoSmartpenM1, href: `/${lang}/neosmartpen/product-m1` },
            { label: dict.neoSmartpenDimo, href: `/${lang}/neosmartpen/product-dimo` },
            { label: dict.lamySafari, href: `/${lang}/neosmartpen/product-lamy` },
            { label: dict.reco, href: `/${lang}/neosmartpen/product-reco` },
          ],
        },
        {
          label: dict.appService,
          href: "#",
          children: [
            { label: dict.neoStudio, href: `/${lang}/neosmartpen/neo-studio` },
            { label: dict.gridaboard, href: `/${lang}/neosmartpen/gridaboard` },
            { label: dict.paperTube, href: `/${lang}/neosmartpen/papertube` },
          ],
        },
        {
          label: dict.notebook,
          href: "#",
          children: [
            { label: dict.digitalNotebook, href: `/${lang}/neosmartpen/notebooks` },
          ],
        },
      ],
    },
    { label: dict.soundPen, href: `/${lang}/soundpen` },
    { label: dict.pokoro, href: `/${lang}/pokoro` },
    { label: dict.partnership, href: `/${lang}/partnership` },
    {
      label: dict.productPurchase,
      href: "https://shop.neosmartpen.com",
      external: true,
      children: [
        { label: dict.neoSmartpenEshop, href: "https://shop.neosmartpen.com/" },
      ],
    },
  ];
}

export default function Header({ lang, dict }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = getNavItems(lang, dict);

  return (
    <>
      {/* Language bar - original: h30px, bg rgb(15,0,0) */}
      <div className="bg-[#0f0000] text-white text-xs py-1 px-4 text-right">
        <LanguageSwitcher lang={lang} linkClassName="hover:text-primary mx-2 opacity-60 hover:opacity-100" />
      </div>

      {/* Main header - original: h54px */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1080px] mx-auto px-4 flex items-center justify-between h-[54px]">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <Image
              src="/images/NeoLAB-CI_01.png"
              alt="NeoLAB Convergence Inc."
              width={140}
              height={42}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="px-3 py-4 text-[14px] text-black/60 hover:text-primary font-semibold flex items-center gap-1 transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[220px] z-50">
                    {item.children.map((child) => (
                      <div key={child.label} className="group/sub relative">
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50"
                          {...(child.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {child.label}
                        </Link>
                        {child.children && (
                          <div className="hidden group-hover/sub:block absolute left-full top-0 bg-white shadow-lg rounded-md py-2 min-w-[220px]">
                            {child.children.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50"
                                {...(sub.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-6 py-3 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 border-b border-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 py-3 flex gap-4 text-sm">
              <LanguageSwitcher lang={lang} linkClassName="text-gray-500 hover:text-primary" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
