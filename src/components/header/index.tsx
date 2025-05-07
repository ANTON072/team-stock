import Link from 'next/link';

import { Package } from 'lucide-react';

import { MainNav } from './main-nav';
import { UserNav } from './user-nav';

export function Header() {
  return (
    <header className="border-b">
      <div className="grid h-16 grid-cols-[1fr_auto] items-center px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6" />
          <span>Team Stock</span>
        </Link>
        <div className="flex items-center space-x-4">
          <MainNav teamId={`1`} />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
