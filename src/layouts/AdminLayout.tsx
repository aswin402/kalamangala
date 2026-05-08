import { type JSX, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, LayoutDashboard } from 'lucide-react';
import { supabase } from '@/api/supabase';
import Button from '@/components/button';

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps): JSX.Element {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/admin-kalamangala';
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm">
        <div className="mx-auto flex h-16 max-w-[1380px] items-center justify-between px-[30px]">
          <Link to="/admin-dashboard" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <LayoutDashboard
                className="h-4 w-4 text-primary-foreground"
                strokeWidth={2}
              />
            </div>
            <span className="text-base font-semibold text-foreground">
              Kalamangala CMS
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="!hover:bg-red-500 !hover:text-white !hover:border-red-500 rounded-lg"
            >
              <LogOut className="h-4 w-4" strokeWidth={2} />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
