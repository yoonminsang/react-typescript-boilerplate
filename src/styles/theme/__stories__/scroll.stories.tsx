import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const Div = styled.div`
  height: 200vh;
  margin: 20px;
  background-color: gray;
  overflow: auto;

  ${(props) => props.theme.scroll}
`;

export default {
  title: 'styles/common/scroll',
  component: Div,
} as ComponentMeta<typeof Div>;

const Template: ComponentStory<typeof Div> = (args) => <Div {...args} />;

export const Default = Template.bind({});
