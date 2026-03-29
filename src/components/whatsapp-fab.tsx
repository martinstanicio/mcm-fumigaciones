import { Button } from "./ui/button";
import { phone } from "@/content/contact-info";
import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

type Props = React.ComponentProps<typeof Button>;

export function WhatsAppFAB({ className, ...props }: Props) {
  return (
    <Button
      className={cn(
        "fixed right-4 bottom-4 z-50 size-16 rounded-full bg-[#25D366] text-white shadow hover:bg-[#25D366]/80 md:size-18",
        className,
      )}
      size="icon"
      asChild
      {...props}
    >
      <Link
        href={getWhatsAppLink(phone).toString()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandWhatsapp className="size-10 md:size-12" />
        <span className="sr-only">Contactanos por WhatsApp</span>
      </Link>
    </Button>
  );
}
