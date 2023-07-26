import type { Meta, StoryObj } from '@storybook/react';
import { HeaderLink } from './HeaderLink';

const meta: Meta<typeof HeaderLink> = {
  title: 'Layout/HeaderLink',
  component: HeaderLink,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['light', 'cheek', 'bronzed', 'pink', 'logo', 'charcoal'],
      control: 'radio',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderLink>;

export const Primary: Story = {
  args: {
    href: '',
    color: 'bronzed',
    children: 'Text in link',
  },
};
