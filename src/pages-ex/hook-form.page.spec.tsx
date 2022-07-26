import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import HookFormPage from './hook-form.page';

describe('HookFormPage', () => {
  it('성공', async () => {
    await act(async () => {
      render(<HookFormPage />);
    });
    expect(screen.queryAllByRole('alert')).toHaveLength(2);
    const email = screen.getByLabelText('이메일') as HTMLInputElement;
    const password = screen.getByLabelText('비밀번호') as HTMLInputElement;
    const button = screen.getByRole('button', { name: '로그인' });
    fireEvent.input(email, {
      target: {
        value: 'email@naver.com',
      },
    });
    fireEvent.input(password, {
      target: {
        value: '12341234',
      },
    });
    fireEvent.click(button);
    // fireEvent.submit(button);
    await waitFor(() => {
      expect(screen.queryAllByRole('alert')).toHaveLength(0);
    });
    expect(email.value).toBe('');
    expect(password.value).toBe('');
  });
});
