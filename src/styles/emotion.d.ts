/* eslint-disable @typescript-eslint/no-empty-interface */

import { TTheme } from './theme/theme';

declare module '@emotion/react' {
  export interface Theme extends TTheme {}
}
