
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardDashboardProps } from '@/types';

export const CardDashboard = ({
  cardDescription,
  cardTitle,
  cardAction,
  footerTitle,
  footerDescription,
}: CardDashboardProps) => {
  const ActionIcon = cardAction;

  return (
    <Card className="rounded-lg border border-border bg-card hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors shadow-xs">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardDescription className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            {cardDescription}
          </CardDescription>
          {ActionIcon && (
            <div className="flex size-8 items-center justify-center rounded-md bg-muted/80 text-foreground border border-border">
              <ActionIcon className="size-4" />
            </div>
          )}
        </div>
        <CardTitle className="text-3xl font-bold font-mono tracking-tight text-foreground mt-1">
          {cardTitle}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 pt-2 pb-4 text-xs border-t border-border/50">
        <div className="flex items-center gap-1.5 font-medium text-foreground">
          {footerTitle}
        </div>
        <div className="text-muted-foreground text-[11px] leading-tight">
          {footerDescription}
        </div>
      </CardFooter>
    </Card>
  );
};