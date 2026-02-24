import { Brand } from "./brand";
import { SocialIcons } from "./social-icons";
import { siteName } from "@/content/metadata";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = React.ComponentPropsWithoutRef<"footer">;

export function Footer({ className, ...props }: Props) {
  return (
    <footer
      className={cn("dark bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-x-4 gap-y-12 sm:flex-row">
          <Brand />
          <SocialIcons />
        </div>
        <div className="flex flex-col justify-between gap-4 text-center sm:flex-row">
          <p>
            {siteName} &copy; {new Date().getFullYear()}
          </p>
          <p>
            Página web diseñada por{" "}
            <Link
              href="https://www.linkedin.com/in/martinstanicio/"
              target="_blank"
              className="font-bold text-primary hover:underline focus:underline"
            >
              Martín Stanicio
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
