"use client";

import { Brand } from "./brand";
import { Button } from "@/components/ui/button";
import { phone } from "@/content/contact-info";
import { navigation } from "@/content/navigation";
import { IconMenu2, IconPhone, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background">
      <nav className="container mx-auto flex items-center justify-between p-4 xl:max-w-7xl">
        <Brand />

        <div className="lg:hidden">
          <Button
            size="icon-lg"
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <>
                <IconX className="size-6" aria-hidden="true" />
                <span className="sr-only">Cerrar menú</span>
              </>
            ) : (
              <>
                <IconMenu2 className="size-6" aria-hidden="true" />
                <span className="sr-only">Abrir menú</span>
              </>
            )}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-6">
          {navigation.map((item) => (
            <Button asChild key={item.title} variant="ghost">
              <Link href={item.href}>{item.title}</Link>
            </Button>
          ))}
        </div>

        <Button asChild className="max-lg:hidden">
          <Link
            href={`tel:${phone}`}
            className="flex items-center justify-center gap-2"
          >
            <IconPhone />
            <span>Llamar Ahora</span>
          </Link>
        </Button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-4">
            {navigation.map((item) => (
              <Button
                asChild
                key={item.title}
                variant="ghost"
                className="w-full justify-start"
              >
                <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.title}
                </Link>
              </Button>
            ))}

            <Button asChild className="mt-4 w-full">
              <Link
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2"
              >
                <IconPhone />
                <span>Llamar Ahora</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
