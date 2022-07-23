import { renderHook, cleanup } from '@testing-library/react-hooks';

import { useInterval } from '../use-interval';

// refer to https://github.com/donavon/use-interval/blob/master/test/index.test.tsx
// refer to https://github.com/streamich/react-use/blob/master/tests/useInterval.test.ts
// refer to https://github.com/yoonminsang/react-oop-tetris/blob/main/src/hooks/__test__/use-interval.spec.ts

afterEach(cleanup);
jest.useFakeTimers();

describe('useInterval', () => {
  it('delay가 있는 경우 callback 호출', () => {
    const callback = jest.fn();

    renderHook(() => {
      useInterval(callback, 1000);
    });

    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(5000);
    expect(callback).toHaveBeenCalledTimes(5);
  });

  it('delay가 없는 경우 callback 호출x', () => {
    const callback = jest.fn();

    renderHook(() => {
      useInterval(callback, null);
    });

    jest.advanceTimersToNextTimer();
    expect(callback).not.toHaveBeenCalled();
  });

  it('callback이 변경되는 경우, 타이머 재실행x', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    let callback = callback1;

    const { rerender } = renderHook(() => {
      useInterval(callback, 1000);
    });

    jest.advanceTimersByTime(500);

    callback = callback2;
    rerender();

    jest.advanceTimersByTime(500);
    expect(callback1).toHaveBeenCalledTimes(0);
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  it('delay가 null로 변경되는 경우, 타이머 멈춤', () => {
    const callback = jest.fn();
    let delay: number | null = 1000;

    const { rerender } = renderHook(() => {
      useInterval(callback, delay);
    });

    jest.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledTimes(2);

    delay = null;
    rerender();

    jest.advanceTimersByTime(5000);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('같은 파라미터로 리렌더링 되는 경우, 타이머 재실행x', () => {
    const callback = jest.fn();

    const { rerender } = renderHook(() => {
      useInterval(callback, 1000);
    });

    jest.advanceTimersByTime(500);

    rerender();

    jest.advanceTimersByTime(500);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('unmount되는 경우, 타이머 멈춤', () => {
    const callback = jest.fn();

    const { unmount } = renderHook(() => useInterval(callback, 1000));

    jest.advanceTimersByTime(5000);
    expect(callback).toHaveBeenCalledTimes(5);

    unmount();

    jest.advanceTimersByTime(5000);
    expect(callback).toHaveBeenCalledTimes(5);
  });
});
