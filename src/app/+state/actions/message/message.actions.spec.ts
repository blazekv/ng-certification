import { MESSAGE_ACTIONS } from './message.actions';

describe('success message', () => {
  it('should return an action', () => {
    expect(MESSAGE_ACTIONS.success({ message: 'test' }).type).toBe(
      '[Message] Show success message'
    );
  });
});

describe('warning message', () => {
  it('should return an action', () => {
    expect(MESSAGE_ACTIONS.warning({ message: 'test' }).type).toBe(
      '[Message] Show warning message'
    );
  });
});

describe('error message', () => {
  it('should return an action', () => {
    expect(MESSAGE_ACTIONS.error({ message: 'test' }).type).toBe('[Message] Show error message');
  });
});
