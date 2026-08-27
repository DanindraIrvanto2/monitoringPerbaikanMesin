import { CardDashboard } from '@/components/card-dashboard';
import DashboardCardList from '@/components/cardlist-dashboard';
import DashboardAreaChart from '@/components/dashboard-areachart';
import { DashboardByRole } from '@/types';
import { Link } from '@inertiajs/react';
import { Activity, ArrowUpRight, CloudLightning, Cog, FileText, Hammer, Users2, Wrench } from 'lucide-react';

export default function DashboardUser({
    jumlahMesin,
    jumlahUser,
    totalPerbaikan,
    totalKerusakanBulanIni,
    listTeknisi,
    kerusakanTerbaru,
}: DashboardByRole) {
    return (
        <div className="flex flex-col gap-6 p-4 md:p-6 max-w-7xl mx-auto w-full">
            {/* Top Industrial Header & Quick Access Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border bg-card shadow-xs">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-500" />
                        <span className="text-[11px] font-mono text-muted-foreground uppercase">ADMIN_DISPATCH // MASTER_VIEW</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-foreground font-mono mt-0.5">
                        Pusat Kontrol Monitoring & Pemeliharaan
                    </h1>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <Link
                        href="/mesin"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 hover:opacity-90 transition-opacity"
                    >
                        <Cog className="size-3.5" />
                        <span>KELOLA MESIN</span>
                    </Link>
                    <Link
                        href="/kerusakans"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-muted hover:bg-muted/80 text-foreground border border-border transition-colors"
                    >
                        <Wrench className="size-3.5" />
                        <span>LAPORAN KERUSAKAN</span>
                    </Link>
                    <Link
                        href="/report"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-muted hover:bg-muted/80 text-foreground border border-border transition-colors"
                    >
                        <FileText className="size-3.5" />
                        <span>EXPORT LAPORAN</span>
                    </Link>
                </div>
            </div>

            {/* 4 KPI Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CardDashboard
                    cardTitle={jumlahMesin.toString()}
                    cardDescription="TOTAL UNIT MESIN"
                    cardAction={Cog}
                    footerTitle="Kondisi Operasional"
                    footerDescription="Unit terdaftar di seluruh lantai pabrik"
                />
                <CardDashboard
                    cardTitle={jumlahUser.toString()}
                    cardDescription="PENGGUNA TERDAFTAR"
                    cardAction={Users2}
                    footerTitle="Manajemen Otorisasi"
                    footerDescription="Admin, Teknisi Lapangan, dan Operator"
                />
                <CardDashboard
                    cardTitle={totalPerbaikan.toString()}
                    cardDescription="PERBAIKAN SELESAI"
                    cardAction={Hammer}
                    footerTitle="Dokumentasi Servis"
                    footerDescription="Catatan log tindakan perbaikan tuntas"
                />
                <CardDashboard
                    cardTitle={totalKerusakanBulanIni.toString()}
                    cardDescription="GANGGUAN BULAN INI"
                    cardAction={CloudLightning}
                    footerTitle="Tingkat Kerusakan"
                    footerDescription="Total laporan masuk periode berjalan"
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

