import { HourBar } from "./hour-bar";
import { schedule } from "@/content/schedule";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div">;

export function OpenHours({ className, ...props }: Props) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      {schedule.map((item) => (
        <div
          key={item.day}
          className={cn(
            "space-y-2 rounded-lg p-3",
            item.active ? "bg-muted" : "bg-foreground/5",
          )}
        >
          <div className="flex items-center justify-between text-sm">
            <span
              className={cn(
                "font-medium",
                item.active ? "text-primary" : "text-foreground/40",
              )}
            >
              {item.day}
            </span>
            <span
              className={cn(
                "font-semibold",
                item.active ? "text-foreground" : "text-foreground/40",
              )}
            >
              {item.hours}
            </span>
          </div>

          <HourBar
            openHour={item.openHour}
            closeHour={item.closeHour}
            active={item.active}
          />
        </div>
      ))}
    </div>
  );
}
