import { render } from '@testing-library/react';

import App from './app';

describe('<App />', () => {
  it('basic test', () => {
    render(<App />);
    expect(1).toBe(1);
  });
});
