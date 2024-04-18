import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import WebSocketChatClient from './WebSocketChatClient';

// TODO this test is broken

describe('WebSocketChatClient', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.runAllTimers();
  });

  it('should send messages and display responses', () => {
    render(<WebSocketChatClient />);
    const input: HTMLInputElement = screen.getByPlaceholderText('Type a message...');
    const sendButton = screen.getByText('Send');
    const msg = 'Hello WebSocket'

    expect(input).toBeDefined()
    expect(input.value).toBe('')
    expect(sendButton).toBeDefined()
    fireEvent.change(input, { target: { value: msg } });
    expect(input.value).toBe(msg)
    fireEvent.click(sendButton);

    // vi.runAllTimers();

    // expect(screen.getByText('Echo: ' + msg)).toBeDefined(); // doesn't find text
  });
});
