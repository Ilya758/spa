import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Form/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Primary: Story = {
  args: {
    href: '',
    color: 'bronzed',
    children: 'Text in link',
  },
};
