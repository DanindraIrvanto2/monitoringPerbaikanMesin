import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { SharedData, type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    const { auth } = usePage<SharedData>().props;
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    const userRole = typeof auth.user?.role === 'string' ? auth.user.role : '';

    return (
        <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between gap-2 border-b border-border bg-background/95 px-4 md:px-6 backdrop-blur-sm transition-all">
            <div className="flex items-center gap-3">
                <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />
                <div className="hidden h-3.5 w-px bg-border sm:block" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>

            <div className="flex items-center gap-2.5">
                {/* Discrete System Status */}
                <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-md bg-muted/60 border border-border text-xs text-muted-foreground font-mono">
                    <span className="size-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>SYS: ONLINE</span>
                    {time && <span className="text-foreground font-medium">[{time}]</span>}
                </div>

                {/* Role Pill */}
                {userRole && (
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 border border-border">
                        {userRole}
                    </span>
                )}

                {/* Appearance Theme Toggle */}
                <AppearanceToggleDropdown />
            </div>
        </header>
    );
}

