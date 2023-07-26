import type { Meta, StoryObj } from '@storybook/react';
import { FooterLink } from './FooterLink';

const meta: Meta<typeof FooterLink> = {
  title: 'Layout/FooterLink',
  component: FooterLink,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['light', 'cheek', 'bronzed', 'pink', 'logo', 'charcoal'],
      control: 'radio',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FooterLink>;

export const Primary: Story = {
  args: {
    href: '',
    color: 'bronzed',
    children: 'Text in link',
  },
};
