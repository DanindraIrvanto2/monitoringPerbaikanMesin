"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const chartConfig = {
  fisik: {
    label: "Kerusakan Mekanikal/Fisik",
    color: "#71717a",
  },
  digital: {
    label: "Kendala Sistem/Elektrikal",
    color: "#a1a1aa",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "Januari", fisik: 120, digital: 80 },
  { month: "Februari", fisik: 150, digital: 95 },
  { month: "Maret", fisik: 200, digital: 110 },
  { month: "April", fisik: 100, digital: 60 },
  { month: "Mei", fisik: 130, digital: 70 },
  { month: "Juni", fisik: 180, digital: 90 },
];

const DashboardAreaChart = () => {
  return (
    <div className="p-4 rounded-lg border border-border bg-card shadow-xs">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-border/50">
        <div>
          <h2 className="text-sm font-bold tracking-tight text-foreground font-mono uppercase">
            Analitik Riwayat Gangguan Mesin
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Komparasi tren kendala mekanikal vs elektrikal semester berjalan
          </p>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
          HISTORICAL_6M
        </span>
      </div>

      <ChartContainer config={chartConfig} className="min-h-[220px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            className="text-xs font-mono"
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} className="text-xs font-mono" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <defs>
            <linearGradient id="fillFisik" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="#71717a"
                stopOpacity={0.4}
              />
              <stop
                offset="95%"
                stopColor="#71717a"
                stopOpacity={0.02}
              />
            </linearGradient>
            <linearGradient id="fillDigital" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="#a1a1aa"
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor="#a1a1aa"
                stopOpacity={0.02}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="digital"
            type="monotone"
            fill="url(#fillDigital)"
            stroke="#a1a1aa"
            strokeWidth={1.5}
            stackId="a"
          />
          <Area
            dataKey="fisik"
            type="monotone"
            fill="url(#fillFisik)"
            stroke="#71717a"
            strokeWidth={1.5}
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default DashboardAreaChart;