// MockWebSocket.ts
export class MockWebSocket {
  static instances: MockWebSocket[] = [];
  messages: string[] = [];
  isOpen = false;
  url: string;
  onmessage?: (event: { data: string }) => void;
  onopen?: () => void;
  onclose?: () => void;

  constructor(url: string) {
      this.url = url;
      MockWebSocket.instances.push(this);
  }

  connect() {
      this.isOpen = true;
      setTimeout(() => this.onopen && this.onopen(), 100);
  }

  send(message: string) {
      this.messages.push(message);
      setTimeout(() => {
          this.onmessage && this.onmessage({ data: `Echo: ${message}` });
      }, 100);
  }

  close() {
      this.isOpen = false;
      setTimeout(() => this.onclose && this.onclose(), 100);
  }

  static clear() {
      MockWebSocket.instances = [];
  }
}
