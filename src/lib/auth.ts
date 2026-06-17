import { i18n } from "@better-auth/i18n";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins/admin";
import { username } from "better-auth/plugins/username";

import { authTranslations } from "@/lib/auth-translations";
import { prisma } from "@/lib/prisma";

export const auth = betterAuth({
  appName: "Simple Notebooks",
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    username(),
    admin(),
    i18n({
      translations: authTranslations,
      defaultLocale: "en",
      detection: ["cookie", "header"],
      localeCookie: "NEXT_LOCALE",
    }),
    nextCookies(),
  ],
});

export type Session = typeof auth.$Infer.Session;
