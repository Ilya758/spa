import type { Meta, StoryObj } from '@storybook/react';
import { Row } from './Row';
import { Col } from './Col';

const meta: Meta<typeof Row> = {
  title: 'Layout/Grid',
  component: Row,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Primary: Story = {
  render: ({ gutter }) => (
    <Row style={{ border: '1px solid' }} gutter={gutter}>
      <Col span={12}>Col1</Col>
      <Col span={12}>Col2</Col>
      <Col span={12}>Col3</Col>
    </Row>
  ),
  args: {
    gutter: 50,
  },
};
