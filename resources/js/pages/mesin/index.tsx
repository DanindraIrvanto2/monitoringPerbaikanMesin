import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, PagePropsMachine } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { DataTableMesin } from './data-table/data-table';
import { columns } from './data-table/column';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import CreateMesin from '@/components/form-create-mesin';
import { Cog, Plus, Search } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Mesin',
        href: '/mesin',
    },
];

export default function Index() {
    const { data, flash, filters } = usePage<PagePropsMachine>().props;
    const [search, setSearch] = useState(filters?.search || '');
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        const handler = setTimeout(() => {
            if (search.length >= 3 || search.length === 0) {
                const url = new URL(window.location.href); 
                url.searchParams.set('search', search);

                router.get(
                    url.pathname + url.search,
                    {},
                    {
                        preserveState: true,
                        replace: true,
                    }
                );
            }
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, { duration: 3000 });
        }
        if (flash.errorMessage) {
            toast.error(flash.errorMessage, { duration: 3000 });
        }
    }, [flash]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Mesin" />
            <div className="flex flex-col gap-6 p-4 md:p-6 max-w-7xl mx-auto w-full">
                <div className="rounded-lg border border-border bg-card p-4 sm:p-5 shadow-xs space-y-4">
                    {/* Header & Action Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/50">
                        <div>
                            <div className="flex items-center gap-2">
                                <Cog className="size-4 text-muted-foreground" />
                                <h1 className="text-base font-bold tracking-tight text-foreground font-mono uppercase">
                                    Daftar Aset & Unit Mesin
                                </h1>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                Seluruh peralatan dan instrumen operasional pabrik yang terdaftar
                            </p>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Cari kode / nama mesin..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="pl-8 h-9 text-xs font-mono bg-muted/30 border-border"
                                />
                            </div>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button className="h-9 gap-1.5 text-xs font-mono font-medium bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 hover:opacity-90 cursor-pointer shrink-0">
                                        <Plus className="size-3.5" />
                                        <span>TAMBAH MESIN</span>
                                    </Button>
                                </SheetTrigger>
                                <CreateMesin />
                            </Sheet>
                        </div>
                    </div>

                    {/* Data Table */}
                    <DataTableMesin columns={columns} data={data} />
                </div>
            </div>
        </AppLayout>
    );
}

