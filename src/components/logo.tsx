import type { LinkProps } from "@radix-ui/themes";

import { Link } from "@radix-ui/themes";

import { Link as NextLink } from "@/i18n/navigation";

export function Logo({ href = "#", ...props }: LinkProps) {
  return (
    <Link size="5" underline="none" highContrast asChild {...props}>
      <NextLink href={href}>Simple Notebooks</NextLink>
    </Link>
  );
}
