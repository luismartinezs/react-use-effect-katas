type CallbackType = (message: string) => void;

export class MockEventEmitter {
  private listeners: CallbackType[] = [];

  constructor() {
    setInterval(() => {
      this.listeners.forEach(listener => listener(`Message at ${new Date().toLocaleTimeString()}`));
    }, 1000);
  }

  public subscribe(callback: CallbackType): void {
    console.log('Subscribing');
    this.listeners.push(callback);
  }

  public unsubscribe(callback: CallbackType): void {
    console.log('Unsubscribing');
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }
}

export const emitter = new MockEventEmitter();
