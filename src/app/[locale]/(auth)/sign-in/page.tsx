import { Flex } from "@radix-ui/themes";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { Logo } from "@/components/logo";

import { SignInForm } from "./_components/sign-in-form";

export default function SignInPage() {
  return (
    <Flex
      width="100vw"
      height="100svh"
      direction="column"
      px="4"
      py="9"
      position="relative"
      overflowX="hidden"
      overflowY="auto"
    >
      <Flex
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="64px"
        direction="row"
        align="center"
        justify="between"
        gap="5"
        px={{ initial: "4", md: "6" }}
      >
        <Logo href="/" />
        <LocaleSwitcher />
      </Flex>
      <SignInForm maxWidth="384px" width="100%" m="auto" />
    </Flex>
  );
}
