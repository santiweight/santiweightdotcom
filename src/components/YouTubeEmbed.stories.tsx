import type { Meta, StoryObj } from "@storybook/react";
import YouTubeEmbed from "./YouTubeEmbed";

const meta: Meta<typeof YouTubeEmbed> = {
  title: "Components/YouTubeEmbed",
  component: YouTubeEmbed,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 560, height: 315 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof YouTubeEmbed>;

// Sample video ID — Big Buck Bunny trailer (public domain)
const SAMPLE_ID = "aqz-KE-bpKQ";

export const Default: Story = {
  args: {
    videoId: SAMPLE_ID,
    title: "Big Buck Bunny",
  },
};

export const WithStartTime: Story = {
  args: {
    videoId: SAMPLE_ID,
    title: "Big Buck Bunny (start at 30s)",
    start: 30,
  },
};

export const LongTitle: Story = {
  args: {
    videoId: SAMPLE_ID,
    title: "A Very Long Video Title That Might Affect Layout and Accessibility Labels in Unexpected Ways",
  },
};
