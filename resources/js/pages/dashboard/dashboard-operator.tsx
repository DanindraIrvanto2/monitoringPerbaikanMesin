import { CardDashboard } from '@/components/card-dashboard';
import DashboardCardList from '@/components/cardlist-dashboard';
import DashboardAreaChart from '@/components/dashboard-areachart';
import { DashboardByRole } from '@/types';
import { Link } from '@inertiajs/react';
import { AlertCircle, ArrowUpRight, CloudLightning, Cog, Hammer, Users2, Wrench } from 'lucide-react';

export default function DashboardOperator({
    jumlahMesin,
    jumlahUser,
    totalPerbaikan,
    totalKerusakanBulanIni,
    listTeknisi,
    kerusakanTerbaru,
}: DashboardByRole) {
    return (
        <div className="flex flex-col gap-6 p-4 md:p-6 max-w-7xl mx-auto w-full">
            {/* Operator Station Action Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border bg-card shadow-xs">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-500" />
                        <span className="text-[11px] font-mono text-muted-foreground uppercase">OPERATOR_STATION // LINE_MONITOR</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-foreground font-mono mt-0.5">
                        Workstation Operasional Mesin
                    </h1>
                </div>

                <div className="flex items-center gap-2">
                    <Link
                        href="/kerusakans"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-mono font-bold bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 hover:opacity-90 transition-opacity"
                    >
                        <AlertCircle className="size-3.5" />
                        <span>LAPOR KENDALA MESIN</span>
                    </Link>
                </div>
            </div>

            {/* 4 KPI Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CardDashboard
                    cardTitle={jumlahMesin.toString()}
                    cardDescription="UNIT AKTIF"
                    cardAction={Cog}
                    footerTitle="Peralatan Terpantau"
                    footerDescription="Mesin di lini produksi aktif"
                />
                <CardDashboard
                    cardTitle={jumlahUser.toString()}
                    cardDescription="TIM LAPANGAN"
                    cardAction={Users2}
                    footerTitle="Operator & Teknisi"
                    footerDescription="Personil terhubung saat ini"
                />
                <CardDashboard
                    cardTitle={totalPerbaikan.toString()}
                    cardDescription="PERBAIKAN SELESAI"
                    cardAction={Hammer}
                    footerTitle="Status Operasional"
                    footerDescription="Unit kembali beroperasi normal"
                />
                <CardDashboard
                    cardTitle={totalKerusakanBulanIni.toString()}
                    cardDescription="KENDALA TERCATAT"
                    cardAction={CloudLightning}
                    footerTitle="Log Gangguan"
                    footerDescription="Tiket kendala bulan ini"
                />
            </div>

            {/* Middle Section: Chart & Live Streams */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-3">
                    <DashboardCardList
                        title="Teknisi Siaga"
                        type="teknisi"
                        items={listTeknisi}
                    />
                </div>
                <div className="lg:col-span-6">
                    <DashboardAreaChart />
                </div>
                <div className="lg:col-span-3">
                    <DashboardCardList
                        title="Laporan Masuk"
                        type="kerusakan"
                        items={kerusakanTerbaru}
                    />
                </div>
            </div>
        </div>
    );
}

