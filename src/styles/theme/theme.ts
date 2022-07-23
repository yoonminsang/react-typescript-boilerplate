import { SerializedStyles } from '@emotion/react';

import { color } from './color';
import { media } from './media';
import { TypoStyle } from './typo.style';
import { ScrollStyle } from './scroll.style';

export const theme = {
  ...color,
  ...media,
  ...TypoStyle,
  scroll: '' as unknown as SerializedStyles,
};

theme.scroll = ScrollStyle(theme);

export type TTheme = typeof theme;
