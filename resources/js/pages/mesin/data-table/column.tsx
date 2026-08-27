import EditMesin from "@/components/form-edit-mesin";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useForm } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { Cpu, Edit, MapPin, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Mesin = {
  id: string;
  kode_mesin: string;
  nama_mesin: string;
  lokasi: string;
  kategori: string;
  gambar_mesin?: string | null;
};

export const columns: ColumnDef<Mesin>[] = [
  {
    accessorKey: "index",
    header: "No",
    cell: ({ row }) => (
      <span className="font-mono text-xs text-muted-foreground">{row.index + 1}</span>
    ),
  },
  {
    accessorKey: "kode_mesin",
    header: "Kode Unit",
    cell: ({ row }) => (
      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-muted border border-border text-foreground">
        {row.original.kode_mesin}
      </span>
    ),
  },
  {
    accessorKey: "nama_mesin",
    header: "Nama Peralatan",
    cell: ({ row }) => (
      <div className="font-medium text-xs text-foreground flex items-center gap-1.5">
        <Cpu className="size-3.5 text-muted-foreground shrink-0" />
        <span>{row.original.nama_mesin}</span>
      </div>
    ),
  },
  {
    accessorKey: "gambar_mesin",
    header: "Foto Unit", 
    cell: ({ row }) => {
      const mesin = row.original;
      return mesin.gambar_mesin ? (
        <img
          src={`/storage/${mesin.gambar_mesin}`}
          alt={mesin.nama_mesin}
          className="size-10 object-cover rounded border border-border bg-muted"
        />
      ) : (
        <span className="text-[11px] font-mono text-muted-foreground italic">No image</span>
      );
    },
  },
  {
    accessorKey: "lokasi",
    header: "Lokasi / Line",
    cell: ({ row }) => (
      <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
        <MapPin className="size-3 shrink-0" />
        <span>{row.original.lokasi}</span>
      </div>
    ),
  },
  {
    accessorKey: "kategori",
    header: "Kategori",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-[11px] font-mono uppercase bg-muted/30">
        {row.original.kategori}
      </Badge>
    ),
  },
  {
    accessorKey: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const mesin = row.original;
      const { delete: destroy } = useForm();

      const handleDelete = () => {
        if (confirm(`Hapus unit mesin "${mesin.nama_mesin}" (${mesin.kode_mesin})?`)) {
          destroy(route('mesin.destroy', mesin.id));
        }
      };

      return (
        <div className="flex items-center gap-1.5">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 px-2.5 text-xs font-mono gap-1 cursor-pointer">
                <Edit className="size-3.5" />
                <span>EDIT</span>
              </Button>
            </SheetTrigger>
            <EditMesin mesin={mesin} />
          </Sheet>

          <Button
            variant="outline"
            size="sm"
            className="h-8 px-2 text-xs text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 border-border cursor-pointer"
            onClick={handleDelete}
          >
            <Trash2 className="size-3.5" />
          </Button>
        </div>
      );
    },
  },
];



