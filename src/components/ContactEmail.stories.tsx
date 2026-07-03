import type { Meta, StoryObj } from "@storybook/react";
import ContactEmail from "./ContactEmail";

const meta: Meta<typeof ContactEmail> = {
  title: "Components/ContactEmail",
  component: ContactEmail,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ContactEmail>;

export const IconButton: Story = {};

export const TextButton: Story = {
  args: {
    children: "Email Santi",
    className: "text-sm font-medium text-gray-700 hover:text-black",
  },
};
