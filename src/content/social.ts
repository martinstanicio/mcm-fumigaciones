import { facebookUrl, instagramUrl, phone } from "./contact-info";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  TablerIcon,
} from "@tabler/icons-react";

type SocialItem = {
  title: string;
  href: string;
  icon: TablerIcon;
};

export const social: SocialItem[] = [
  {
    title: "WhatsApp",
    href: getWhatsAppLink(phone).toString(),
    icon: IconBrandWhatsapp,
  },
  {
    title: "Instagram",
    href: instagramUrl,
    icon: IconBrandInstagram,
  },
  {
    title: "Facebook",
    href: facebookUrl,
    icon: IconBrandFacebook,
  },
];
