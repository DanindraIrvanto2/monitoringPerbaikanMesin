import EditRole from "@/components/form-edit-role";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Users = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "index",
    header: "No",
    cell: ({ row }) => (
      <span className="font-mono text-xs text-muted-foreground">{row.index + 1}</span>
    ),
  },
  {
    accessorKey: "name",
    header: "Nama Pengguna",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex items-center gap-2.5">
          <div className="size-7 rounded bg-neutral-800 text-white font-mono text-xs font-bold flex items-center justify-center border border-neutral-700">
            {user.name.slice(0, 2).toUpperCase()}
          </div>
          <span className="text-xs font-bold text-foreground">{user.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Alamat Email",
    cell: ({ row }) => (
      <span className="font-mono text-xs text-muted-foreground">{row.original.email}</span>
    ),
  },
  {
    accessorKey: "role",
    header: "Hak Akses / Role",
    cell: ({ row }) => {
      const role = row.original.role;
      return (
        <Badge variant="outline" className="text-[11px] font-mono uppercase bg-muted/60">
          {role}
        </Badge>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 px-2.5 text-xs font-mono gap-1 cursor-pointer">
                <Edit className="size-3.5" />
                <span>UBAH ROLE</span>
              </Button>
            </SheetTrigger>
            <EditRole user={user} />
          </Sheet>
        </div>
      );
    },
  },
];



