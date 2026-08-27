import CardReportKerusakan from '@/components/card-report-kerusakan';
import CardReportPerbaikan from '@/components/card-report-perbaikan';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { FileSpreadsheet, FileText } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Export Laporan',
    href: '/report',
  },
];

interface FlashMessage {
    message: string;
    type: string;
}

export interface PagePropsReport extends Record<string, unknown> {
    flash: FlashMessage;
    errorMessage?: string;
}

export default function Index() {
    const { flash } = usePage<PagePropsReport>().props;

    useEffect(() => {
        if (flash?.message) {
            if (flash.type === 'success') {
                toast.success(flash.message);
            } else if (flash.type === 'error') {
                toast.error(flash.message);
            } else {
                toast(flash.message);
            }
        }
    }, [flash]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Export Laporan & Rekapitulasi" />
            <div className="flex flex-col gap-6 p-4 md:p-6 max-w-7xl mx-auto w-full">
                <div className="rounded-lg border border-border bg-card p-4 sm:p-5 shadow-xs space-y-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/50">
                        <div>
                            <div className="flex items-center gap-2">
                                <FileText className="size-4 text-muted-foreground" />
                                <h1 className="text-base font-bold tracking-tight text-foreground font-mono uppercase">
                                    Pusat Unduh & Rekapitulasi Laporan
                                </h1>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                Pilih periode bulan dan tahun untuk menghasilkan rekapitulasi data dalam format Excel (.xlsx) atau PDF (.pdf)
                            </p>
                        </div>
                    </div>

                    {/* Export Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CardReportKerusakan />
                        <CardReportPerbaikan />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}