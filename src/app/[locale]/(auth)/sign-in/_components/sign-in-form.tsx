"use client";

import type { GridProps } from "@radix-ui/themes";

import { useState, useTransition } from "react";

import { Error } from "@carbon/icons-react";
import {
  Button,
  Callout,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useTranslations } from "next-intl";

import { Link as NextLink } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";

export function SignInForm(props: GridProps) {
  const t = useTranslations("SignInPage");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("username") ?? "");
    const password = String(formData.get("password") ?? "");

    setError(null);

    startTransition(async () => {
      const { error } = await authClient.signIn.username({
        username,
        password,
        callbackURL: "/",
      });

      if (error) {
        setError(error.message ?? t("genericError"));
        return;
      }
    });
  }

  return (
    <Grid gap="7" asChild {...props}>
      <form onSubmit={handleSubmit}>
        <Grid gap="2">
          <Heading size="6">{t("title")}</Heading>
          <Text size="3">{t("subtitle")}</Text>
        </Grid>

        <Grid gap="5">
          <Grid gap="2">
            <Text as="label" htmlFor="username" size="2">
              {t("username")}
            </Text>
            <TextField.Root
              id="username"
              name="username"
              placeholder={t("usernamePlaceholder")}
              type="text"
              disabled={isPending}
              required
              autoFocus
              size="3"
            />
          </Grid>
          <Grid gap="2">
            <Flex direction="row" align="center" justify="between" gap="4">
              <Text as="label" htmlFor="password" size="2">
                {t("password")}
              </Text>
              <Link size="2" highContrast asChild>
                <NextLink href="/forgot-password">
                  {t("forgotPassword")}
                </NextLink>
              </Link>
            </Flex>
            <TextField.Root
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              disabled={isPending}
              required
              size="3"
            />
          </Grid>
        </Grid>

        {error ? (
          <Callout.Root color="red" size="1">
            <Callout.Icon>
              <Error size={16} />
            </Callout.Icon>
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        ) : null}

        <Button type="submit" size="3" highContrast loading={isPending}>
          {t("submit")}
        </Button>

        <Text size="3">
          {t("noAccount")}{" "}
          <Link highContrast asChild>
            <NextLink href="/sign-up">{t("signUp")}</NextLink>
          </Link>
        </Text>
      </form>
    </Grid>
  );
}
