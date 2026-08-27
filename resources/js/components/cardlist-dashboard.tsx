import { Card, CardContent, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Kerusakan, User } from "@/types";
import { AlertCircle, UserCheck } from "lucide-react";

type DashboardCardListProps =
  | { title: string; type: "teknisi"; items: User[] }
  | { title: string; type: "kerusakan"; items: Kerusakan[] };

const DashboardCardList = ({ title, type, items }: DashboardCardListProps) => {
  return (
    <div className="p-4 rounded-lg border border-border bg-card shadow-xs">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-border/50">
        <h2 className="text-sm font-bold tracking-tight text-foreground font-mono uppercase">
          {title}
        </h2>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
          LIVE_STREAM
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {items.length === 0 ? (
          <div className="p-6 text-center text-xs font-mono text-muted-foreground bg-muted/20 rounded-md border border-border/40">
            NO_RECORDS_FOUND
          </div>
        ) : (
          items.map((item) => {
            if (type === "teknisi") {
              const teknisi = item as User;
              return (
                <div
                  key={teknisi.id}
                  className="flex items-center justify-between gap-3 p-2.5 rounded-md border border-border/70 bg-muted/20 hover:bg-muted/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded bg-neutral-800 text-white font-mono text-xs font-bold flex items-center justify-center border border-neutral-700">
                      {teknisi.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <span>{teknisi.name}</span>
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="text-[11px] font-mono text-muted-foreground">{teknisi.email}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[10px] font-mono bg-muted/60">
                    STANDBY
                  </Badge>
                </div>
              );
            } else {
              const kerusakan = item as Kerusakan;
              return (
                <div
                  key={kerusakan.id}
                  className="flex items-center justify-between gap-3 p-2.5 rounded-md border border-border/70 bg-muted/20 hover:bg-muted/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded bg-neutral-800 text-amber-400 font-mono text-xs font-bold flex items-center justify-center border border-neutral-700">
                      <AlertCircle className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground font-mono">
                        UNIT #{kerusakan.mesin_id}
                      </div>
                      <div className="text-[11px] text-muted-foreground line-clamp-1">
                        {kerusakan.deskripsi || "Gangguan operasional unit"}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-[10px] font-mono shrink-0">
                    {kerusakan.status || "PENDING"}
                  </Badge>
                </div>
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default DashboardCardList;

