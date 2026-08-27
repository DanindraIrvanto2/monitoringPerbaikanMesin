import { CardDashboard } from '@/components/card-dashboard';
import DashboardCardList from '@/components/cardlist-dashboard';
import DashboardAreaChart from '@/components/dashboard-areachart';
import { DashboardByRole } from '@/types';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, CloudLightning, Cog, Hammer, History, Users2, Wrench } from 'lucide-react';

export default function DashboardTeknisi({
    jumlahMesin,
    jumlahUser,
    totalPerbaikan,
    totalKerusakanBulanIni,
    listTeknisi,
    kerusakanTerbaru,
}: DashboardByRole) {
    return (
        <div className="flex flex-col gap-6 p-4 md:p-6 max-w-7xl mx-auto w-full">
            {/* Technician Dispatch Station Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border bg-card shadow-xs">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-500" />
                        <span className="text-[11px] font-mono text-muted-foreground uppercase">TECHNICIAN_HUB // FIELD_SERVICE</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-foreground font-mono mt-0.5">
                        Hub Penugasan & Riwayat Pemeliharaan
                    </h1>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <Link
                        href="/perbaikan"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-bold bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 hover:opacity-90 transition-opacity"
                    >
                        <Wrench className="size-3.5" />
                        <span>TUGAS PERBAIKAN</span>
                    </Link>
                    <Link
                        href="/history"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium bg-muted hover:bg-muted/80 text-foreground border border-border transition-colors"
                    >
                        <History className="size-3.5" />
                        <span>RIWAYAT SERVIS</span>
                    </Link>
                </div>
            </div>

            {/* 4 KPI Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CardDashboard
                    cardTitle={jumlahMesin.toString()}
                    cardDescription="TOTAL MESIN"
                    cardAction={Cog}
                    footerTitle="Peralatan Terdaftar"
                    footerDescription="Kondisi mesin pabrik terpantau"
                />
                <CardDashboard
                    cardTitle={jumlahUser.toString()}
                    cardDescription="REKAN TEKNISI"
                    cardAction={Users2}
                    footerTitle="Tim Pemeliharaan"
                    footerDescription="Teknisi terdaftar di sistem"
                />
                <CardDashboard
                    cardTitle={totalPerbaikan.toString()}
                    cardDescription="TIKET TERSELESAIKAN"
                    cardAction={Hammer}
                    footerTitle="Pekerjaan Berhasil"
                    footerDescription="Catatan perbaikan tersimpan"
                />
                <CardDashboard
                    cardTitle={totalKerusakanBulanIni.toString()}
                    cardDescription="KENDALA BARU"
                    cardAction={CloudLightning}
                    footerTitle="Menunggu Respon"
                    footerDescription="Laporan kerusakan bulan ini"
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

