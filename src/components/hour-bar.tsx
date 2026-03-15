import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & {
  openHour: number;
  closeHour: number;
  active: boolean;
};

export function HourBar({
  openHour,
  closeHour,
  active,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn("flex h-1.5 overflow-hidden rounded", className)}
      {...props}
    >
      {Array.from({ length: 24 }, (_, i) => {
        const isOpen = active && i >= openHour && i < closeHour;
        return (
          <div
            key={i}
            className={cn(
              "h-full flex-1",
              isOpen ? "bg-primary" : "bg-foreground/20",
            )}
          />
        );
      })}
    </div>
  );
}
