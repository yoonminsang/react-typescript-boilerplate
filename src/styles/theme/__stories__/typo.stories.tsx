import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TypoStyle } from '../typo.style';

const Div = styled.div``;

export default {
  title: 'styles/common/typo',
  component: Div,
} as ComponentMeta<typeof Div>;

const Template: ComponentStory<typeof Div> = (args) => <Div {...args} />;

export const Default = () => (
  <>
    {Object.entries(TypoStyle).map(([key, value]) => (
      <Template key={key} css={value}>
        {key}
      </Template>
    ))}
  </>
);
