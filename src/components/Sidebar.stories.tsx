import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

/** Active route: Home "/" */
export const HomeActive: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
};

/** Active route: Past Work "/past-work" */
export const PastWorkActive: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/past-work",
      },
    },
  },
};

/** No nav item active (unknown route) */
export const NoActiveRoute: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/other",
      },
    },
  },
};
