import Link from 'next/link';
import { CircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <CircleIcon className="h-6 w-6 text-orange-500" />
          <span className="ml-2 text-xl font-semibold text-gray-900">Velio</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#hvordan"
            className="text-sm text-gray-600 transition hover:text-gray-900"
          >
            Hvordan det virker
          </a>
          <a
            href="#fordele"
            className="text-sm text-gray-600 transition hover:text-gray-900"
          >
            Fordele
          </a>
          <a
            href="#kontakt"
            className="text-sm text-gray-600 transition hover:text-gray-900"
          >
            Kontakt
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/sign-in">
            <Button variant="outline" className="rounded-xl px-5">
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