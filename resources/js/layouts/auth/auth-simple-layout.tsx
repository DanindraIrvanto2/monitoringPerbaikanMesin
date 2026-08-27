import { Layers } from 'lucide-react';
import { type PropsWithChildren } from 'react';



interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="grid min-h-screen lg:grid-cols-12 bg-background text-foreground">
            {/* Left Form Container - Matching Dashboard Theme */}
            <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12 lg:col-span-5 xl:col-span-5 bg-card border-r border-border">
                {/* Header Brand */}
                <div className="flex items-center gap-3">
                    <div className="flex aspect-square size-9 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold border border-border shadow-xs">
                        <Layers className="size-5" />
                    </div>
                    <div>
                        <span className="font-bold text-sm tracking-wider text-foreground">MONITORING APPS</span>
                        <p className="text-[11px] font-mono text-muted-foreground">Industrial Machine Telemetry</p>
                    </div>
                </div>

                {/* Form Area */}
                <div className="my-auto w-full max-w-sm mx-auto py-8">
                    <div className="mb-6 text-left space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
                        {description && (
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>
                    {children}
                </div>

                {/* Footer Security / Status */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border font-mono">
                    <span className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-500" />
                        SYS: OPERATIONAL
                    </span>
                    <span>ENTERPRISE HMI</span>
                </div>
            </div>

            {/* Right Side Industrial Machine View - Clean Full Bleed */}
            <div className="relative hidden lg:flex lg:col-span-7 xl:col-span-7 bg-muted/20 overflow-hidden">
                {/* Background Realistic Industrial CNC Machine Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                    style={{ backgroundImage: "url('/images/industrial-machine.jpg')" }}
                />
                
                {/* Subtle Edge Vignette */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80" />
            </div>
        </div>
    );
}





