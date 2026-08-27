import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm } from "@inertiajs/react";
import { generateYearOptions } from "@/utils/utils";
import { AlertCircle, Calendar, Download, FileSpreadsheet, FileText } from "lucide-react";

function CardReportKerusakan() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    
    const { data, setData, processing } = useForm({
        month: currentMonth.toString(),
        year: currentYear.toString(),
    });

    const handleChangeMonth = (value: string) => {
        setData('month', value);
    };

    const handleChangeYear = (value: string) => {
        setData('year', value);
    };

    const handleSubmitExcel = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams({
            month: data.month,
            year: data.year
        });
        window.location.href = `/report/export?${params.toString()}`;
    };

    const handleSubmitPdf = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams({
            month: data.month,
            year: data.year
        });
        window.location.href = `/report/export/pdf?${params.toString()}`;
    };

    return (
        <Card className="rounded-lg border border-border bg-card shadow-xs">
            <CardHeader className="pb-3 border-b border-border/50">
                <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-md bg-muted text-foreground flex items-center justify-center border border-border">
                        <AlertCircle className="size-4" />
                    </div>
                    <div>
                        <CardTitle className="text-sm font-bold font-mono uppercase text-foreground">
                            Laporan Kerusakan Mesin
                        </CardTitle>
                        <p className="text-xs text-muted-foreground mt-0.5">
                            Ekspor riwayat data gangguan & laporan kerusakan
                        </p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label htmlFor="month" className="text-xs font-mono font-medium text-foreground flex items-center gap-1">
                            <Calendar className="size-3 text-muted-foreground" />
                            BULAN
                        </Label>
                        <Select value={data.month} onValueChange={handleChangeMonth} required>
                            <SelectTrigger className="w-full h-9 bg-muted/20 border-border text-xs font-mono">
                                <SelectValue placeholder="Pilih Bulan" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Pilihan Bulan</SelectLabel>
                                    <SelectItem value="1">Januari</SelectItem>
                                    <SelectItem value="2">Februari</SelectItem>
                                    <SelectItem value="3">Maret</SelectItem>
                                    <SelectItem value="4">April</SelectItem>
                                    <SelectItem value="5">Mei</SelectItem>
                                    <SelectItem value="6">Juni</SelectItem>
                                    <SelectItem value="7">Juli</SelectItem>
                                    <SelectItem value="8">Agustus</SelectItem>
                                    <SelectItem value="9">September</SelectItem>
                                    <SelectItem value="10">Oktober</SelectItem>
                                    <SelectItem value="11">November</SelectItem>
                                    <SelectItem value="12">Desember</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-1.5">
                        <Label htmlFor="year" className="text-xs font-mono font-medium text-foreground flex items-center gap-1">
                            <Calendar className="size-3 text-muted-foreground" />
                            TAHUN
                        </Label>
                        <Select value={data.year} onValueChange={handleChangeYear} required>
                            <SelectTrigger className="w-full h-9 bg-muted/20 border-border text-xs font-mono">
                                <SelectValue placeholder="Pilih Tahun" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Pilihan Tahun</SelectLabel>
                                    {generateYearOptions(2020, 2030).map(({ value, label }) => (
                                        <SelectItem key={value} value={value}>{label}</SelectItem>
                                    ))} 
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                    <Button
                        type="button"
                        onClick={handleSubmitExcel}
                        disabled={processing}
                        variant="outline"
                        className="w-full sm:flex-1 h-9 gap-1.5 text-xs font-mono font-medium bg-muted/40 hover:bg-muted text-foreground border-border cursor-pointer"
                    >
                        <FileSpreadsheet className="size-3.5" />
                        <span>EXCEL (.XLSX)</span>
                    </Button>
                    <Button
                        type="button"
                        onClick={handleSubmitPdf}
                        disabled={processing}
                        className="w-full sm:flex-1 h-9 gap-1.5 text-xs font-mono font-medium bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 hover:opacity-90 cursor-pointer"
                    >
                        <FileText className="size-3.5" />
                        <span>PDF (.PDF)</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default CardReportKerusakan;