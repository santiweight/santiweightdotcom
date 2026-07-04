import type { Meta, StoryObj } from "@storybook/react";
import RootLayoutShell from "./RootLayoutShell";

const meta: Meta<typeof RootLayoutShell> = {
  title: "App/RootLayoutShell",
  component: RootLayoutShell,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof RootLayoutShell>;

/** Default layout with sample page content */
export const Default: Story = {
  args: {
    children: (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Page Title</h1>
        <p className="mt-2 text-gray-600">Sample page content area.</p>
      </div>
    ),
  },
  parameters: {
    nextjs: { navigation: { pathname: "/" } },
  },
};

/** Active nav: Past Work */
export const PastWorkRoute: Story = {
  args: {
    children: (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Past Work</h1>
        <p className="mt-2 text-gray-600">Content for past work page.</p>
      </div>
    ),
  },
  parameters: {
    nextjs: { navigation: { pathname: "/past-work" } },
  },
};

/** No children — empty main area */
export const EmptyContent: Story = {
  args: {},
  parameters: {
    nextjs: { navigation: { pathname: "/" } },
  },
};

/** Long content to verify scroll behaviour */
export const LongContent: Story = {
  args: {
    children: (
      <div className="p-8 space-y-4">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="text-gray-700">
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        ))}
      </div>
    ),
  },
  parameters: {
    nextjs: { navigation: { pathname: "/" } },
  },
};
