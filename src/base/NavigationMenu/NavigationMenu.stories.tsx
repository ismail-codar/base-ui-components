import type { Meta, StoryObj } from "@storybook/react";
import { NavigationMenu } from "./NavigationMenu";
import { styled } from "@stitches/react";
import { violet, mauve, indigo, purple } from "@radix-ui/colors";

const meta = {
  component: NavigationMenu,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NavigationMenu>;

export default meta;

const Callout = styled("a", {
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  background: `linear-gradient(135deg, ${purple.purple9} 0%, ${indigo.indigo9} 100%);`,
  borderRadius: 6,
  padding: 25,
  textDecoration: "none",
  outline: "none",
  userSelect: "none",
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const CalloutHeading = styled("div", {
  color: "white",
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 1.2,
  marginTop: 16,
  marginBottom: 7,
});

const CalloutText = styled("p", {
  all: "unset",
  color: mauve.mauve4,
  fontSize: 14,
  lineHeight: 1.3,
});

export const Story1: StoryObj<typeof meta> = {
  args: {
    items: [
      {
        title: "Learn",
        layout: "one",
        subItems: [
          {
            liProps: { style: { gridRow: "span 3" } },
            content: (
              <Callout href="/">
                <svg
                  aria-hidden
                  width="38"
                  height="38"
                  viewBox="0 0 25 25"
                  fill="white"
                >
                  <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                  <path d="M12 0H4V8H12V0Z"></path>
                  <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                </svg>
                <CalloutHeading>Radix Primitives</CalloutHeading>
                <CalloutText>
                  Unstyled, accessible components for React.
                </CalloutText>
              </Callout>
            ),
          },
          {
            title: "Stitches",
            content: "CSS-in-JS with best-in-class developer experience.",
          },
          {
            title: "Colors",
            content: "Beautiful, thought-out palettes with auto dark mode.",
          },
          {
            title: "Icons",
            content: "A crisp set of 15x15 icons, balanced and consistent.",
          },
        ],
      },
      {
        title: "Overview",
        subItems: [
          {
            title: "Introduction",
            href: "/docs/base/overview/introduction",
            content:
              "Build high-quality, accessible design systems and web apps.",
          },
          {
            title: "Getting started",
            href: "/docs/base/overview/getting-started",
            content:
              "A quick tutorial to get you up and running with Radix Primitives.",
          },
          {
            title: "Styling",
            href: "/docs/base/guides/styling",
            content: "Unstyled and compatible with any styling solution.",
          },
          {
            title: "Animation",
            href: "/docs/base/guides/animation",
            content:
              "Use CSS keyframes or any animation library of your choice.",
          },
          {
            title: "Accessibility",
            href: "/docs/base/overview/accessibility",
            content:
              " Tested in a range of browsers and assistive technologies.",
          },
          {
            title: "Releases",
            href: "/docs/base/overview/releases",
            content: "Radix Primitives releases and their changelogs.",
          },
        ],
      },
      {
        title: "Github",
        href: "https://github.com/radix-ui",
      },
    ],
  },
  render: (args) => (
    <div style={{ minHeight: "400px" }}>
      <NavigationMenu {...args} />
    </div>
  ),
};
