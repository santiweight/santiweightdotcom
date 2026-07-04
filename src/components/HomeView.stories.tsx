import type { Meta, StoryObj } from "@storybook/react";
import HomeView from "./HomeView";

const meta: Meta<typeof HomeView> = {
  title: "Pages/Home",
  component: HomeView,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HomeView>;

/** Default home page layout */
export const Default: Story = {};

/** Narrow mobile viewport */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
