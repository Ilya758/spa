import type { Meta, StoryObj } from '@storybook/react';
import { InfoBlock } from './InfoBlock';

const meta: Meta<typeof InfoBlock> = {
  title: 'Content/InfoBlock',
  component: InfoBlock,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof InfoBlock>;

export const Primary: Story = {
  args: {},
};
