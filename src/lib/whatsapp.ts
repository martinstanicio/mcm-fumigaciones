export function getWhatsAppLink(phone: number, message?: string) {
  const link = new URL("https://api.whatsapp.com/send");

  link.searchParams.append("phone", phone.toString());
  if (message) link.searchParams.append("text", message);

  return link;
}
