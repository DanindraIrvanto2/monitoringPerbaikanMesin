import { Layers } from 'lucide-react';

export default function AppLogo() {
    return (
        <div className="flex items-center gap-2.5">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold border border-neutral-700/50 shadow-xs">
                <Layers className="size-4.5" />
            </div>
            <div className="flex flex-col text-left">
                <span className="font-bold text-sm tracking-tight text-foreground leading-tight">MONITORING</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground leading-tight">APPS</span>
            </div>
        </div>
    );
}

