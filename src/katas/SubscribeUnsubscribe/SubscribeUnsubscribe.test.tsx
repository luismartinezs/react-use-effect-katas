import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import Message from './SubscribeUnsubscribe';
import { emitter } from './MockEventEmitter';

vi.mock('./MockEventEmitter', () => {
  const originalModule = vi.importActual('./MockEventEmitter');
  return {
    emitter: {
      ...originalModule.emitter,
      subscribe: vi.fn(),
      unsubscribe: vi.fn()
    }
  };
});

describe('Message', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should subscribe on mount and unsubscribe on unmount', async () => {
    const { unmount } = render(<Message />);

    expect(emitter.subscribe).toHaveBeenCalledTimes(1);

    unmount();

    expect(emitter.unsubscribe).toHaveBeenCalledTimes(1);
  });
});
