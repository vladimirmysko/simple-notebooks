"use client";

import { Translate } from "@carbon/icons-react";
import { DropdownMenu, IconButton } from "@radix-ui/themes";

import { Link as NextLink, usePathname } from "@/i18n/navigation";

const locales = [
  {
    id: "en",
    label: "English",
  },
  {
    id: "ru",
    label: "Русский",
  },
  {
    id: "kk",
    label: "Қазақша",
  },
];

export function LocaleSwitcher(props: DropdownMenu.RootProps) {
  const pathname = usePathname();

  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger>
        <IconButton
          aria-label="Select language"
          type="button"
          variant="ghost"
          highContrast
        >
          <Translate size={16} />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="soft">
        {locales.map((locale) => (
          <DropdownMenu.Item key={locale.id} asChild>
            <NextLink href={pathname} locale={locale.id}>
              {locale.label}
            </NextLink>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
