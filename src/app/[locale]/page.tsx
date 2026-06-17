import {
  Catalog,
  DocumentAudio,
  Extensions,
  MachineLearningModel,
} from "@carbon/icons-react";
import {
  Code,
  Flex,
  Grid,
  Heading,
  Link,
  Separator,
  Text,
} from "@radix-ui/themes";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link as NextLink } from "@/i18n/navigation";

const featureDefs = [
  { key: "chatWithYourSources", icon: Catalog },
  { key: "anyFormatOneKnowledgeBase", icon: Extensions },
  { key: "audioOverviews", icon: DocumentAudio },
  { key: "instantSummariesStudyGuides", icon: MachineLearningModel },
] as const;

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("HomePage");

  const features = featureDefs.map(({ key, icon }) => ({
    key,
    icon,
    title: t(`features.${key}.title`),
    description: t(`features.${key}.description`),
  }));

  return (
    <Flex width="100vw" height="100svh" direction="column" px="4" py="9">
      <Grid maxWidth="448px" width="100%" gap="7" m="auto">
        <Flex direction="row" align="center" justify="between" gap="4">
          <Heading size="5">{t("title")}</Heading>
          <Link size="2" highContrast asChild>
            <NextLink href="/sign-in">{t("signIn")}</NextLink>
          </Link>
        </Flex>

        <Grid columns="1" gap="5" asChild>
          <ul>
            {features.map((feature) => (
              <Grid
                key={feature.key}
                columns="16px_1fr"
                rows="auto_1fr"
                gapX="4"
                gapY="2"
                asChild
              >
                <li>
                  <feature.icon size={16} />
                  <Heading size="2" as="h2">
                    {feature.title}
                  </Heading>
                  <Text
                    size="2"
                    wrap="pretty"
                    style={{
                      gridColumnStart: "2",
                    }}
                  >
                    {feature.description}
                  </Text>
                </li>
              </Grid>
            ))}
          </ul>
        </Grid>

        <Separator size="4" />

        <Flex direction="row" align="center" justify="between" gap="4">
          <Code size="1" variant="ghost" color="gray">
            v0.0.1
          </Code>
          <Text size="1">
            Made with ♡ by{" "}
            <Link highContrast asChild>
              <NextLink href="https://www.mysko.kz/">Mysko</NextLink>
            </Link>
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
}
