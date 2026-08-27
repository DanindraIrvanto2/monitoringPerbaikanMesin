import { useEffect, useState } from 'react';
import { Activity, CheckCircle2, Cpu, Radio, ShieldCheck, Zap } from 'lucide-react';

export default function MachineSchematicAnimation() {
    const [scanProgress, setScanProgress] = useState(98);
    const [motorTemp, setMotorTemp] = useState(42.6);
    const [vibration, setVibration] = useState(0.08);

    useEffect(() => {
        const interval = setInterval(() => {
            setMotorTemp(+(42.6 + (Math.random() * 0.4 - 0.2)).toFixed(1));
            setVibration(+(0.08 + (Math.random() * 0.02 - 0.01)).toFixed(2));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full rounded-xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col items-center justify-center overflow-hidden shadow-2xl space-y-4">
            {/* Technical Blueprint Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px] opacity-70" />

            {/* Top Scanning Status Header */}
            <div className="relative z-10 flex items-center justify-between w-full pb-3 border-b border-neutral-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-white font-bold tracking-wider">LIVE DIAGNOSTIK MESIN</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded">
                    <CheckCircle2 className="size-3" />
                    <span>STATUS: NORMAL</span>
                </div>
            </div>

            {/* Machine Diagnostic Visual with Moving Scan Line */}
            <div className="relative w-full h-52 flex items-center justify-center select-none overflow-hidden rounded-lg bg-neutral-900/40 border border-neutral-800/80">
                {/* Laser Diagnostic Scanning Beam */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981] animate-[scannerMove_4s_ease-in-out_infinite] z-20" />

                {/* Industrial Machine Vector Graphic */}
                <svg
                    viewBox="0 0 400 180"
                    className="relative z-10 w-full h-full max-h-44 text-neutral-300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Machine Base & Heavy Chassis */}
                    <rect x="50" y="130" width="300" height="30" rx="3" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
                    <rect x="60" y="160" width="40" height="10" rx="1" fill="#27272a" stroke="#52525b" strokeWidth="1" />
                    <rect x="300" y="160" width="40" height="10" rx="1" fill="#27272a" stroke="#52525b" strokeWidth="1" />

                    {/* Main Motor Housing (Left) */}
                    <rect x="70" y="55" width="80" height="75" rx="4" fill="#27272a" stroke="#52525b" strokeWidth="1.5" />
                    {/* Motor Cooling Fins */}
                    <line x1="80" y1="65" x2="80" y2="120" stroke="#71717a" strokeWidth="1.5" />
                    <line x1="90" y1="65" x2="90" y2="120" stroke="#71717a" strokeWidth="1.5" />
                    <line x1="100" y1="65" x2="100" y2="120" stroke="#71717a" strokeWidth="1.5" />
                    <line x1="110" y1="65" x2="110" y2="120" stroke="#71717a" strokeWidth="1.5" />
                    <line x1="120" y1="65" x2="120" y2="120" stroke="#71717a" strokeWidth="1.5" />
                    <line x1="130" y1="65" x2="130" y2="120" stroke="#71717a" strokeWidth="1.5" />

                    {/* Central Transmission Shaft & Gearbox */}
                    <rect x="150" y="80" width="50" height="30" rx="2" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />
                    <circle cx="175" cy="95" r="10" stroke="#71717a" strokeWidth="1.5" strokeDasharray="3 2" className="animate-[spin_6s_linear_infinite]" />

                    {/* Spindle & Working Processing Unit (Right) */}
                    <rect x="200" y="45" width="130" height="85" rx="4" fill="#27272a" stroke="#52525b" strokeWidth="1.5" />
                    <rect x="230" y="65" width="70" height="45" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                    
                    {/* Rotating Tool Rotor in Spindle */}
                    <g transform="translate(265, 87.5)" className="animate-[spin_3s_linear_infinite]">
                        <circle cx="0" cy="0" r="14" stroke="#a1a1aa" strokeWidth="1.5" fill="#18181b" />
                        <line x1="-14" y1="0" x2="14" y2="0" stroke="#ffffff" strokeWidth="1.5" />
                        <line x1="0" y1="-14" x2="0" y2="14" stroke="#ffffff" strokeWidth="1.5" />
                    </g>

                    {/* Diagnostic Sensor Node 1: Motor Bearing */}
                    <g transform="translate(110, 45)">
                        <circle cx="0" cy="0" r="4" fill="#10b981" className="animate-ping" />
                        <circle cx="0" cy="0" r="3" fill="#10b981" />
                        <line x1="0" y1="0" x2="15" y2="-15" stroke="#10b981" strokeWidth="1" />
                        <rect x="15" y="-24" width="72" height="14" rx="2" fill="#09090b" stroke="#10b981" strokeWidth="0.75" />
                        <text x="19" y="-14" fill="#10b981" fontSize="7" fontFamily="monospace" fontWeight="bold">TEMP: {motorTemp}°C</text>
                    </g>

                    {/* Diagnostic Sensor Node 2: Spindle Vibration */}
                    <g transform="translate(265, 35)">
                        <circle cx="0" cy="0" r="4" fill="#10b981" className="animate-ping" />
                        <circle cx="0" cy="0" r="3" fill="#10b981" />
                        <line x1="0" y1="0" x2="15" y2="-15" stroke="#10b981" strokeWidth="1" />
                        <rect x="15" y="-24" width="74" height="14" rx="2" fill="#09090b" stroke="#10b981" strokeWidth="0.75" />
                        <text x="19" y="-14" fill="#10b981" fontSize="7" fontFamily="monospace" fontWeight="bold">VIB: {vibration} mm/s</text>
                    </g>
                </svg>
            </div>

            {/* Diagnostic Telemetry Stream Footer */}
            <div className="grid grid-cols-3 gap-2 w-full pt-1 font-mono text-xs">
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 space-y-0.5">
                    <div className="text-[10px] text-neutral-400">TELEMETRI VIBRASI</div>
                    <div className="text-xs font-bold text-emerald-400 tabular-nums">0.08 mm/s [STABIL]</div>
                </div>

                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 space-y-0.5">
                    <div className="text-[10px] text-neutral-400">SUHU MOTOR</div>
                    <div className="text-xs font-bold text-white tabular-nums">{motorTemp} °C [OPTIMAL]</div>
                </div>

                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 space-y-0.5">
                    <div className="text-[10px] text-neutral-400">DIAGNOSTIK KONDISI</div>
                    <div className="text-xs font-bold text-emerald-400">100% HEALTHY</div>
                </div>
            </div>

            {/* Custom Scan Line Animation */}
            <style>{`
                @keyframes scannerMove {
                    0%, 100% { top: 0%; opacity: 0.3; }
                    50% { top: 96%; opacity: 1; }
                }
            `}</style>
        </div>
    );
}


