// WhatsApp CTA. The number comes from siteConfig; the message can be
// generated per plan so the chat opens with useful context.
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/config/site";
import { trackEvent } from "@/config/analytics";

export function WhatsAppButton({
  message,
  variant = "outline",
  size = "lg",
  label = "Chat on WhatsApp",
  source = "generic",
  className = "",
}: {
  message?: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  label?: string;
  source?: string;
  className?: string;
}) {
  if (!siteConfig.whatsapp) return null;
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { source })}
      >
        <MessageCircle aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}
