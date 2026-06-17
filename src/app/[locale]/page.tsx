import { Flex, Grid, Heading, Text } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <Flex width="100vw" height="100svh" direction="column" px="4" py="9">
      <Grid maxWidth="448px" width="100%" gap="7" m="auto">
        <Grid gap="4">
          <Heading size="6">Simple Notebooks</Heading>
          <Text size="3" wrap="balance">
            Simple Notebooks is an open source alternative, designed for quick
            and easy note-taking.
          </Text>
        </Grid>
      </Grid>
    </Flex>
  );
}
