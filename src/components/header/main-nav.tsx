'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Home, Package, Tags, Users } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

interface Props {
  teamId?: string;
}

export function MainNav({ teamId }: Props) {
  const pathname = usePathname();

  const routes = [
    {
      href: '/',
      label: 'ダッシュボード',
      active: pathname === '/',
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      href: '/teams',
      label: 'チーム一覧',
      active: pathname === '/teams',
      icon: <Users className="mr-2 h-4 w-4" />,
    },
  ];

  // チームIDがある場合のみ表示するルート
  const teamRoutes = teamId
    ? [
        {
          href: `/teams/${teamId}`,
          label: 'チーム編集',
          active: pathname === `/teams/${teamId}`,
          icon: <Users className="mr-2 h-4 w-4" />,
        },
        {
          href: `/teams/${teamId}/tags`,
          label: 'タグ一覧',
          active: pathname === `/teams/${teamId}/tags`,
          icon: <Tags className="mr-2 h-4 w-4" />,
        },
        {
          href: `/teams/${teamId}/stocks`,
          label: '在庫一覧',
          active: pathname === `/teams/${teamId}/stocks`,
          icon: <Package className="mr-2 h-4 w-4" />,
        },
      ]
    : [];

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Button
          key={route.href}
          variant={route.active ? 'default' : 'ghost'}
          asChild
          className="justify-start"
        >
          <Link
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors',
              route.active ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary'
            )}
          >
            {route.icon}
            {route.label}
          </Link>
        </Button>
      ))}
      {teamRoutes.map((route) => (
        <Button
          key={route.href}
          variant={route.active ? 'default' : 'ghost'}
          asChild
          className="justify-start"
        >
          <Link
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors',
              route.active ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary'
            )}
          >
            {route.icon}
            {route.label}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
