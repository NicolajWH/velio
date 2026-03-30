'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'hvordan', label: 'Hvordan det virker' },
  { id: 'fordele', label: 'Fordele' },
  { id: 'kontakt', label: 'Kontakt' },
];

export function PublicHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const clickLockRef = useRef(false);
  const clickLockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 8);

      if (clickLockRef.current) return;

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => el !== null);

      if (sections.length === 0) return;

      // Ingen aktiv menu helt i toppen af siden
      if (scrollY < 80) {
        setActiveSection(null);
        return;
      }

      const headerOffset = 120;
      const currentPosition = scrollY + headerOffset;

      let currentSection: string | null = null;

      for (const section of sections) {
        if (currentPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      }

      // Sørg for at kontakt bliver aktiv helt nede i bunden
      if (window.innerHeight + scrollY >= document.body.offsetHeight - 40) {
        currentSection = 'kontakt';
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (clickLockTimeoutRef.current) {
        clearTimeout(clickLockTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    clickLockRef.current = true;

    if (clickLockTimeoutRef.current) {
      clearTimeout(clickLockTimeoutRef.current);
    }

    clickLockTimeoutRef.current = setTimeout(() => {
      clickLockRef.current = false;
    }, 700);
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur transition-all duration-300 ${
        scrolled
          ? 'border-b border-gray-200 bg-white/95 shadow-sm'
          : 'border-b border-transparent bg-white/90'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <CircleIcon className="h-6 w-6 text-orange-500" />
          <span className="ml-2 text-xl font-semibold text-gray-900">Velio</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-tight transition-colors duration-200 ${
                  isActive
                    ? 'font-semibold text-orange-500 hover:text-orange-500'
                    : 'font-medium text-neutral-700 hover:text-orange-500'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/sign-in">
            <Button
              variant="outline"
              className="rounded-xl border-neutral-300 px-5 text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 hover:text-neutral-900"
            >
              Log ind
            </Button>
          </Link>

          <a href="#kontakt">
            <Button className="rounded-xl px-5">Start nu</Button>
          </a>
        </div>
      </div>
    </header>
  );
}